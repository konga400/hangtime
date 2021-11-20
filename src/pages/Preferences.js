import React from 'react'
import { Link } from 'react-router-dom'
import PreferenceCard from '../components/PreferenceCard'

function Preferences() {
    return (
        <>
            <div className='max-h-screen overflow-x-hidden overflow-y-auto'>
                <h1 className='text-2xl'>Is this working</h1>
                <PreferenceCard></PreferenceCard>
                <PreferenceCard></PreferenceCard>

                <PreferenceCard></PreferenceCard>

                <PreferenceCard></PreferenceCard>

                <PreferenceCard></PreferenceCard>

                <Link to='/activities'>Click me</Link>
            </div>
        </>
    )
}

export default Preferences
