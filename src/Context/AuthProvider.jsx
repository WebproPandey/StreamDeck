import React, { createContext, useEffect, useState } from 'react'
import { fetchdata } from '../utils/rapidapi'
import { useContext } from 'react'
export  const  AuthContext =  createContext()

const AuthProvider = ({children}) => {
  const [loading , setLoading] =  useState(false)
  const [value , setValue] = useState("New")
  const [data , setData] = useState([])

  useEffect(() =>{
    fetchAlldata(value)
  },[value])

  const fetchAlldata =(query) =>{
    setLoading(true)
    fetchdata(`search/?q=${query}`).then(({contents}) =>{
        setData(contents)
        setLoading(false)
    })
 
  }
  
  return (
    <AuthContext.Provider value={{ loading , data , value, setValue }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export  const  useAuth = () =>useContext(AuthContext) 