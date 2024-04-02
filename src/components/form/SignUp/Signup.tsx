"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/component/Button/Button'
import HorizontalLine from '@/components/component/HorizontalLine/HorizontalLine'
import { ICreateUserForm, initialCreateUserForm } from '@/interfaces/IAuth'
import { registerUser } from '@/services/auth'

const SignupForm = () => {
    const [signUpState, setSignUpState] = useState(initialCreateUserForm)
    const handleSignUpStateChange = (updatedValue: Partial<ICreateUserForm>) => {
        setSignUpState((prev) => ({
            ...prev,
            ...updatedValue
        }))
    }
    const handleSubmit = () => {
        const response = registerUser({
            email: signUpState.email,
            password: signUpState.password,
            fullName: signUpState.fullName,
            username: signUpState.username
        })
        console.log(response)
    }

    return (
        <main className='w-[350px] border-2 border-var(--border-primary)  p-8 pt-16 flex flex-col items-center gap-8'>
            <div className='flex flex-col items-center'>
                <Image src='/static/assets/svg/Instagram.svg' width={140} height={140} alt='logo' />
                <p className='text-center'>Sign up to see photos and videos from your friends.</p>
            </div>
            <section className='flex flex-col items-center gap-3'>
                <div>
                    <input type="text" placeholder='Mobile number or Email' value={signUpState.email}
                        onChange={(e) => handleSignUpStateChange({ email: e.target.value })} />

                    <input type="text" placeholder='Full Name' value={signUpState.fullName}
                        onChange={(e) => handleSignUpStateChange({ fullName: e.target.value })}
                    />

                    <input type="text" placeholder='Username' value={signUpState.username}
                        onChange={(e) => handleSignUpStateChange({ username: e.target.value })} />

                    <input type="password" placeholder='Password' value={signUpState.password}
                        onChange={(e) => handleSignUpStateChange({ password: e.target.value })} />

                    <br />
                    <br />
                    <p className='text-xs text-center'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    <Button label='Sign up' onClick={handleSubmit} />
                </div>
                <HorizontalLine text='OR' />
                <p className='text-xs'>Log in with Facebook</p>
                <p className='text-xs'>Forgot Password?</p>
            </section>
        </main>
    )
}

export default SignupForm