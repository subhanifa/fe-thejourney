import React, { useContext, useEffect, useState } from 'react'
import StoryCard from './StoryCard'
import { API } from '../config/api'
import { Link } from 'react-router-dom'
import dateformat from 'dateformat'
import { Bookmark } from '../exports/exportImage'
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar"
// import { LoginContext } from '../contexts/AuthContext'
// import { ModalContext } from '../contexts/ModalContext'

export default function StoryMenu() {

  // const [login, setLogin] = useContext(LoginContext);
  // const [open, setOpen] = useContext(ModalContext);

  const [ stories, setStories ] = useState([])
  const [ user, setUser ] = useState([])
  const [ box, setBox ] = useState(false)
  const [ search, setSearch ] = useState("");

  const handleClick = async() => {
    setBox(!box)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setBox(false);
  };

  const action = (
    <React.Fragment>
      <button onClick={handleClose}>Close</button>
    </React.Fragment>
  );

  const getStories = async() => {
    try {
      const response = await API.get("/stories") 
      setStories(response.data.stories.data)
      setUser(response.data.stories.data.user)
    } catch (error) {
      console.log(error)
    }  
  }
  
  const addBookmark = async(id) => {
    try {
      // if (login) {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        let storyId = {storyId: id};
        const body = JSON.stringify(storyId);
        const response = await API.post("/bookmark", body, config);
      // }
      // else {
      //   setOpen(true)
      // }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getStories([]);
    return() => {
      setStories([]);
      setUser([])
    }
  }, []);

  return (
    <div className='relative mx-5 my-4 md:mx-20 md:my-8'>
        <Snackbar
          open={box}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Saved to bookmark."
          action={action}
        />
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl md:mx-3 md:text-4xl font-bold font-patrick tracking-wider '>
            Journey
          </h1>
          <TextField 
              className="w-1/4 bg-beige rounded-r-none"
              id="outlined-size-small"
              size="small"
              label="Search anything here"
              variant="outlined"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
          />
        </div>

        <div className='gap-4 mx-auto mt-10 px-10 flex flex-wrap justify-center md:justify-start w-full  '>
            {stories.filter((items, index) => {
              if (search === "") {
                return items;
              } else if (
                items.title.toLowerCase().includes(search.toLowerCase()) ||
                items.desc
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                items.user.fullname.toLowerCase().includes(search.toLowerCase())
              ) {
                return items;
              }
            }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((items, index) => (
              <div key={index} className='relative'>
                <div onClick={() => addBookmark(items.id)}>
                  <img onClick={handleClick} src={ Bookmark } alt="" className='absolute z-10 right-1 top-1'/>
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