import DontHaveAccountCard from '@/components/cards/ReusableCard/DontHaveAccountCard'
import SignupForm from '@/components/form/SignUp/Signup'
import React from 'react'

const page = () => {
    return (
        <>
            <SignupForm />
            <DontHaveAccountCard title="Sign up" />
        </>
    )
}

export default page