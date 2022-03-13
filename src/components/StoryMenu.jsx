import React, { useEffect, useState } from 'react'
import { SearchBox } from './SearchBox'
import StoryCard from './StoryCard'
import { API } from '../config/api'
import { Link } from 'react-router-dom'
import dateformat from 'dateformat'
import { Bookmark } from '../exports/exportImage'


export default function StoryMenu() {

  const [ stories, setStories ] = useState([])
  const [ user, setUser ] = useState([])    

  const getStories = async() => {
    try {
      const response = await API.get("/stories") 
      setStories(response.data.stories.data)
      setUser(response.data.stories.data.user)
      console.log(response)
    } catch (error) {
      console.log(error)
    }  
  }
  
  useEffect(() => {
    getStories([]);
  }, []);


  return (
    <div className='relative mx-5 my-4 md:mx-20 md:my-8'>
        <h1 className='text-3xl mb-10 md:mx-3 md:text-4xl font-bold font-patrick tracking-wider '>
          Journey
        </h1>

        <SearchBox />

        <div className='gap-4 mx-auto mt-10 px-10 flex flex-wrap justify-center md:justify-start w-full  '>
            {stories.map((items, index) => (
              <div key={index} className='relative'>
                <div>
                  <img src={Bookmark} alt="" className='absolute z-30 right-1 top-1'/>
                </div>
                <Link  to={`/story/${items.id}`}>
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
  )
}