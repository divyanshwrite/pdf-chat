"use client";

import { generateEmbidding } from "@/actions/generateEmbidding";
import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export enum StatusText {
    UPLOADING = "Uploading...",
    UPLOADED = "Uploaded",
    SAVING = "Saving...",
    SAVED = "Saved",
    GENERATING = "Generating...",
    ERROR = "Error",
}

export type Status = StatusText[keyof StatusText];

function useUpload() {
    const [progress, setProgress] = useState<number | null>(null);
    const [fileId, setFileId] = useState<string | null>(null);
    const [status, setStatus] = useState<Status | null>(null);
    const { user } = useUser();
    const router = useRouter();

    const storage = getStorage(); // Initialize Firebase storage

    const handleUpload = async (file: File) => {
        if (!file || !user) return;

        try {
            setStatus(StatusText.UPLOADING);
            const fileIdToUploadTo = uuidv4();
            setFileId(fileIdToUploadTo);

            const storageRef = ref(storage, `users/${user.id}/${fileIdToUploadTo}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(percent);
                },
                (error) => {
                    console.error("Upload failed:", error);
                    setStatus(StatusText.ERROR);
                },
                async () => {
                    try {
                        setStatus(StatusText.UPLOADED);
                        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

                        setStatus(StatusText.SAVING);
                        await setDoc(doc(db, "users", user.id, "files", fileIdToUploadTo), {
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            downloadUrl: downloadUrl,
                            ref: uploadTask.snapshot.ref.fullPath,
                            createdAt: new Date(),
                        });

                        setStatus(StatusText.GENERATING);

                        await generateEmbidding(fileIdToUploadTo);                        

                        setFileId(fileIdToUploadTo)
                        

                        setStatus(StatusText.SAVED);
                        router.refresh(); // Refresh UI only after Firestore save
                    } catch (err) {
                        console.error("Error saving to Firestore:", err);
                        setStatus(StatusText.ERROR);
                    }
                }
            );
        } catch (err) {
            console.error("Unexpected error during upload:", err);
            setStatus(StatusText.ERROR);
        }
    };

    return { handleUpload, progress, status, fileId };
}

export default useUpload;
