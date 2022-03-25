import React, { useEffect, useState } from 'react'
import StoryCard from '../components/StoryCard'
import { API } from '../config/api'
import { Bookmark, Confirm, EditIcon } from '../exports/exportImage'
import dateformat from 'dateformat'
import { Link } from 'react-router-dom'


export default function Profile() {
  const [ user, setUser ] = useState([])
  const [ stories, setStories ] = useState([])

  const getUser = async() => {
    try {
        const response = await API.get('/profile')
        setUser(response.data.data)
        // console.log(response)
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

  const [ preview, setPreview ] = useState(null)
  const [ form, setForm ] = useState({
    image: ""
  })

  const handleImageChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
       e.target.type === "file" ? e.target.files : e.target.value
    })
    // Create Image URL for Preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }

  const handleImageSubmit = async(e) => {
    try {
      e.preventDefault()  
      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data"
        }
      }

      const formData = new FormData()
      formData.set("image", form.image[0], form.image[0].name)

      const response = await API.patch('/user/edit/image', formData, config)

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
      <div className='relative mx-5 my-4 md:mx-20 md:my-8'>
          <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider mb-10 md:mx-3'>
            Profile
          </h1>

          <div className='flex flex-col justify-center items-center'>
              <div className='mb-3'>
                <img src={ preview ? preview : user.image } alt="" className='w-40 h-40 object-cover rounded-full border-beige border-4'/>
              </div>
              
              {/* Code Here */}
              <form onSubmit={handleImageSubmit} className="flex justify-between w-40" >
                <label htmlFor="image" className='cursor-pointer'>
                <input 
                  type="file" 
                  id="image"
                  name='image'
                  className='sr-only'
                  onChange={handleImageChange}
                />
                <img src={EditIcon} alt="Edit-Icon" className='w-7'/>
                </label>
                <button type='submit'>
                  <img src={Confirm} alt="Confirm-Icon" className='w-7' />
                </button>
              </form>

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
