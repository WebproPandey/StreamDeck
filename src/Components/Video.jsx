import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { abbreviateNumber } from "js-abbreviation-number";

const Video = ({ video }) => {
  const {
    snippet: { title, thumbnails, description, channelTitle } ,  statistics,
  } = video;

  return (
    <div className='flex '>
    <Link to={`/video/${video.id.videoId}`}>
    <div className='flex flex-col'>
      <div className='h-48 md:h-42 rounded-xl hover:rounded-none duration-200  overflow-hidden relative bg-transparent'>  
      <img src={thumbnails.high.url}  alt={title} 
       className='h-full w-full' />
       {video?.lengthSeconds &&  <Time  time={video?.lengthSeconds}/>}
     </div>
     
     <div className='flex  p-2  gap-2 items-start'>
     <div className="flex justify-center  h-9 w-9 items-center  rounded-full  overflow-hidden relative pr-[2rem]   ">
       <img src={thumbnails?.default.url}  alt={channelTitle} className='h-full w-full object-cover  absolute right-0 top-0'/> 
     </div>
     <div className='info'>
     <div>
        <h3 className='text-sm font-medium text-white line-clamp-2'>{title}</h3>
      </div>
      <div className='flex gap-2 items-center '>
        <h3 className='text-xs font-medium text-gray-200 line-clamp-1'>{channelTitle}</h3>
      </div> 
      <div className='flex gap-1'>
      <h3 className="text-white line-clamp-1">
    {`${abbreviateNumber(statistics?.viewCount || 0)} Views`}
  </h3>
      </div>

      </div>
    </div>
     </div>
    </Link>
    </div>
  );
};

export default Video;
