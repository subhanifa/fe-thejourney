import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../config/api'
import { Bookmark } from '../exports/exportImage'
import StoryCard from '../components/StoryCard'
import dateformat from 'dateformat'


export default function Bookmarks() {

  const [ bookmarks, setBookmarks ] = useState([])
  const getUserBookmarks = async() => {
    try {
        const response = await API.get('/user-bookmarks')
        console.log(response);
        setBookmarks(response.data.user.data)
    } catch (error) {
      console.log(error)
    }
  }  
  useEffect(() => {
    getUserBookmarks()
  }, [])

  return (
    <>
        <div className='relative mx-5 my-4 md:mx-24 md:my-8'>
          <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider mb-10 md:mx-3'>
            Bookmark
          </h1>

          <div className='px-10 flex flex-wrap justify-start w-full gap-4 mx-auto mt-10 '>
              {bookmarks.map((items, index) => (
                <div key={index} className='relative'>
                  <div>
                    <img src={Bookmark} alt="" className='absolute z-30 right-1 top-1'/>
                  </div>
                  <Link to={`/story/${items.id}`}>
                    <StoryCard
                    image={items.story.image}
                    title={items.story.title}
                    desc={items.story.desc}
                    date={dateformat(items.createdAt, "mediumDate")}
                    name={items.user.fullname}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
    </>
  )
}
