"use client";

import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation';

function PlaceholderDocument() {

    const router = useRouter();

    const handleClick = async () => {
        router.push('/dashboard/upload');
    }

  return (
    <Button onClick={handleClick} className='flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400'>
        <PlusCircleIcon className='h-16 w-18'/>
      <p>Add A Document</p>
    </Button>
  )
}

export default PlaceholderDocument
