import React, { ButtonHTMLAttributes } from 'react'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
}

const Button = ({ label, ...rest }: IButtonProps) => {
    return (
        <button
            {...rest}
            className='bg-accent text-white py-1 w-full rounded-md text-sm font-semibold my-2'>
            {label}
        </button>
    )
}

export default Button