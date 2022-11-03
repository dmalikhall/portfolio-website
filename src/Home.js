import React from 'react'
import Aboutme from './components/Aboutme'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Aboutme/>
            <Projects/>
        </div>

    )
}

export default Home