import React from 'react'
import Nav from '../components/layout/Nav'
import Banner from '../components/Home/Banner'
import Cards from '../components/Home/Cards'
import Services from '../components/Home/Services.js'

const Home = () => {
    return (
        <>
            <Nav />
            <Banner />
            <Cards />
            <Services />
        </>
    )
}

export default Home
