import ISvgIconProps from '@/interfaces/ISvgProps'
import React from 'react'

const CommentIcon = (props: ISvgIconProps) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M19.6641 16.008C20.8793 13.9061 21.2876 11.4337 20.8129 9.05273C20.3382 6.67173 19.0129 4.54498 17.0846 3.06979C15.1563 1.59459 12.7569 0.871863 10.3347 1.03661C7.91242 1.20136 5.63298 2.24232 3.92219 3.96502C2.2114 5.68772 1.18629 7.97433 1.03835 10.3977C0.890419 12.821 1.62978 15.2153 3.11832 17.1334C4.60686 19.0514 6.74275 20.3619 9.12699 20.82C11.5112 21.2782 13.9807 20.8527 16.0741 19.623L21.0081 21L19.6641 16.008Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    )
}

export default CommentIcon