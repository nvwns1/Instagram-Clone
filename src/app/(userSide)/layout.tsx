import Navbar from '@/components/component/Navbar/Navbar';
import Sidebar from '@/components/component/Sidebar/Sidebar';
import React from 'react'

const UserLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <section className='h-screen w-screen flex flex-col md:flex-row justify-start'>
            <Navbar />
            <Sidebar />
            <section className='bg-red-500 h-20 w-20'></section>
            {children}
        </section>
    )
}

export default UserLayout