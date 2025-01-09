import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../reudux/action/video.action'
const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

const ListItems = () => {
  const [activeElement, setActiveElement] = useState('All')
  const  dispatch  = useDispatch()
  const handelClick = (value) => {
    setActiveElement(value)
    dispatch(getVideosByCategory(value))
    
  }
 
   
      
  return (
    <div className='Listitmes  bg-[#222] w-full flex overflow-x-auto gap-2  py-2 ml-2 sticky z-[9] top-0'>
        {keywords.map((value , index) => (
           <div key={index} 
            onClick={() => handelClick(value)}
            className={`flex-shrink-0 px-4  cursor-pointer border hover:bg-gray-200/20 text-white rounded-full`}>
            {value}
         </div>
        )
        )}
        
    </div>
  )
}

export default ListItems