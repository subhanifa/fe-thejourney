import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../config/api'
import { Bookmark } from '../exports/exportImage'
import StoryCard from '../components/StoryCard'
import dateformat from 'dateformat'
import Snackbar from "@mui/material/Snackbar"

export default function Bookmarks() {
  // const path = "http://localhost:5000/uploads/"
  const [ bookmarks, setBookmarks ] = useState([])
  const [ open, setOpen ] = useState(false)

  const handleClick = async() => {
    setOpen(!open)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <button onClick={handleClose}>Close</button>
    </React.Fragment>
  );  

  const getUserBookmarks = async() => {
    try {
        const response = await API.get('/user-bookmarks')
        console.log(response);
        setBookmarks(response.data.user.data)
    } catch (error) {
      console.log(error)
    }
  }  

  const deleteBookmark = async (id) => {
    try {
      const response = await API.delete("/bookmark/" + id);
      // console.log(response);
      getUserBookmarks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBookmarks()
  }, [])

  return (
    <>
        <div className='relative mx-5 my-4 md:mx-24 md:my-8'>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Deleted bookmark."
          action={action}
        />
          <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider mb-10 md:mx-3'>
            Bookmark
          </h1>

          <div className='px-10 flex flex-wrap justify-start w-full gap-4 mx-auto mt-10 '>
              {bookmarks.map((items, index) => (
                <div key={index} className='relative'>
                  <div type='button' onClick={() => deleteBookmark(items.id)}>
                    <img onClick={handleClick} src={Bookmark} alt="" className='absolute z-30 right-1 top-1'/>
                  </div>
                  <Link to={`/story/${items.storyId}`}>
                    <StoryCard
                    image={items.story.image}
                    title={items.story.title}
                    desc={items.story.desc}
                    date={dateformat(items.story.createdAt, "mediumDate")}
                    name={items.story.user.fullname}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
    </>
  )
}
