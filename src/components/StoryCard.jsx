import React from 'react'
import { Bookmark } from '../exports/exportImage'

export default function StoryCard(props) {
  return (
    <div className="relative mb-10 w-64 md:w-60 rounded-md bg-white shadow-xl  ">
        <button className='absolute left-56 right-1 top-1 md:left-52'><img src={Bookmark} alt="" className=' ' /></button>
        <div className=''>
            <img src={props.image} alt="product" className="h-36 w-full object-cover" />
        </div>
        <div className ="px-4 self-center py-4 max-h-max">
            <p className ="tracking-wide text-black font-bold">{props.title}</p>
              <div className='flex justify-start text-xs text-silver gap-1 mb-4'>
                <p>{props.date},</p>
                <p>{props.name}</p>
              </div>
            <p className ="text-sm text-black font-base line-clamp-4">{props.desc}</p>
        </div>
    </div>
  )
}
