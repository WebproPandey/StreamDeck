import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../utils/Youtubeapi";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../loader/Loader";

const SuggestedVideo = ({ search }) => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async (token = null) => {
    try {
      setLoading(true);
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: search || "trending",
          type: "video",
          pageToken: token,
        },
      });
      setVideos((prevVideos) => [...prevVideos, ...data.items]);
      setNextPageToken(data.nextPageToken);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(); 
  }, [search]);

  const fetchMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  return (
    <div className="w-full p-4">
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchMoreVideos}
        hasMore={!!nextPageToken}
        loader={<Loader />}
        className="flex flex-wrap gap-4"
      >
        {videos.map((video, index) => {
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
          } = video;

          return (
            <Link
              key={index}
              to={`/video/${id.videoId || id}`}
              className="flex w-[300px] h-42 bg-gray-400/30 rounded-xl"
            >
              <div className="flex flex-col">
                <div className="h-48 md:h-42 w-full rounded-xl hover:rounded-none duration-200 overflow-hidden relative bg-transparent">
                  <LazyLoadImage
                    src={thumbnails.medium.url}
                    effect="blur"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="flex p-2 gap-2 items-start w-full">
                  <div className="videoChannel flex justify-center h-9 w-9 px-4 items-center rounded-full overflow-hidden relative">
                    <LazyLoadImage
                      src={thumbnails.default.url}
                      alt="Channel Icon"
                      className="h-full w-full object-cover absolute top-0  right-0"
                    />
                  </div>
                  <div className="info">
                    <h3 className="text-sm font-medium text-white line-clamp-2">
                      {title}
                    </h3>
                    <div className="flex gap-2 items-center text-white leading-tight">
                      <span>{moment(publishedAt).fromNow()}</span>
                    </div>
                    <div className="videoChannel text-white">
                      <h1>{channelTitle}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default SuggestedVideo;
