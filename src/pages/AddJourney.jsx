import React from 'react'
// import RichText from '../components/CKEditor';
import SimpleEditor from '../components/SimpleEditor';

export default function AddJourney() {
  return (
    <>
        <div className='relative mx-5 my-4 md:mx-24 md:my-8'>
          <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider mb-10 md:mx-3'>
            New Journey
          </h1>

          <div className='mx-20'>
            <form >
              <label
                htmlFor="title"
                className="flex flex-col md:mt-5 text-2xl md:mb-8"
              >
                Title Journey
                <input
                  type="text"
                  name="title"
                  required
                  className="border-2 py-1 px-3 mt-2"
                />
              </label>

              {/* <RichText /> */}
              <SimpleEditor />

              {/* <label htmlFor="thumbnail" className="flex flex-col mt-4">
                Upload Thumbnail
                <input
                  type="file"
                  name="thumbnail"
                  className="md:mt-1"
                />
              </label> */}
              
            <div className="flex justify-end mt-20">
              <button className="text-center text-white px-10 py-2 bg-light-blue rounded-md">
                Post
              </button>
            </div>
              
            </form>
            
          </div>


        </div>
    </>
  )
}
