import React from 'react';
import Sidebar from './Sidebar';
import Video from './Video';
import { useAuth } from '../Context/AuthProvider';
import ListItems from './ListItems';
import Loader from '../loader/Loader';

const ContentPage = () => {
  const { data, loading } = useAuth();
  console.log(data);
  

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="ContentWraper h-[calc(100vh-10vh)] overflow-y-auto w-[80%]">
        <ListItems />
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 w-full">
            {data.length > 0 ? (
              data.map((item, index) => {
                if (item.id.kind !== "youtube#video") return null;
                return <Video key={item.id.videoId} video={item} />;
              })
            ) : (
              <p className="text-center w-full">No videos found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
