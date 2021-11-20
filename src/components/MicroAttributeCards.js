import React from 'react'

function MicroAttributeCards({
    text,
}) {
    return (
        <>
            <div className='bg-red-400 text-white p-1 mx-1 text-sm w-max rounded-lg'>
                {text}
            </div>
        </>
    )
}

export default MicroAttributeCards
