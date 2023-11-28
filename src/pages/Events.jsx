import React from 'react'
// import eventData from '../lib/events-data'
import EventCard from '../components/events/EventCard'

const Events = () => {
  return (
    <div className=' border-solid border-2 border-black '>
        <h1 className='text-[3em] text-center my-3'>Events</h1>
        <div className='border-solid border-2 border-black w-[80%] m-auto flex justify-evenly '>
            <EventCard/>
        </div>
    </div>
  )
}

export default Events