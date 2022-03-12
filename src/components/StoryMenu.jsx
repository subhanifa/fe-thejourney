import React from 'react'
import Story from '../tempData/Story'
import { SearchBox } from './SearchBox'
import StoryCard from './StoryCard'


export default function StoryMenu() {
  return (
    <div className='relative mx-5 my-4 md:mx-20 md:my-8'>
        <h1 className='text-3xl mb-10 md:mx-3 md:text-4xl font-bold font-patrick tracking-wider '>
          Journey
        </h1>

        <SearchBox />

        <div className='gap-4 mx-auto mt-10 px-10 flex flex-wrap justify-center md:justify-start w-full  '>
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
  )
}
