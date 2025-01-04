import React from 'react'
import Navbar from './Navbar'
import AppRoute from '../AppRoute/AppRoute'

const Home = () => {
  return (
    <div className=" w-full  relative bg-[#222]">
        <Navbar/>
        <AppRoute/>
    </div>
  )
}

export default Home