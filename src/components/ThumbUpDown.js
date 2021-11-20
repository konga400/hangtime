import React from 'react'

function ThumbUpDown({
    up,
}) {
    let icon = "fas fa-thumbs-up";
    if (up) {
        icon = "fas fa-thumbs-up";
    }
    else {
        icon = "fas fa-thumbs-down";
    }
    return (
        <>
            <div className='border-2 border-white rounded-lg px-3 py-1 w-max text-white'>
                <i class={icon}></i>
            </div>
        </>
    )
}

export default ThumbUpDown
