import React from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';

function TestPage() {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <>
            <TinderCard swipeThreshold='1' onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
        </>
    )
}

export default TestPage
