import { adminDb } from '@/firebaseAdmin';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

async function ChatToFilePage({
    params: { id },
}: {
    params: {
        id: string;
    };
}) {
    
    const { userId } = await auth();
    const ref = await adminDb
    .collection('users')
    .doc(userId!)
    .collection('files')
    .doc(id)
    .get();

    const url = ref.data()?.donwloadUrl;
    return <div className='grid lg:grid-cols-5 h-full overflow-hidden'>
        <div className='col-span-5 lg:col-span-2 overflow-y-auto'>

        </div>

        <div className='col-span-5 lg:col-span-3 bg-gray-100 border-r-2 lg:border-indigo-600 lg:-order-1 overflow-auto'>

        </div>
    </div>

}

export default ChatToFilePage
