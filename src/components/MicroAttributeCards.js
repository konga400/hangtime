import React from 'react'

function MicroAttributeCards({
    text,
}) {
    return (
        <>
            <div className=' bg-purple-800 text-white px-2 py-1 mx-1 text-sm w-max rounded-lg whitespace-nowrap'>
                {text}
            </div>
        </>
    )
}

export default MicroAttributeCards
