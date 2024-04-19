import ProfileHeader from '@/components/component/Profile/ProfileHeader'
import React from 'react'

const page = () => {
    return (
        <main className='flex flex-col lg:flex-row h-full w-full md:p-4items-center lg:justify-center lg:items-start'>
            <section className='md:w-[630px] w-full h-full flex flex-col items-center md:mt-8 mt-2'>
                <ProfileHeader />
            </section>
        </main>)
}

export default page