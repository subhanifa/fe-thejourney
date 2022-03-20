import React, { useEffect, useState } from 'react'
import StoryCard from '../components/StoryCard'
import { API } from '../config/api'
import { Bookmark, Default, EditIcon } from '../exports/exportImage'
import dateformat from 'dateformat'
import { Link } from 'react-router-dom'


export default function Profile() {
  const [ user, setUser ] = useState([])
  const [ stories, setStories ] = useState([])

  const getUser = async() => {
    try {
        const response = await API.get('/profile')
        setUser(response.data.data)
    } catch (error) {
        console.log(error)
    }
  }  
  useEffect(() => {
    getUser();
    return() => {
        setUser([]);
    }
  }, [])

  const getUserStories = async() => {
    try {
        const response = await API.get('/user-stories')
        // console.log(response);
        setStories(response.data.user.data)
    } catch (error) {
      console.log(error)
    }
  }  
  useEffect(() => {
    getUserStories()
  }, [])

  return (
    <>
      <div className='relative mx-5 my-4 md:mx-20 md:my-8'>
          <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider mb-10 md:mx-3'>
            Profile
          </h1>

          <div className='flex flex-col justify-center items-center'>
              <div className='mb-3'>
                  <img src={Default} alt="" className='w-40 rounded-full border-beige border-4'/>
                  <button className='absolute top-56'><img src={EditIcon} alt="" className='w-7 bg-transparent rounded-full border-beige border-2'/></button>
              </div>
              <span>{user.fullname}</span>
              <span>{user.email}</span>
          </div>

          <div className='px-10 flex flex-wrap justify-start w-full gap-4 mx-auto mt-10 '>
              {stories.map((items, index) => (
                <div key={index} className='relative'>
                  <div>
                    <img src={Bookmark} alt="" className='absolute z-30 right-1 top-1'/>
                  </div>
                  <Link to={`/story/${items.id}`}>
                    <StoryCard
                    image={items.image}
                    title={items.title}
                    desc={items.desc}
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
