import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsVideoId } from '../reudux/action/Comments.action'

const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user) // Get logged-in user

  // Load comments from Redux
  useEffect(() => {
    dispatch(getCommentsVideoId(videoId))
  }, [dispatch, videoId])

  const comments = useSelector((state) => state.CommentList.comments)

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  )

  const [text, setText] = useState('')
  const [localComments, setLocalComments] = useState([])

  // Load local comments from localStorage
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${videoId}`)) || []
    setLocalComments(savedComments)
  }, [videoId])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length === 0) return

    dispatch(addComment(videoId, text))

    const newComment = {
      textDisplay: text,
      authorDisplayName: user?.name || 'Anonymous', // Use user's name
      authorProfileImageUrl: user?.photoURL || '', // Use user's profile picture
      publishedAt: new Date().toISOString(),
    }

    const updatedComments = [newComment, ...localComments]
    setLocalComments(updatedComments)
    localStorage.setItem(`comments-${videoId}`, JSON.stringify(updatedComments))

    setText('')
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-white">
        {totalComments} : Comments
      </h2>
      <div className="space-y-4 hidden md:block">
        <div className="flex items-center gap-4 mt-4 w-full ">
          <div className="flex gap-2 rounded-full overflow-hidden">
            <img
              src={user?.photoURL || ''}
              alt=""
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-grow-1 w-full gap-4">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border-b-2 bg-transparent outline-none text-white flex-grow-1 w-full"
                placeholder="Add a comment..."
              />
              <button
                className="bg-gray-500 text-white px-4 py-2 border-none rounded-md"
              >
                Comment
              </button>
            </form>
          </div>
        </div>

        {/* Render local comments */}
        {localComments.map((comment, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex gap-2  rounded-full overflow-hidden">
              <img
                src={comment.authorProfileImageUrl}
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="w-full border-b-2">
              <h1 className="text-white">
                {comment.authorDisplayName}{' '}
                {moment(comment.publishedAt).fromNow()}
              </h1>
              <p className="text-gray-500">{comment.textDisplay}</p>
            </div>
          </div>
        ))}

        {/* Render fetched comments */}
        {_comments?.map((comment, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex gap-2  rounded-full overflow-hidden">
              <img
                src={comment.authorProfileImageUrl}
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="w-full border-b-2">
              <h1 className="text-white">
                {comment.authorDisplayName}{' '}
                {moment(comment.publishedAt).fromNow()}
              </h1>
              <p className="text-gray-500">{comment.textDisplay}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments
