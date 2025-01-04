import moment from 'moment'
import React from 'react'

const Time = ({time}) => {
    const videotime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")
   
  return (
    <div>
        <span className='bottom-2 right-2 bg-[#333] text-white px-2 py-1 rounded-md absolute z-[2]'>{videotime}</span>
    </div>
  )
}

export default Time