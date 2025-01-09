import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentPage from '../Components/ContentPage'
import Search from '../Components/Search'
import PlayingVideo from '../Components/PlayingVideo'
import Login from '../Components/Login'
import ProtectedRoute from './ProtectedRoute'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/'  element={<Login/>}/>  
        <Route path='/home' 
         element={
          <ProtectedRoute>
            <ContentPage/>
          </ProtectedRoute>
         }/>  
        <Route path='/search/:searchQuery' element={<Search/>}/>  
        <Route path='/video/:id' element={<PlayingVideo/>}/>  
      </Routes>  
    </>
  )
}

export default AppRoute