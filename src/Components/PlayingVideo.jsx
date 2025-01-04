import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";

const PlayingVideo = () => {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchVideoDetails();
    }
  }, [id]);

  const fetchVideoDetails = async () => {
    try {
      const res = await fetchdata(`/video/details/?id=${id}`);
      console.log(res); // Debug response
      setVideo(res.video); // Update state
    } catch (error) {
      console.error("Error fetching video details:", error.message);
    }
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] w-full">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] px-4 py-3 lg:py-2">
          <div className="h-[200px] md:h-[600px] rounded-md bg-black">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              playing
            />
          </div>
          {!video && <p className="text-white">Loading video details...</p>}
          {video && (
            <div className="mt-4">
              <h3 className="text-white font-bold text-lg">{video.title}</h3>
              <div className="flex items-center mt-2">
                <img
                  src={video.author.avatar[0].url}
                  alt="Author"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-white font-medium">{video.author.title}</p>
                  {video.author.badges[0].type === "VERIFIED_CHANNEL" && (
                    <span className="text-xs text-gray-400">Verified</span>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mt-2">
                {abbreviateNumber(video.stats.views, 2)} views •{" "}
                {video.publishedTimeText}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
