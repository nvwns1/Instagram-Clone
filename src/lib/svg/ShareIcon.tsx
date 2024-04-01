import ISvgIconProps from '@/interfaces/ISvgProps'
import React from 'react'

const ShareIcon = (props:ISvgIconProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M22.0081 3L9.22607 10.083" stroke="black" strokeWidth="2" strokeLinejoin="round" />
            <path d="M11.7061 20.334L22.0081 3.00101H2.00806L9.22606 10.084L11.7061 20.334Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    )
}

export default ShareIcon