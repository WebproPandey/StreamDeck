import React from 'react'
import { Link } from 'react-router-dom';
import Time from '../loader/Time';
import { abbreviateNumber } from 'js-abbreviation-number';

const Video = ({video}) => {
    
  return (
    <div className='flex '>
        <Link to={`/video/${video?.videoID}`}>
           <div className='flex flex-col'>
             <div className='h-48 md:h-42 rounded-xl hover:rounded-none duration-200  overflow-hidden relative bg-transparent'>
                <img className='h-full w-full' src={video?.thumbnails[0]?.url} alt="" />
                {video?.lengthSeconds &&  <Time  time={video?.lengthSeconds}/>}
             </div>
             <div className='flex  p-2  gap-2 items-start'>
             <div className="flex justify-center  h-9 w-9 items-center  rounded-full  overflow-hidden relative pr-[2rem]   ">
               <img className='h-full w-full object-cover  absolute right-0 top-0' src={video?.author?.avatar[0].url} alt="" />
              </div>
              <div className='info'>
                <div>
                 <h3 className='text-sm font-medium text-white line-clamp-2'>{video?.title}</h3>
                </div>
                <div className='flex gap-2 items-center '>
                  <h3 className='text-xs font-medium text-gray-200 line-clamp-1'>{video?.author?.title}</h3>
                  <h3 className='text-xs font-medium text-gray-400'>{video?.author?.badges[0].type === "VERIFIED_CHANNEL" && (<i className='ri-check-line text-black p-[1px] font-semibold bg-gray-100 rounded-full'></i>)}</h3>
                 </div> 
                 <div className='flex gap-1'>
                   <h3 className='text-white line-clamp-1'>{`${abbreviateNumber(
                     video?.stats?.views,2
                   )} Views`} </h3>
                   <div className='flex items-center  justify-center gap-1'>
                     <div className='inline-block leading-none h-1 w-1  text-2xl bg-white rounded-full'></div>
                      <h3 className='text-xs font-medium text-gray-400  line-clamp-1'>{video?.publishedTimeText}</h3>
                   </div>
                 </div>

  
              </div>
              </div>  
  
           </div>
        </Link>
    </div>
  )
}

export default Video