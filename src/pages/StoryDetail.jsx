import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { API } from '../config/api';
import { KomodoOne } from '../exports/exportImage'
import dateformat from 'dateformat'

export default function StoryDetail() {
    let { id } = useParams();
    const [ data, setData ] = useState({})
    const [ user, setUser ] = useState([])    

    const getStory = async(id) => {
        try {
            const response = await API.get('/story/' + id)
            console.log(response)
            setData(response.data.story)
            setUser(response.data.story.user)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStory(id);
        return() => {
            setData({})
            setUser([])
        }
    }, [])

    return (
        <>      
            <div className='relative mx-5 my-4 md:mx-24 md:my-8'>
                <div className='flex justify-between items-center  '>
                    <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider'>
                        {data.title}
                    </h1>
                    <p className=''>
                        {user.fullname}
                    </p>
                </div>
                <span className='text-mid-blue'>{dateformat(data.createdAt, "mediumDate")}</span>

                <div className='mx-auto flex flex-col'>
                    <img src={data.image} alt="" className='w-full object-cover py-7' />
                </div>
                <div className='space-y-5 text-silver'>
                    <p className=''>
                        tes
                    </p>
                    <p className='text-black text-3xl font-bold font-patrick tracking-wider'>
                        {data.title}
                    </p>
                    <p>
                        {data.desc}
                    </p>
                </div>
            </div>
        </>
    )
}
