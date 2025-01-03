import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar w-[20%]   px-4 py-4 h-[calc(100vh-10vh)] overflow-y-scroll relative">
      <div className='Main flex flex-col  gap-1 pb-3 '>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-200/10 bg-slate-200/20 delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-home-4-line text-2xl"></i>
          <span className='text-md font-medium'>Home</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-slideshow-3-line text-2xl"></i>
          <span className='text-md font-medium'>Shorts</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-tv-2-line text-2xl"></i>
          <span className='text-md font-medium'>Subscription</span>
        </div>
      </div>
      <div className='You flex flex-col  gap-1 border-t  py-2'>
        <div className="flex justify-start gap-2 items-center w-full text-white hover:bg-slate-200/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
          <span className='text-md font-medium'>You</span>
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-eye-line text-2xl"></i>
          <span className='text-md font-medium'>History</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-play-list-2-line text-2xl"></i>
          <span className='text-md font-medium'>Playlist</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-movie-line text-2xl"></i>
          <span className='text-md font-medium'>Your Video</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-time-line  text-2xl"></i>
          <span className='text-md font-medium'>Watch later</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-thumb-up-line text-2xl"></i>
          <span className='text-md font-medium'>Like video</span>
        </div>

      </div>
      <div className='Explore flex flex-col  gap-1 border-t  py-2'>
        <div className="flex justify-start gap-2 items-center w-full text-white  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
          <span className='text-md font-medium'>Explore</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-fire-line text-2xl"></i>
          <span className='text-md font-medium'>Trending</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-music-line text-2xl"></i>
          <span className='text-md font-medium'>Music</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-movie-line  text-2xl"></i>
          <span className='text-md font-medium'>Films</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-graduation-cap-line text-2xl"></i>
          <span className='text-md font-medium'>Course</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-live-line text-2xl"></i>
          <span className='text-md font-medium'>Live</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-gamepad-line text-2xl"></i>
          <span className='text-md font-medium'>Gaming</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-file-list-3-line text-2xl"></i>
          <span className='text-md font-medium'>News</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-trophy-line text-2xl"></i>
          <span className='text-md font-medium'>Sport</span>
        </div>

      </div>
      <div className='Setting flex flex-col  gap-1 border-t  py-2'>
        
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-settings-4-line text-2xl"></i>
          <span className='text-md font-medium'>Setting</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-flag-line text-2xl"></i>
          <span className='text-md font-medium'>Report history</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-questionnaire-line text-2xl"></i>
          <span className='text-md font-medium'>Help</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
         <i className="ri-feedback-line text-2xl"></i>
          <span className='text-md font-medium'>Send Feedback</span>
        </div>

      </div>
    </div>
  )
}

export default Sidebar