import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import request from "../utils/Youtubeapi";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";

const SuggestedVideo = ({ videos }) => {

  const dispatch = useDispatch();

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)
  
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");



  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails,
    },

  } = videos;


  useEffect(() => {
    const get_video_details = async () => {
       const {
          data: { items },
       } = await request('/videos', {
          params: {
             part: 'contentDetails,statistics',
             id: id.videoId,
          },
       })
       setDuration(items[0].contentDetails.duration)
       setViews(items[0].statistics.viewCount)
    }
    get_video_details()
 }, [id])

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
    <div className="flex   gap-3">
      <div className="bg-gray-400/30   rounded-xl overflow-hidden ">
        <Link to="" className="">
          <div className="flex   flex-col w-[300px]">
            <div className="h-48 md:h-42  rounded-xl hover:rounded-none duration-200 overflow-hidden relative bg-transparent">
              <LazyLoadImage
                src={thumbnails.medium.url}
                effect="blur"
                style={{ height: "100%", width: "100%" }}
              />
              <span className="bottom-2 right-0 bg-[#333] text-white px-2 py-1 rounded-md absolute z-[2]">
                {_duration}
              </span>
            </div>
            <div className="flex p-2 gap-2 items-start w-full bg-green-800 ">
              <div className="h-9 w-9  bg-red-900">
                <img src={channelIcon} alt="" />
              </div>
              <div className="info">
                <h3 className="text-sm font-medium text-white line-clamp-2">
                  {title}
                </h3>
                <div className="flex  gap-2 items-center">
                  <span>{numeral(views).format("0.a")} Views •</span>
                  <span className=" text-lg">
                    {moment(publishedAt).fromNow()}
                  </span>
                </div>
                <div className="videoChhanle flex     overflow-hidden relative ">
                  {/* <LazyLoadImage src={channelIcon?.url} className="h-full w-full object-cover  absolute right-0 top-0" /> */}
                  <h1>{channelTitle}</h1>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SuggestedVideo;
