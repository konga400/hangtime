import React from 'react'
import Button from '../components/Button'
import PreferenceCard from '../components/PreferenceCard'

function PreferencesPage() {
    return (
        <>
            <div className='custom-center overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center'>
                <PreferenceCard></PreferenceCard>
                <Button to='/activities' text='Next'></Button>
            </div>
        </>
    )
}

export default PreferencesPage
