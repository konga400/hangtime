import React from 'react'

function PreferenceCard() {
    return (
        <>
            <p>This</p>
            <div className="flex justify-center items-center">
                <div className="relative rounded-xl bg-indigo-600 text-white h-96 w-28">
                    <div className="absolute top-3 min-w-full text-center">Up</div>
                    <div className="absolute bottom-3 min-w-full text-center">Down</div>
                </div>
            </div>
        </>
    )
}

export default PreferenceCard
