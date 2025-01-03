import React from 'react'
import Home from './Components/Home'
import { useAuth } from './Context/AuthProvider'

const App = () => {
  const  {loading , data} =  useAuth()
  console.log(loading);
  console.log(data);
  
  return (
    <div>
       <Home/>
    </div>
  )
}

export default App