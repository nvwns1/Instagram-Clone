import React, { ButtonHTMLAttributes } from 'react'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
}

const Button = ({ label, ...rest }: IButtonProps) => {
    return (
        <button
            {...rest}
            className='bg-gray-200 text-black px-2 rounded-md text-xs h-8 font-semibold'>
            {label}
        </button>
    )
}

export default Button