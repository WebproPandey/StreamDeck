import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPopularVideos, getVideosBySearch } from '../reudux/action/video.action';
import SuggestedVideo  from './SuggestedVideo'
import Sidebar from './Sidebar';
import SkeletonVideo from './Skeleton/SkeletonVideo';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../loader/Loader';

const Search = () => {
 const {query}  = useParams()
 console.log(query);
 const dispatch  =useDispatch()
 useEffect(()=>{
  dispatch(getVideosBySearch(query))
 },[dispatch , query])

 

 const { videos, loading} = useSelector(state => state.SerachVideo)
 console.log(videos);


  return (
    <div className='flex bg-gray-400/30'>
    
     <div className='w-full overflow-y-scroll h-screen pt-[10vh] grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-2 '>
       {!loading ? (
         videos?.map(video => (
           <SuggestedVideo key={video.id.videoId} videos={video}  search/>
         ))
       ) : (
        videos.map((_, index) => (
          <SkeletonVideo/>
         ))
      )}
    </div>
    </div>

  )
}

export default Search