import React from 'react'
import Hero from '../Components/Hero/Hero'
import Regular from '../Components/Regular/Regular'
import Weekend from '../Components/Weekend/Weekend'
import Wkhd from '../Components/WeekendHead/Wkhd'
import Today from '../Components/Todaysoffer/Today'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Today/>
        <Regular/>
        <Wkhd/>
        <Weekend/>
    </div>
  )
}

export default Home