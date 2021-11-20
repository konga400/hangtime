import React from 'react';
import ActivityCard from '../components/ActivityCard';
import filter_data from '../filter-data';
import activity_data from '../activity-data';


function ActivitiesPage() {

    let filtered_data = [];
    let allCards = [];
    for (let index = 0; index < activity_data.length; index++) {
        if (activity_data.at(index).cost === true && filter_data.at(0).swipe === 'up') {
            filtered_data.push(activity_data.at(index));
        }
        if (activity_data.at(index).physical_effort === true && filter_data.at(1).swipe === 'down') {
            filtered_data.push(activity_data.at(index));
        }

        // If they are false
        if (activity_data.at(index).cost === false && filter_data.at(0).swipe === 'down') {
            filtered_data.push(activity_data.at(index));
        }
        if (activity_data.at(index).physical_effort === false && filter_data.at(1).swipe === 'up') {
            filtered_data.push(activity_data.at(index));
        }
    }

    for (let index = 0; index < filtered_data.length; index++) {
        allCards.push(<ActivityCard name={filtered_data.at(index).name} />)
    }
    return (
        <>
            <div className='max-h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center p-5'>
                {allCards}

            </div>
        </>
    )
}

export default ActivitiesPage
