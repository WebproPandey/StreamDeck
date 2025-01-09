import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../utils/Youtubeapi";
import moment from "moment";
import numeral from "numeral";

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
    statistics: { viewCount },
    contentDetails: { duration },
  } = video;

  const formattedDuration = moment
  .utc(moment.duration(duration).asMilliseconds())
  .format("mm:ss")

const [channelicon  , setChannelIcon] = useState(null)

  useEffect(() =>{
    const  get_channel_icon = async ()=>{
      const {
        data: { items },
        } = await request('/channels',{
          params:{
             part:'snippet',
             id:channelId
          }
        })
        setChannelIcon(items[0].snippet.thumbnails.default)
      }
      get_channel_icon()
  },[channelId])



  return (
    <div className="flex bg-gray-400/30 rounded-xl overflow-hidden w-full">
      <Link to={`/video/${video.id}`}>
        <div className="flex flex-col gap-2">
          <div className="h-48 md:h-42 rounded-xl hover:rounded-none duration-200 overflow-hidden relative bg-transparent">
            <img src={medium.url} className="h-full w-full object-cover"/>
              <span className="bottom-2 right-2 bg-[#333] text-white px-2 py-1 rounded-md absolute z-[2]">
                {formattedDuration}
              </span>
          </div>
          <div className="videoDetails flex gap-4  text-white">
            <div className="videoChhanle flex justify-center  h-9 w-9 items-center  rounded-full  overflow-hidden relative pr-[2rem]">
                 <img src={channelicon?.url} className="h-full w-full object-cover  absolute right-0 top-0" alt="" />
            </div>
           
          <div className="">
            <div className="">
              <h4 className="line-clamp-1">{title}</h4>
              <span className=" text-sm">{channelTitle}</span>
            </div>
            <div className="flex  gap-2 items-center">
              <span>{numeral(viewCount).format("0.a").toUpperCase()} views ●</span>
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
