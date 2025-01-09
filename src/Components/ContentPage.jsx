import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Video from './Video';
import ListItems from './ListItems';
import Loader from '../loader/Loader';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from '../reudux/action/video.action';

const ContentPage = () => {
  const dispatch = useDispatch();
  const { loading, videos, error } = useSelector((state) => state.HomeVideo);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <div className="w-full flex relative">
        <Sidebar />
        <div className="ContentWraper h-[calc(100vh-10vh)] overflow-y-auto w-[80%]">
          <ListItems />
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="error">Error: {error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-5 w-full">
              {videos.map((video) => (
                <Video key={video.id} video={video} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentPage;
