"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/component/Button/Button'
import HorizontalLine from '@/components/component/HorizontalLine/HorizontalLine'
import { ICreateUserForm, initialLoginForm } from '@/interfaces/IAuth'
import { useLoginUser } from '@/services/auth'
import { useRouter } from 'next/navigation'
import { getAuthCookie } from '@/services/localCookie'

const LoginForm = () => {
    const router = useRouter()
    if (getAuthCookie()) router.push('/dashboard')

    const [loginState, setLoginState] = useState(initialLoginForm)
    const handleLoginStateChange = (updatedValue: Partial<ICreateUserForm>) => {
        setLoginState((prev) => ({
            ...prev,
            ...updatedValue
        }))
    }
    const { loading, error, loginUser } = useLoginUser();
    const handleSubmit = async () => {
        const userData = await loginUser(loginState.email, loginState.password)
        if (userData) {
            const a = getAuthCookie()
            console.log(a)
        }
    }
    return (
        <main className='w-[350px] border-2 border-var(--border-primary)  p-8 pt-16 flex flex-col items-center gap-8'>
            <Image src='/static/assets/svg/Instagram.svg' width={140} height={140} alt='logo' />
            <section className='flex flex-col items-center gap-2'>
                <div>
                    <input type="text" placeholder='Phone number, username or email'
                        onChange={e => handleLoginStateChange({ email: e.target.value })} />
                    <input type="text" placeholder='Password'
                        onChange={e => handleLoginStateChange({ password: e.target.value })} />
                    <Button label={loading ? '...' : 'Log in'} onClick={handleSubmit} />
                </div>
                <HorizontalLine text='OR' />
                <p className='text-xs'>Log in with Facebook</p>
                <p className='text-xs text-red-500'>{error}</p>
                <p className='text-xs'>Forgot Password?</p>
            </section>
        </main>
    )
}

export default LoginForm