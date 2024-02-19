import React from 'react'
import Navbar from './components/landingpage-components/navbar'
import Hero from './components/landingpage-components/hero'
import Features from './components/landingpage-components/features'
import HeartTest from './components/landingpage-components/heartTest'
import Medic from './components/landingpage-components/aimedic'
import Footer from './components/landingpage-components/footer'

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Features/>
    <HeartTest/>

  
    <Medic/>
  
    <Footer/>
    </div>
  )
}

export default LandingPage