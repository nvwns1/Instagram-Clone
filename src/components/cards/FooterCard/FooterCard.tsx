import React from 'react'

const FooterCard = ({ title }: { title: string }) => {
    return (
        <div className='text-gray-500 text-sm cursor-pointer hover:underline'>{title}</div>
    )
}

export default FooterCard