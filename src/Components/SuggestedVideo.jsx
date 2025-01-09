import React from 'react'
import { Link } from 'react-router-dom'

const SuggestedVideo = () => { 
    return (
      <div>suggestion</div>
    )
      // <div className='flex flex-col'>
      
      //     <div key={video.id.videoId} className='flex bg-gray-400/30 rounded-xl overflow-hidden w-full'>
      //       <Link to={`/video/${video.id.videoId}`}>
      //         <div className='flex flex-col'>
      //           <div className='h-48 md:h-42 rounded-xl hover:rounded-none duration-200 overflow-hidden relative bg-transparent'>  
      //             <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className='h-full w-full' />
      //             {video.lengthSeconds && <Time time={video.lengthSeconds} />}
      //           </div>
      //           <div className='flex p-2 gap-2 items-start'>
      //             <div className="flex justify-center h-9 w-9 items-center rounded-full overflow-hidden relative pr-[2rem]">
      //               <img src={video.snippet.thumbnails.default.url} alt={video.snippet.channelTitle} className='h-full w-full object-cover absolute right-0 top-0'/> 
      //             </div>
      //             <div className='info'>
      //               <h3 className='text-sm font-medium text-white line-clamp-2'>{video.snippet.title}</h3>
      //               <h3 className='text-xs font-medium text-gray-200 line-clamp-1'>{video.snippet.channelTitle}</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </Link>
      //     </div>
      // </div>
    
  }

export default SuggestedVideo