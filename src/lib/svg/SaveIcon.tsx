import ISvgIconProps from '@/interfaces/ISvgProps'
import React from 'react'

const SaveIcon = (props:ISvgIconProps) => {
    return (
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M21 25L11 14.92L1 25V1H21V25Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default SaveIcon