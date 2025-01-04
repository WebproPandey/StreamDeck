import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentPage from '../Components/ContentPage'
import Search from '../Components/Search'
import PlayingVideo from '../Components/PlayingVideo'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<ContentPage/>}/>  
        <Route path='/search/:searchQuery' element={<Search/>}/>  
        <Route path='/video/:id' element={<PlayingVideo/>}/>  
      </Routes>  
    </>
  )
}

export default AppRoute