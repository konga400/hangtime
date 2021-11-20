import React, { useState } from 'react'
import filtered_data_db from '../filtered_data';
import MicroAttributeCards from './MicroAttributeCards'
import ThumbUpDown from './ThumbUpDown'

function ActivityCard({
    name,
    physical_effort,
    time,
    cost,
    equipment_required,
    going_out,
    id,
    ad,
}) {
    let physical_effort_string = "";
    let time_string = "";
    let cost_string = "";
    let equipment_required_string = "";
    let going_out_string = "";

    if (physical_effort) {
        physical_effort_string = "Active";
    }
    else {
        physical_effort_string = "Chill";
    }

    if (time) {
        time_string = "time: long";
    }
    else {
        time_string = "time: short";
    }

    if (cost) {
        cost_string = "Paid";
    }
    else {
        cost_string = "Free";
    }

    if (equipment_required) {
        equipment_required_string = "Equipment: yes";
    }
    else {
        equipment_required_string = "Equipment: no";
    }

    if (going_out) {
        going_out_string = "Going out";
    }
    else {
        going_out_string = "Staying in";
    }

    const [rightfilled, setRightFilled] = useState(false);
    const [leftfilled, setLeftFilled] = useState(false);

    // if (filtered_data_db.at(id).thumbs === 1) {
    //     setLeftFilled(true);
    // }
    // if (filtered_data_db.at(id).thumbs === 2) {
    //     setRightFilled(true);
    // }


    let right = () => {
        setRightFilled(true);
        filtered_data_db.at(id).thumbs = 2;
    }
    let left = () => {
        setLeftFilled(true);
        filtered_data_db.at(id).thumbs = 1;
    }

    return (
        <>
            {/* <div className='relative flex justify-center items-center'> */}
            <div className='rounded-2xl bg-gray-600 p-5 w-96 m-4'>
                <h1 className='font-sans text-2xl text-white'>{name}</h1>
                <div className='w-full overflow-y-hidden overflow-x-auto p-3 flex'>
                    <MicroAttributeCards text={physical_effort_string} />
                    <MicroAttributeCards text={cost_string} />
                    <MicroAttributeCards text={time_string} />
                    <MicroAttributeCards text={equipment_required_string} />
                    <MicroAttributeCards text={going_out_string} />

                </div>
                <div className='relative flex p-3 mb-6'>
                    <div className='absolute right-10' onClick={() => right()}>
                        <ThumbUpDown up={true} id={0} filled={rightfilled} />
                    </div>
                    <div className='absolute left-10' onClick={() => left()}>
                        <ThumbUpDown up={false} id={0} filled={leftfilled} />
                    </div>
                </div>

            </div>
            {/* </div> */}
        </>
    )
}

export default ActivityCard
