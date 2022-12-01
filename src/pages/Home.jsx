import React from 'react'
import Benefits from '../Components/Benefits'
import Catalog from '../Components/Catalog'
import Famous from '../Components/Famous'
import Topsales from '../Components/Topsales'
import Works from '../Components/Works'
import Location from '../Components/Location'

function Home() {
  return (
    <>
        <Benefits />
        <Catalog />
        <Famous />
        <Topsales />
        <Works />
        <Location />
    </>
  )
}

export default Home