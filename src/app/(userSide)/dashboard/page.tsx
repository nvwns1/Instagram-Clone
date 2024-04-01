import PostSection from '@/components/component/Dashboard/PostSection/PostSection'
import StorySection from '@/components/component/Dashboard/StorySection/StorySection'
import React from 'react'

const Dashboard = () => {
    return (
        <main className='flex flex-col lg:flex-row h-full w-full md:p-4 bg-white items-center lg:justify-center lg:items-start'>
            <section className='md:w-[630px] w-full h-full flex flex-col items-center'>
                <StorySection />
                <PostSection />
            </section>
            <section className="hidden xl:block h-full w-[320px] ml-16">
                This is another
            </section>
        </main>
    )
}

export default Dashboard