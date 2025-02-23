'use server'

import { generateEmbiddingInPineconeVectorStore } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";

export async function generateEmbidding(docId: string) {
    auth().protect();

    await generateEmbiddingInPineconeVectorStore(docId);

    revalidatePath('/dashboard')

    return { completed: true }
}
