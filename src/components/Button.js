import React from 'react'
import { Link } from 'react-router-dom'

function Button({
    to,
    text,
}) {
    return (
        <>
            <Link to={to}>
                <div className='w-max p-3 bg-white'>
                    <h1 className='text-gray-900'>{text}</h1>
                </div>
            </Link>
        </>
    )
}

export default Button
