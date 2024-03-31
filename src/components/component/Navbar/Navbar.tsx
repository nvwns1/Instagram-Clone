import { LoveIcon, SearchIcon } from '@/lib/helper'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='flex min-w-[300px] md:hidden h-16 w-full p-4 items-center justify-between' >
            <div className='flex items-center justify-center'>
                <Image src='/static/assets/svg/instagram.svg' height={100} width={100} alt="image" />
            </div>
            <div className='flex gap-4'>
                <SearchIcon />
                <LoveIcon />
            </div>
        </nav >
    )
}

export default Navbar