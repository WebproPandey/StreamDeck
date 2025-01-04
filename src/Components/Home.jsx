import React from 'react'
import Navbar from './Navbar'
import AppRoute from '../AppRoute/AppRoute'
import { useAuth } from '../Context/AuthProvider'
import Loader from '../loader/Loader'

const Home = () => {
  const {loading } =  useAuth()
  
  return (
    <div className=" w-full  relative bg-[#222]">
       {loading && <Loader/>}
        <Navbar/>
        <AppRoute/>
    </div>
  )
}

export default Home