import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import Button from '../components/Button'
import filter_data from '../filter-data';

const db = [
    {
        name: '',
        url: './images/cost-filter.png',
    },
    {
        name: '',
        url: './images/effort-filter.png',
    },
    {
        name: '',
        url: './images/time-filter.png',
    },
]

function PreferencesPage() {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)

    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const swiped = (direction, index) => {
        filter_data.at(index).swipe = direction;
        console.log(filter_data.at(index).swipe);
        updateCurrentIndex(index - 1);
        if (index === 0) {
            setvisability("visable");
        }
    }

    const [visability, setvisability] = useState("hidden");

    return (
        <>
            <div className='relative flex flex-col items-center justify-center h-screen text-xl font-bold text-pink-600'>
                <i className="fas fa-arrow-up animate-pulse"></i>
                <h1 className='animate-pulse'>Swipe Up</h1>
                <div className='cardContainer'>
                    {db.map((character, index) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, index)}
                            preventSwipe={['right', 'left']}
                            swipeThreshold='1'
                        >
                            <div
                                style={{ backgroundImage: 'url(' + character.url + ')' }}
                                className='card'
                            >
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    ))}
                </div>
                <h1 className='animate-pulse'>Swipe Down</h1>
                <i className="fas fa-arrow-down animate-pulse"></i>
                <div className={`custom-center ${visability}`}>
                    <Button to='/activities' text='Next'></Button>
                </div>
            </div>
        </>
    )
}

export default PreferencesPage
