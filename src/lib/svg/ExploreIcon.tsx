import ISvgIconProps from '@/interfaces/ISvgProps'
import React from 'react'

const ExploreIcon = (props: ISvgIconProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_36_180)">
                <path d="M13.9411 13.9528L7.58105 16.4238L10.0601 10.0558L16.4201 7.58484L13.9411 13.9528Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0601 10.0558L13.9491 13.9448L7.58105 16.4238L10.0601 10.0558Z" fill="black" />
                <path d="M12.001 22.5048C17.8 22.5048 22.501 17.8038 22.501 12.0048C22.501 6.20583 17.8 1.50482 12.001 1.50482C6.20199 1.50482 1.50098 6.20583 1.50098 12.0048C1.50098 17.8038 6.20199 22.5048 12.001 22.5048Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_36_180">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ExploreIcon