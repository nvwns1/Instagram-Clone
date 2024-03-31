
import React from 'react'
import Image from 'next/image'
import { AddIcon, ExploreIcon, ReelsIcon, MessageIcon, HomeIcon, SearchIcon, LoveIcon } from '@/lib/helper';
import { ISidebarData } from '@/interfaces/ISidebar';
import ISvgIconProps from '@/interfaces/ISvgProps';

type SvgIconComponent = React.ComponentType<ISvgIconProps>;

const iconComponents: { [key: string]: SvgIconComponent } = {
    HomeIcon,
    ExploreIcon,
    ReelsIcon,
    MessageIcon,
    AddIcon, SearchIcon, LoveIcon
};

const SidebarCard = ({ title, icon, path, showSmallScreen }: ISidebarData) => {
    const IconComponent = iconComponents[icon];

    return (
        <>
            {/* For Small Screen Only */}
            {showSmallScreen && <main className={`flex items-center justify-center gap-4 w-12 h-12 md:hidden lg:hidden`}>
                {IconComponent && <IconComponent height={24} width={24} />
                }
            </main>}
            {/* For Md and Lg Screen */}
            <main>
                <div className={`hidden md:flex items-center gap-1 w-full h-[56px] hover:bg-gray-200 cursor-pointer lg:w-200px lg:px-2 lg:hover:bg-slate-300 radius-lg`}>
                    <div className='w-12 h-12 flex items-center justify-center lg:p-2'>
                        {IconComponent && <IconComponent height={24} width={24} />}
                    </div>
                    <p className='hidden lg:flex text-sm'>{title}</p>
                </div>
            </main>
        </>
    )
}

export default SidebarCard