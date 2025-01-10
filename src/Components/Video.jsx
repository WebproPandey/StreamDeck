import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../utils/Youtubeapi";
import moment from "moment";
import numeral from "numeral";
import {  LazyLoadImage } from 'react-lazy-load-image-component';


const Video = ({ video }) => {

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  
  } = video;

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')

  const _videoId = id?.videoId || id

  useEffect(() => {
    const get_video_details = async () => {
       const {
          data: { items },
       } = await request('/videos', {
          params: {
             part: 'contentDetails,statistics',
             id: _videoId,
          },
       })
       setDuration(items[0].contentDetails.duration)
       setViews(items[0].statistics.viewCount)
    }
    get_video_details()
 }, [_videoId])

 useEffect(() => {
  const get_channel_icon = async () => {
     const {
        data: { items },
     } = await request('/channels', {
        params: {
           part: 'snippet',
           id: channelId,
        },
     })
     setChannelIcon(items[0].snippet.thumbnails.default)
  }
  get_channel_icon()
}, [channelId])


  return (
    <div className="flex bg-gray-400/30 rounded-xl overflow-hidden w-full">
      <Link to={`/video/${video.id}`}>
        <div className="flex flex-col gap-2">
          <div className="h-48 md:h-42 rounded-xl hover:rounded-none duration-200 overflow-hidden flex justify-center  items-center relative bg-transparent">
            <LazyLoadImage src={medium.url} effect="blur" style={{height:"100%" , width:"100%" }}  />
              <span className="bottom-2 right-2 bg-[#333] text-white px-2 py-1 rounded-md absolute z-[2]">
                {_duration}
              </span>
          </div>
          <div className="videoDetails flex gap-4  text-white">
            <div className="videoChhanle flex justify-center  h-9 w-9 items-center  rounded-full  overflow-hidden relative pr-[2rem]">
               <LazyLoadImage src={channelIcon?.url} className="h-full w-full object-cover  absolute right-0 top-0" />
            </div>
           
          <div className="">
            <div className="">
              <h4 className="line-clamp-1">{title}</h4>
              <span className=" text-sm">{channelTitle}</span>
            </div>
            <div className="flex  gap-2 items-center">
              <span>{numeral(views).format('0.a')} Views •</span>
              <span className=" text-lg">{moment(publishedAt).fromNow()}</span>
            </div>
           </div>
          </div>
       
        </div>
      </Link>
    </div>
  );
};

export default Video;
