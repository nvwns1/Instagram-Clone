import ISvgIconProps from '@/interfaces/ISvgProps'
import React from 'react'

const AddIcon = (props: ISvgIconProps) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M2 12.2012V15.6512C2 18.5002 2.698 19.6562 3.606 20.5952C4.546 21.5042 5.704 22.2032 8.552 22.2032H15.448C18.296 22.2032 19.454 21.5032 20.394 20.5952C21.302 19.6562 22 18.5012 22 15.6512V8.75317C22 5.90417 21.302 4.74717 20.394 3.80817C19.454 2.90117 18.296 2.20117 15.448 2.20117H8.552C5.704 2.20117 4.546 2.90017 3.606 3.80817C2.698 4.74817 2 5.90417 2 8.75317V12.2012Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.54504 12.2021H17.455" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.0031 6.74615V17.6562" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default AddIcon