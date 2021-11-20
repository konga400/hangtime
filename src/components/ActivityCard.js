import React from 'react'
import MicroAttributeCards from './MicroAttributeCards'
import ThumbUpDown from './ThumbUpDown'

function ActivityCard({
    id,
}) {
    return (
        <>
            {/* <div className='relative flex justify-center items-center'> */}
            <div className='rounded-2xl bg-gray-600 p-5 w-96 m-4'>
                <h1 className='font-sans text-2xl text-white'>Spikeball</h1>
                <div className='w-full overflow-y-hidden overflow-x-auto p-3 flex'>
                    <MicroAttributeCards text="Outdoor" />
                    <MicroAttributeCards text="Paid" />
                    <MicroAttributeCards text="Simple" />
                    <MicroAttributeCards text="DIY" />

                </div>
                <div className='relative flex p-3 mb-6'>
                    <div className='absolute right-10'>
                        <ThumbUpDown up={true} id={0} />
                    </div>
                    <div className='absolute left-10'>
                        <ThumbUpDown up={false} id={0} />
                    </div>
                </div>

            </div>
            {/* </div> */}
        </>
    )
}

export default ActivityCard
