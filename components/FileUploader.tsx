"use client"; // Ensure it's a client component

import useUpload from "@/hooks/useUpload";
import { useRouter } from "next/navigation"; // FIX: Correct import for App Router
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

function FileUploader() {
    const { handleUpload, progress, status, fileId } = useUpload();
    const router = useRouter();
    const [files, setFiles] = useState<File[]>([]);

    useEffect(() => {
        if (fileId) {
            router.push(`/dashboard/files/${fileId}`);
        }
    }, [fileId, router]);

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            if (acceptedFiles.length === 0) return;

            const file = acceptedFiles[0];
            if (file) {
                await handleUpload(file); // Ensure upload completes before updating state
                setFiles([file]); // Update files after successful upload
            }
        },
        [handleUpload] // FIX: Added handleUpload to dependencies
    );

    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        maxSize: 5 * 1024 * 1024,
    });


    const uploadInProgress = progress !== null && progress >= 0 && progress <= 100;

    return (
        <div className="flex flex-col gap-4 max-w-7xl mx-auto rounded-lg h-96 items-center">

        {uploadInProgress &&(
            <div>
                <div>
                    {progress} % 
                </div>
            </div>
        )}
            <div
                {...getRootProps()}
                className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${
                    isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"
                }`}
            >
                <input {...getInputProps()} />
                <div className="flex">
                    {isDragActive ? (
                        <p className="text-blue-500">Drop the files here...</p>
                    ) : (
                        <p>Drag & drop a PDF here, or click to select a file</p>
                    )}
                </div>
            </div>

            {files.length > 0 && (
                <div className="mt-3">
                    <h3 className="text-lg font-semibold">Uploaded Files:</h3>
                    <ul>
                        {files.map((file, index) => (
                            <li key={index} className="text-gray-700">
                                {file.name} ({(file.size / 1024).toFixed(2)} KB)
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default FileUploader;
