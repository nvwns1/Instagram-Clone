import Link from 'next/link'
import React from 'react'

interface IDontHaveAccountProps {
  title: 'Sign up' | 'Log in'
}
const DontHaveAccountCard = ({ title }: IDontHaveAccountProps) => {
  return (
    <div className='w-[350px] flex justify-center gap-1 py-3 items-center border-2 border-var(border-primary) text-xs '>
      {title === 'Log in' ? 'Don&apos;t have an account?' : 'Have an account?'}
      <Link href={title === 'Log in' ? '/signup' : '/login'}>
        <span className='text-accent cursor-pointer'>
          {title === 'Log in' ? 'Sign up' : 'Log in'}
        </span>
      </Link>
    </div>
  )
}

export default DontHaveAccountCard