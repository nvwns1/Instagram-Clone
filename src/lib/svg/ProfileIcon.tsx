import ISvgIconProps from '@/interfaces/ISvgProps'
import React from 'react'

const ProfileIcon = (props: ISvgIconProps) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
        </svg>
    )
}

export default ProfileIcon