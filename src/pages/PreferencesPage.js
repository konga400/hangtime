import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import PreferenceCard from '../components/PreferenceCard'

function PreferencesPage() {
    return (
        <>
            <div className='max-h-screen overflow-x-hidden overflow-y-auto'>
                <PreferenceCard></PreferenceCard>
                <Button to='/activities' text='Next'></Button>
            </div>
        </>
    )
}

export default PreferencesPage
