import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidebar from "./Sidebar";
import ListItems from "./ListItems";
import Video from "./Video";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../reudux/action/video.action";
import Loader from "../loader/Loader";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonVideo from "./Skeleton/SkeletonVideo";
const ContentPage = () => {
  const dispatch = useDispatch();
  const { videos, loading, nextPageToken } = useSelector(
    (state) => state.HomeVideo
  );

  console.log("Loading:", loading, "Videos Length:", videos.length);


  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchMoreVideos = () => {
    if (nextPageToken) {
      dispatch(getPopularVideos());
    }
  };
  return (
    <>
      <Navbar />
      <div className="w-full flex relative">
        <Sidebar />
        <div id="ContentWraper" className="ContentWraper h-[calc(100vh-10vh)] overflow-auto w-[80%]">
          <ListItems/>
          <InfiniteScroll
            dataLength={videos.length} 
            next={fetchMoreVideos} 
            hasMore={!!nextPageToken} 
            loader={<Loader />}
             scrollableTarget="ContentWraper"
            >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-5 w-full">
             
            {loading && videos.length === 0
                ? [...Array(20)].map((_, index) => (
                   <SkeletonVideo/>
                  ))
                : videos.map((video, index) => (
                    <Video key={index} video={video} />
                  ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
