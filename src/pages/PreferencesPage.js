import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import Button from '../components/Button'
// import PreferenceCard from '../components/PreferenceCard'

const db = [
    {
        name: '',
        url: './images/cost-filter.png'
    },
    {
        name: '',
        url: './images/effort-filter.png'
    },
    {
        name: '',
        url: './images/cost-filter.png'
    },
]

function PreferencesPage() {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    // const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
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

    // const canGoBack = currentIndex < db.length - 1

    // const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        // setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    // const swipe = async (dir) => {
    //     if (canSwipe && currentIndex < db.length) {
    //         await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    //     }
    // }

    // increase current index and show card
    // const goBack = async () => {
    //     if (!canGoBack) return
    //     const newIndex = currentIndex + 1
    //     updateCurrentIndex(newIndex)
    //     await childRefs[newIndex].current.restoreCard()
    // }
    return (
        <>
            <div className='custom-center overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center'>
                <div className='cardContainer'>
                    {db.map((character, index) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name, index)}
                            onCardLeftScreen={() => outOfFrame(character.name, index)}
                            preventSwipe={['right', 'left']}
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
                <Button to='/activities' text='Next'></Button>
            </div>
        </>
    )
}

export default PreferencesPage
