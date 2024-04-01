import React from 'react'
import SidebarCard from './components/SidebarCard'
import Image from 'next/image'
import { sidebarData } from '@/data/SidebarData'
import { ISidebarData } from '@/interfaces/ISidebar'
import { InstaIcon } from '@/lib/helper'

const Sidebar = () => {
    return (
        <section className='md:h-full w-full md:w-[50px] lg:w-[230px] z-50'>
            <aside className='fixed z-50 bottom-0 left-0 min-w-[300px] md:min-w-[50px] lg:min-w-[230px] w-[100%] h-[48px] md:flex md:flex-col gap-2 md:w-[50px] lg:w-[230px] md:h-screen md:border-r border-t border-gray-400'>
                <div className='h-[92px] hidden md:hidden lg:flex items-center justify-center'>
                    <Image src='/static/assets/svg/instagram.svg' height={100} width={100} alt="image" />
                </div>
                <div className='h-[92px] hidden md:flex lg:hidden items-center justify-center'><InstaIcon /></div>
                <div className='flex w-full px- md:px:0 md:flex-col justify-evenly md:h-[500px] min-w-[380px]'>
                    {sidebarData.map((item: ISidebarData, index) => {
                        return <SidebarCard {...item} key={index} />
                    })}
                </div>
            </aside>
        </section>
    )
}

export default Sidebar