import React from 'react'

const ListItems = () => {


 
    const youtubeCategories = ["All", "Music", "Gaming", "JavaScript", "Web Development", "Tech Reviews", "Education", "Podcasts",
         "Travel", "Food", "Sports", "Movies", "Comedy", "Fitness", "DIY & Crafts", "Photography", "News", "Fashion & Beauty", 
         "Science & Nature", "Vlogs", "Motivational", "Animation", "Health & Wellness", "Books & Literature", "Art & Design", 
         "Automotive", "History", "Business & Finance", "Programming", "Virtual Reality", "Cryptocurrency", "Stocks & Trading",
         "Cooking Tutorials", "Language Learning", "Documentaries"];

      
  return (
    <div className='Listitmes  bg-[#222] w-full flex overflow-x-auto gap-2  py-2 ml-2 sticky z-[9] top-0'>
        {youtubeCategories.map((categories , index) => {
            return <div key={index}  className='flex-shrink-0 px-4 hover:bg-gray-200/20 text-white rounded-full'>{categories}</div>
        })}
        
    </div>
  )
}

export default ListItems