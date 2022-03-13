import React from 'react'
// import BookmarkMenu from '../components/BookmarkMenu'
import Nav from '../components/Nav'
import StoryCard from '../components/StoryCard'
import Story from '../tempData/Story'

export default function Bookmarks() {
  return (
    <>
        {/* <Nav /> */}
        <div className='relative mx-5 my-4 md:mx-24 md:my-8'>
          <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider mb-10 md:mx-3'>
            Bookmark
          </h1>

          <div className='px-10 flex flex-wrap justify-start w-full gap-4 mx-auto mt-10 '>
              {Story.map((items, index) => (
                  <StoryCard key={index}
                      image={items.image}
                      title={items.title}
                      date={items.date}
                      desc={items.desc}
                      author={items.userId}
                  />
              ))}
          </div>
        </div>
    </>
  )
}
