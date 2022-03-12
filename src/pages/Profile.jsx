import React from 'react'
import Nav from '../components/Nav'
// import ProfileMenu from '../components/ProfileMenu'
import StoryCard from '../components/StoryCard'
import { Default, EditIcon } from '../exports/exportImage'
import Story from '../tempData/Story'

export default function Profile() {
  return (
    <div>
        {/* <Nav /> */}
      <div className='relative mx-5 my-4 md:mx-20 md:my-8'>
          <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider mb-10 md:mx-3'>
            Profile
          </h1>

          <div className='flex flex-col justify-center items-center'>
              <div className='mb-3'>
                  <img src={Default} alt="" className='w-40 rounded-full border-beige border-4'/>
                  <button className='absolute top-56'><img src={EditIcon} alt="" className='w-7 bg-transparent rounded-full border-beige border-2'/></button>
              </div>
              <span>Asep Gans</span>
              <span>asepgans@mail.com</span>
          </div>

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
    </div>
  )
}
