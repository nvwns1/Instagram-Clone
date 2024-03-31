import React from 'react'
import SidebarCard from './components/SidebarCard'
import Image from 'next/image'
import { sidebarData } from '@/data/SidebarData'
import { ISidebarData } from '@/interfaces/ISidebar'
import { InstaIcon, LoveIcon, SearchIcon } from '@/lib/helper'

const Sidebar = () => {
    return (
        <>
            {/* This Nav is only for small Screen */}
            <nav className='flex min-w-[300px] md:hidden h-16 w-full p-4 items-center justify-between'>
                <div className='flex items-center justify-center'>
                    <Image src='/static/assets/svg/instagram.svg' height={100} width={100} alt="image" />
                </div>
                <div className='flex gap-4'>
                    <SearchIcon />
                    <LoveIcon />
                </div>
            </nav>

            <aside className='absolute bottom-0 left-0 min-w-[300px] w-[100%] h-[48px] flex md:flex md:flex-col gap-2 md:w-[50px] lg:w-[230px] md:h-screen border-r border-gray-400'>
                <div className='h-[92px] hidden md:hidden lg:flex items-center justify-center'>
                    <Image src='/static/assets/svg/instagram.svg' height={100} width={100} alt="image" />
                </div>
                <div className='h-[92px] hidden md:flex lg:hidden items-center justify-center'><InstaIcon /></div>
                <div className='flex w-full md:flex-col justify-around md:h-[500px] min-w-[380px]'>
                    {sidebarData.map((item: ISidebarData, index) => {
                        return <SidebarCard {...item} key={index} />
                    })}
                </div>
            </aside>
        </>
    )
}

export default Sidebar