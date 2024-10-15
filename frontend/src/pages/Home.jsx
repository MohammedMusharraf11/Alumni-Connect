import React from 'react'
import Header from '../components/Header'
import Features from '../components/Features'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='sm:mx-[10%]'>
      <Navbar/>
        <Header/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home
