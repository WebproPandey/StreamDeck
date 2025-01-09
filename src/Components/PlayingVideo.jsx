import React from "react";

const PlayingVideo = () => {


    
   
 

  return ( 
    <div> 
       playingvideo
    </div>
  )
    // <div className="flex justify-center flex-row h-[calc(100%-56px)] w-full overflow-hidden relative">
    //   <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
    //     {/* Video Section */}
    //     <div className="flex flex-col lg:w-[calc(100%-350px)] px-4 py-3 lg:py-2">
    //       <div className="h-[200px] md:h-[500px] rounded-md bg-black">
    //         <ReactPlayer
    //           url={`https://www.youtube.com/watch?v=${id}`}
    //           height="100%"
    //           width="100%"
    //           controls
    //         />
    //       </div>

    //       {/* Video Details */}
    //       <div className="mt-4">
    //         <h1 className="text-xl font-bold text-white">{title}</h1>
    //         <div className="flex items-center gap-4 mt-4">
    //           <img
    //             src={channelLogo}
    //             alt={channelTitle}
    //             className="w-12 h-12 rounded-full"
    //           />
    //           <div>
    //             <h2 className="text-lg font-semibold text-white">{channelTitle}</h2>
    //             <p className="text-sm text-white">
    //               Subscribers: {subscriberCount.toLocaleString()}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="mt-4">
    //           <button
    //             onClick={toggleLike}
    //             className={`px-4 py-2 rounded-md ${userLike ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    //           >
    //             👍 Like {userLike ? parseInt(statistics.likeCount || 0) + 1 : statistics.likeCount || 0}
    //           </button>
    //           <button
    //             onClick={toggleDislike}
    //             className={`px-4 py-2 rounded-md ${userDislike ? "bg-red-500 text-white" : "bg-gray-200"}`}
    //           >
    //             👎 Dislike
    //           </button>
    //         </div>
    //       </div>

    //       <div className="mt-4">
    //         <p className={`text-white ${!showFullDescription ? "line-clamp-2" : ""} overflow-hidden`}>
    //           {description}
    //         </p>
    //         <button
    //           onClick={() => setShowFullDescription(!showFullDescription)}
    //           className="text-blue-500 hover:underline mt-2 focus:outline-none"
    //         >
    //           {showFullDescription ? "Read Less" : "Read More"}
    //         </button>
    //       </div>

    //       <div className="mt-6">
    //         <h2 className="text-xl font-semibold mb-4 text-white">Comments:{statistics.commentCount}</h2>
    //         <div className="space-y-4">
    //           <div className="flex items-center gap-2 mt-4">
    //             <input
    //               type="text"
    //               className="border rounded-md p-2 flex-1"
    //               placeholder="Add a comment..."
    //               value={newComment}
    //               onChange={(e) => setNewComment(e.target.value)}
    //             />
    //             <button
    //               onClick={handleAddComment}
    //               className="bg-blue-500 text-white px-4 py-2 rounded-md"
    //             >
    //               Post
    //             </button>
    //           </div>
    //           {comments.map((comment) => (
    //             <div key={comment.id} className="border-b pb-2">
    //               <p className="font-bold text-white">
    //                 {comment.snippet.topLevelComment.snippet.authorDisplayName}
    //               </p>
    //               <p className="text-white">
    //                 {comment.snippet.topLevelComment.snippet.textDisplay}
    //               </p>
    //             </div>
    //           ))}

    //           {userComments.map((comment, index) => (
    //             <div key={index} className="border-b pb-2">
    //               <p className="font-bold text-white">You</p>
    //               <p className="text-gray-600">{comment}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>

    //     <SuggestedVideo videos={relatedVideos} />
    //   </div>
    // </div>
 
};

export default PlayingVideo;
