import React from 'react'
import Image from 'next/image'
import Button from '@/components/component/Button/Button'
import HorizontalLine from '@/components/component/HorizontalLine/HorizontalLine'

const SignupForm = () => {
    return (
        <main className='w-[350px] border-2 border-var(--border-primary)  p-8 pt-16 flex flex-col items-center gap-8'>
            <div className='flex flex-col items-center'>
                <Image src='/static/assets/svg/Instagram.svg' width={140} height={140} alt='logo' />
                <p className='text-center'>Sign up to see photos and videos from your friends.</p>
            </div>
            <section className='flex flex-col items-center gap-3'>
                <div>
                    <input type="text" placeholder='Mobile number or Email' />
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <br />
                    <br />
                    <p className='text-xs text-center'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    <Button label='Sign up' onClick={(e) => { e.preventDefault() }} />
                </div>
                <HorizontalLine text='OR' />
                <p className='text-xs'>Log in with Facebook</p>
                <p className='text-xs'>Forgot Password?</p>
            </section>
        </main>
    )
}

export default SignupForm