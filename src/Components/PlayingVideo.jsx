import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import SuggestedVideo from "./SuggestedVideo";
import numeral from "numeral";
import moment from "moment";
import  ShowMoreText from 'react-show-more-text'
import { useParams } from "react-router-dom";
import { getRelatedVideos, getVideoById } from "../reudux/action/video.action";
import { getChannelDetails } from "../reudux/action/channel.action";
import { getCommentsVideoId } from "../reudux/action/Comments.action";
import { comment } from "postcss";
import Comments from "./Comments";

const PlayingVideo = () => {
const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() =>{
    dispatch(getVideoById(id))
    dispatch(getRelatedVideos(id))

} ,[dispatch , id])


const {videos , loading:relaredVideoLoading} =  useSelector(state => state.relatedVideos)





const {video , loading} =  useSelector((state) => state.SelectedVideo)
const {snippet = {},statistics = {},} = video || {}; 
const {channelId,title , channelTitle,publishedAt,description,} = snippet;
const {viewCount = 0,likeCount = 0,dislikeCount = 0,commentCount = 0,} = statistics;

useEffect(() => {
  if (channelId) {
    dispatch(getChannelDetails(channelId))
  }
}, [dispatch, channelId]);



const { channel } = useSelector((state) => state.ChannelDetails);
const channelLogo = channel?.snippet?.thumbnails?.default?.url || "";
const subscriberCount = channel?.statistics?.subscriberCount || "";






  return ( 
   
    <div className="flex justify-center flex-row h-[calc(100%-56px)] w-full overflow-hidden relative">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] px-4 py-3 lg:py-2">
          <div className="h-[200px] md:h-[500px] rounded-md bg-black">
            <ReactPlayer
              url={`https://www.youtube.com/embed/${id}`}
              height="100%"
              width="100%"
              controls

            />
          </div>
         {!loading ?  (
          <div>
           <div className="mt-4 w-full  ">
           <h1 className="text-xl font-bold text-white">{title}</h1>
           <div className="flex w-full justify-between items-center ">
             <div className="flex text-white ">
               {numeral(viewCount).format('0.a')} views ●
               {moment(publishedAt).fromNow()} 
             </div>
           <div className=" flex   gap-2">
             <button className=" rounded-md  text-white">
               👍
                {numeral(likeCount).format('0.a')} 
             </button>
             <button
               className="  rounded-md  text-white">
                 👎
                 {numeral(dislikeCount).format('0.a')} 
             </button>
           </div>
           </div>
           <div className="flex items-center justify-between gap-4 mt-4 border-y-2 py-2">
             <div className="flex gap-2 ">
               <div className="bg-red-500 rounded-full  overflow-hidden">
                   <img src={channelLogo} alt=""  className="w-12 h-12 rounded-full"/>
               </div>
             <div>
               <h2 className="text-lg font-semibold text-white">{channelTitle}</h2>
               <span className="text-sm text-white flex ">
                 {numeral(subscriberCount).format('0.a')} 
                 <h1 className="pl-2">Subscribers</h1>
               </span>
             </div>
             </div>

             <button
               className={`px-4 py-2 rounded-md  bg-red-700 text-white `}>
                Subscribe
             </button>
           </div>
          
           </div>

           <div className="mt-4">
           <p className="text-white  overflow-hidden cursor-pointer" >
              <ShowMoreText 
               lines={2}
               more="Show MORE"
               less="Show LESS"
               oncharClass="ShowMoreText"
               expanded={false}
               className="block"
              >
                {description}
              </ShowMoreText>

           </p>
         
           </div>

            <Comments  videoId={id}  totalComments={video?.statistics?.commentCount}/>
         </div>

         ) 
         : (
              <h1>Loading ...</h1>
         )}
          
        </div>
        {!loading && videos
            ?.filter(video => video.snippet)
           .map((video) => <SuggestedVideo key={video.id.videoId} videos={video}  />  )}
        
      </div>

   </div>   

  )

 
};

export default PlayingVideo;
