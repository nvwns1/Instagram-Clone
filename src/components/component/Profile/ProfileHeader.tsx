"use client"
import React from 'react'
import Button2 from '../Button/Button2'
import { HomeIcon } from '@/lib/helper'
import { clearAuthCookie } from '@/services/localCookie'
import { useRouter } from 'next/navigation'

const ProfileHeader = () => {
    const router = useRouter()
    const handleLogout = () => {
        clearAuthCookie()
        router.push("/")
    }
    return (
        <main className='h-40 w-full flex gap-5'>
            <div className='flex gap-4 ml-4 w-full'>
                <div className='h-[77px] w-[77px] md:h-40 md:w-40 rounded-full bg-red-800 flex items-center justify-center'>Profile</div>
                <div className='flex flex-col gap-4'>
                    <div className='h-10 flex w-full gap-6 items-center'>
                        <p className='text-lg'>nvwns</p>
                        <Button2 label='Edit Profile' />
                        <Button2 label='View Archive' />
                        <HomeIcon onClick={() => { handleLogout() }} />
                    </div>
                    <div className='h-10 flex justify-between'>
                        <p><b className='mr-1'>0</b>Post</p>
                        <p><b className='mr-1'>487</b>followers</p>
                        <p><b className='mr-1'>0</b>following</p>
                    </div>
                    <div className='h-10'>
                        <p className='text-sm font-bold space-x-2'>Suman M</p>
                        <p className='text-sm'>Bio Section</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProfileHeader