import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className=" w-full  relative bg-[#222]">
        <Navbar/>
        <Sidebar/>
    </div>
  )
}

export default Home