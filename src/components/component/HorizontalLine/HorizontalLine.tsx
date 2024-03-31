import React from 'react'

interface IHorizontalLine {
    text?: string
}

const HorizontalLine = ({ text }: IHorizontalLine) => {
    return (
        <div className=''>
            {text ?
                (
                    <div className='flex w-full items-center justify-center'>
                        <hr className='border-gray-400 w-20' />
                        <span className='text-gray-400 text-xs px-2 font-bold'>{text}</span>
                        <hr className='border-gray-400 w-20' />
                    </div>
                )
                : <hr className='border-gray-300' />}
        </div >
    )
}

export default HorizontalLine