import React from 'react';
import { Link } from 'react-router-dom';

function Button({
    to,
    text,
}) {
    return (
        <>
            <Link to={to}>
                <div className='w-max px-4 py-3 bg-pink-600 rounded-lg'>
                    <h1 className='text-white text-xl font-bold'>{text}</h1>
                </div>
            </Link>
        </>
    )
}

export default Button
