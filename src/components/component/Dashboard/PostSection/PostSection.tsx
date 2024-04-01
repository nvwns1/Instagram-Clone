import React from 'react'
import PostCard from './PostCard'
import HorizontalLine from '../../HorizontalLine/HorizontalLine'

const PostSection = () => {
    return (
        <section className='w-[468px] flex flex-col gap-4'>
            <PostCard />
            <HorizontalLine />
            <PostCard />
        </section>
    )
}

export default PostSection