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
        format = 'border-2 border-pink-600 bg-pink-600 rounded-lg px-3 py-1 w-max text-white'
    }
    else {
        format = 'border-2 border-pink-600 rounded-lg px-3 py-1 w-max text-pink-600';
    }

    return (
        <>
            <div className={format}>
                <i className={icon}></i>
            </div>
        </>
    )
}

export default ThumbUpDown
