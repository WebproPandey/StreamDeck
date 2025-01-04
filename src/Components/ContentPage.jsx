import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import { useAuth } from '../Context/AuthProvider'
import ListItems from './ListItems'


const ContentPage = () => {
  const {data} =   useAuth()  
  return (
    <div className="w-full flex    ">
      <Sidebar/>
      <div className='ContentWraper h-[calc(100vh-10vh)] overflow-y-auto w-[80%] '>
      <ListItems/>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-5  w-full '>
        {
          data.map((item ,index) => {
            if(item.type !==  "video") return  false
            return (
              <Video key={index} video={item?.video} />
            )
          })
        }
      </div>
      </div>

    </div>
  )
}

export default ContentPage