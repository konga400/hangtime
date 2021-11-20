import React from 'react'

function ThumbUpDown({
    up,
    filled,
}) {
    let icon = "fas fa-thumbs-up";
    if (up) {
        icon = "fas fa-thumbs-up";
    }
    else {
        icon = "fas fa-thumbs-down";
    }

    let format;
    if (filled) {
        format = 'border-2 border-white bg-white rounded-lg px-3 py-1 w-max text-black'
    }
    else {
        format = 'border-2 border-white rounded-lg px-3 py-1 w-max text-white';
    }

    return (
        <>
            <div className={format}>
                <i class={icon}></i>
            </div>
        </>
    )
}

export default ThumbUpDown
