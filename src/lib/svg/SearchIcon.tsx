import React from 'react'
import ISvgIconProps from '@/interfaces/ISvgProps'

const SearchIcon = (props: ISvgIconProps) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M18 9.49982C18 11.181 17.5015 12.8243 16.5675 14.2222C15.6335 15.62 14.306 16.7094 12.7528 17.3528C11.1996 17.9961 9.49057 18.1645 7.84174 17.8365C6.1929 17.5085 4.67834 16.699 3.4896 15.5102C2.30085 14.3215 1.4913 12.8069 1.16333 11.1581C0.835355 9.50925 1.00368 7.80018 1.64703 6.24701C2.29037 4.69384 3.37984 3.36632 4.77766 2.43233C6.17547 1.49833 7.81886 0.999817 9.5 0.999817C11.7543 0.999817 13.9164 1.89535 15.5104 3.48941C17.1045 5.08347 18 7.24548 18 9.49982Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.511 15.5108L21 20.9998" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default SearchIcon