import Navbar from '@/components/component/Navbar/Navbar';
import Sidebar from '@/components/component/Sidebar/Sidebar';
import React from 'react'

const UserLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <section className='h-screen w-screen overflow-y-scroll flex flex-col md:flex-row justify-start'>
            <Navbar />
            <Sidebar />
            <section className='h-full w-full z-0'>
                {children}
            </section>
        </section>
    )
}

export default UserLayout