import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import { FilePlus2 } from 'lucide-react'

function Header() {
    return (
        <div className='flex justify-between p-5 bg-white shadow-sm'>
            <a href='/' className='text-2xl'><span className="text-indigo-500 font-bold">Inksight</span></a>
            <SignedIn>
                <div className='flex items-center space-x-2'>

                    <Button asChild variant="link" className='hidden md:flex'>
                        <a href='/dashboard/upgrade'>Pricing</a>
                    </Button>

                    <Button asChild variant="outline">
                        <a href='/dashboard'>My Document</a>
                    </Button>

                    <Button asChild variant="outline">
                        <a href='/dashboard/upload'>
                            <FilePlus2 className='text-indigo-600' />
                        </a>
                    </Button>

                    <UserButton />
                </div>
            </SignedIn>
        </div>
    )
}

export default Header
