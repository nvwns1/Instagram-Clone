"use client"
import Navbar from '@/components/component/Navbar/Navbar';
import Sidebar from '@/components/component/Sidebar/Sidebar';
import { getAuthCookie } from '@/services/localCookie';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const UserLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter()
    useEffect(() => {
        const authCheck = () => {
            const newAuthToken = getAuthCookie();
            if (newAuthToken) {
                router.push('/dashboard');
            } else {
                router.push('/login');
            }
        };
        authCheck();
    }, []);

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