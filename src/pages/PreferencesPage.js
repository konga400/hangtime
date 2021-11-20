import React from 'react'
import Button from '../components/Button'
import PreferenceCard from '../components/PreferenceCard'

function PreferencesPage() {
    return (
        <>
            <div className='h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center bg-gray-500'>
                <PreferenceCard></PreferenceCard>
                <Button to='/activities' text='Next'></Button>
            </div>
        </>
    )
}

export default PreferencesPage
