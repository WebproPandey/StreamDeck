import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchdata } from "../utils/Youtubeapi";

const PlayingVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [subscriberCount, setSubscriberCount] = useState("N/A");
  const [newComment, setNewComment] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [userLike, setUserLike] = useState(false);
  const [userDislike, setUserDislike] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      setLoading(true);
      try {
        const result = await fetchdata(`videos?part=snippet,statistics&id=${id}`);
        if (result.items && result.items.length > 0) {
          setVideoDetails(result.items[0]);
          const channelId = result.items[0].snippet.channelId;
          fetchChannelDetails(channelId);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchChannelDetails = async (channelId) => {
      try {
        const result = await fetchdata(`channels?part=statistics&id=${channelId}`);
        if (result.items && result.items.length > 0) {
          setSubscriberCount(result.items[0].statistics.subscriberCount);
        }
      } catch (error) {
        console.error("Error fetching channel details:", error);
      }
    };

    const fetchVideoComments = async () => {
      try {
        const result = await fetchdata(`commentThreads?part=snippet&videoId=${id}&maxResults=10`);
        setComments(result.items || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchVideoDetails();
    fetchVideoComments();
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setUserComments([...userComments, newComment]);
      setNewComment("");
    }
  };

  const toggleLike = () => {
    setUserLike(!userLike);
    if (userDislike) setUserDislike(false); // Ensure dislike is turned off
  };

  const toggleDislike = () => {
    setUserDislike(!userDislike);
    if (userLike) setUserLike(false); // Ensure like is turned off
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!videoDetails) {
    return <p className="text-center">Video not found.</p>;
  }

  const {
    snippet: { title, description, channelTitle, thumbnails },
    statistics,
  } = videoDetails;

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] w-full">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        {/* Video Section */}
        <div className="flex flex-col lg:w-[calc(100%-350px)] px-4 py-3 lg:py-2">
          <div className="h-[200px] md:h-[500px] rounded-md bg-black">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              playing
            />
          </div>

          {/* Video Details */}
          <div className="mt-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-600 mt-2">Channel: {channelTitle}</p>
            <p className="text-sm text-gray-600">Views: {statistics?.viewCount || 0}</p>
            <p className="mt-2 text-gray-800">{description}</p>

            {/* Like/Dislike Section */}
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={toggleLike}
                className={`px-4 py-2 rounded-md ${userLike ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                👍 Like {userLike ? parseInt(statistics.likeCount || 0) + 1 : statistics.likeCount || 0}
              </button>
              <button
                onClick={toggleDislike}
                className={`px-4 py-2 rounded-md ${userDislike ? "bg-red-500 text-white" : "bg-gray-200"}`}
              >
                👎 Dislike
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            <div className="space-y-4">
              {/* Fetched Comments */}
              {comments.map((comment) => (
                <div key={comment.id} className="border-b pb-2">
                  <p className="font-bold">{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                  <p className="text-gray-600">{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                </div>
              ))}

              {/* User Comments */}
              {userComments.map((comment, index) => (
                <div key={index} className="border-b pb-2">
                  <p className="font-bold">You</p>
                  <p className="text-gray-600">{comment}</p>
                </div>
              ))}

              {/* Add Comment */}
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  className="border rounded-md p-2 flex-1"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  onClick={handleAddComment}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Section */}
        <div className="lg:w-[350px] px-4 py-3">
          <div className="flex items-center gap-4">
            <img
              src={thumbnails?.default.url}
              alt={channelTitle}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{channelTitle}</h2>
              <p className="text-sm text-gray-500">
                Subscribers: {subscriberCount.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
