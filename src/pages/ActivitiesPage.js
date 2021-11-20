import React from 'react';
import ActivityCard from '../components/ActivityCard';
import filter_data from '../filter-data';
import activity_data from '../activity-data';
import filtered_data_db from '../filtered_data';


function ActivitiesPage() {

    let temp_data = activity_data;
    let filtered_data = [];
    let allCards = [];
    for (let index = 0; index < temp_data.length; index++) {
        if (temp_data.at(index).cost === true && filter_data.at(0).swipe === 'down') {
            filtered_data.push(temp_data.at(index));
        }

        // If they are false
        if (temp_data.at(index).cost === false && filter_data.at(0).swipe === 'up') {
            filtered_data.push(temp_data.at(index));
        }
    }
    temp_data = filtered_data;


    filtered_data = [];
    for (let index = 0; index < temp_data.length; index++) {
        if (temp_data.at(index).physical_effort === true && filter_data.at(1).swipe === 'down') {
            filtered_data.push(temp_data.at(index));
        }
        if (temp_data.at(index).physical_effort === false && filter_data.at(1).swipe === 'up') {
            filtered_data.push(temp_data.at(index));
        }
    }
    temp_data = filtered_data;

    filtered_data = [];
    for (let index = 0; index < temp_data.length; index++) {
        if (temp_data.at(index).long === true && filter_data.at(2).swipe === 'up') {
            filtered_data.push(temp_data.at(index));
        }
        if (temp_data.at(index).long === false && filter_data.at(2).swipe === 'down') {
            filtered_data.push(temp_data.at(index));
        }
    }
    temp_data = filtered_data;


    for (let index = 0; index < filtered_data.length; index++) {
        const element = filtered_data[index];

        filtered_data_db.push(element);
    }

    console.log("Filters");
    console.log(filter_data);

    console.log("filtered_data_db");
    console.log(filtered_data_db);

    for (let index = 0; index < filtered_data.length; index++) {
        allCards.push(<ActivityCard name={filtered_data.at(index).name} physical_effort={filtered_data.at(index).physical_effort} time={filtered_data.at(index).long} cost={filtered_data.at(index).cost} equipment_required={filtered_data.at(index).equipment_required} going_out={filtered_data.at(index).going_out} />)
    }
    return (
        <>
            <div className='max-h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center p-5'>
                <h1 className='text-pink-600 font-bold text-2xl pt-3 text-center'>Your tailored list of activities</h1>
                <h3 className='text-pink-600 text-lg pb-3 text-center'>Vote on your favorite activites</h3>
                {allCards}
            </div>
        </>
    )
}

export default ActivitiesPage
