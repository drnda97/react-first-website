import React from 'react'
import Banner from '../components/Home/Banner'
import Cards from '../components/Home/Cards'
import Services from '../components/Home/Services.js'
import Contact from "../components/Home/Contact";

const Home = () => {
    return (
        <>
            <Banner />
            <Cards />
            <Services />
            <Contact />
        </>
    )
}

export default Home
