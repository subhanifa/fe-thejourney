import React from 'react'
import TextField from "@mui/material/TextField";

export const SearchBox = () => {
  return (
    <>
    <div className='flex justify-center md:ml-12 md:mr-20 md:my-5 '>
        <TextField 
            className="w-11/12 bg-beige rounded-r-none"
            id="outlined-basic"
            label="Search anything here"
            variant="outlined"
        />
        <button className='px-6 bg-mid-blue rounded-r-lg'>Search</button>
    </div>

      {/* <div className='mx-10'>
        <form className="w-full flex justify-center pb-5">
        <input
            type="text"
            className="w-10/12 p-3 rounded-l-md focus:outline-none"
            placeholder="Find Journey"
        />
        <button
            type="button"
            className="w-1/12 bg-blue py-3 rounded-r-md text-white"
        >
            Search
        </button>
        </form>
      </div> */}
    </>
  )
}
