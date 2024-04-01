import {
    LoveIcon, ProfileIcon, HorizontalThreeDotIcon, SmileEmoji, CommentIcon, ShareIcon,
    SaveIcon
} from '@/lib/helper'
import React from 'react'
import HorizontalLine from '../../HorizontalLine/HorizontalLine'

const PostCard = () => {
    return (
        <div className='w-full'>
            <div className="head h-11 w-full flex justify-between px-2 border-b items-center">
                <div className="left flex items-center gap-2">
                    <ProfileIcon />
                    <p className='text-sm font-bold'>routineofnepalbanda</p>
                </div>
                <div className="right">
                    <HorizontalThreeDotIcon />
                </div>
            </div>
            <div className="image h-[468px] w-[468px] flex items-center justify-center">
                Here will be Image
            </div>
            <div className="Footer flex flex-col px-2 gap-2">
                <div className="icons h-10 flex items-center justify-between">
                    <div className='left flex gap-4'>
                        <LoveIcon />
                        <CommentIcon />
                        <ShareIcon />
                    </div>
                    <div className='right'>
                        <SaveIcon />
                    </div>
                </div>
                <div className='Likes flex items-center'>
                    <ProfileIcon height={16} />
                    <p className='font-bold text-sm'>3, 1023 Likes</p>
                </div>
                <div className='bioSection flex'>
                    <p className='text-sm'><span className='font-bold'>routineofnepalbanda</span>
                        Dolphin spotted in Gandak Canal, Parasi. 😮
                        <span className='text-[#737373]'>...more</span>
                    </p>
                </div>
                <div>
                    <p className='text-sm text-[#737373]'>View All comments</p>
                </div>
                <div className='flex justify-between items-center text-sm text-[#737373]'>
                    <p>Add a Comment</p>
                    <SmileEmoji />
                </div>
            </div>
        </div>
    )
}

export default PostCard