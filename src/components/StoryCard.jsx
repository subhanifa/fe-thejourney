import React from 'react'
import { Bookmark } from '../exports/exportImage'
import DOMPurify from 'dompurify';

export default function StoryCard(props) {
  let clean = DOMPurify.sanitize(props.desc);

  return (
    <div className="relative mb-5 w-64 md:w-60 h-full rounded-xl bg-white shadow-xl">
        <div className=''>
            <img src={props.image} alt="product" className="h-36 w-full object-cover rounded-t-xl" />
        </div>
        <div className ="px-4 self-center py-4 h-full">
            <p className ="tracking-wide text-black font-bold line-clamp-1">{props.title}</p>
              <div className='flex justify-start text-xs text-silver gap-1 mb-4'>
                <p>{props.date},</p>
                <p>{props.name}</p>
              </div>
            <p className ="text-sm text-black font-base line-clamp-4" dangerouslySetInnerHTML={{ __html: clean }}></p>
        </div>
    </div>
  )
}
