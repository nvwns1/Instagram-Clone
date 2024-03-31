import DontHaveAccountCard from '@/components/cards/ReusableCard/DontHaveAccountCard'
import LoginForm from '@/components/form/Login/Login'
import React from 'react'

const Login = () => {
  return (
    <>
      <LoginForm />
      <DontHaveAccountCard title="Log in" />
    </>
  )
}

export default Login