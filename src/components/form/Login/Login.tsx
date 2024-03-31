import React from 'react'
import Image from 'next/image'
import Button from '@/components/component/Button/Button'
import HorizontalLine from '@/components/component/HorizontalLine/HorizontalLine'

const LoginForm = () => {
    return (
        <main className='w-[350px] border-2 border-var(--border-primary)  p-8 pt-16 flex flex-col items-center gap-8'>
            <Image src='/static/assets/svg/Instagram.svg' width={140} height={140} alt='logo' />
            <section className='flex flex-col items-center gap-2'>
                <div>
                    <input type="text" placeholder='Phone number, username or email' />
                    <input type="text" placeholder='Password' />
                    <Button label='Log in' onClick={(e) => { e.preventDefault() }} />
                </div>
                <HorizontalLine text='OR' />
                <p className='text-xs'>Log in with Facebook</p>
                <p className='text-xs'>Forgot Password?</p>
            </section>
        </main>
    )
}

export default LoginForm