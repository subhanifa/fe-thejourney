import React, { useState } from 'react'
import RichText from '../components/CKEditor';
import { API } from '../config/api';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {Default, Preview} from '../exports/exportImage'
import { CKEditor } from '@ckeditor/ckeditor5-react';


export default function AddJourney() {

  const [message, setMessage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    image: "",
    desc: "",
  });
  const { title, image, desc } = form;
  console.log(image)
  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleChangeEditor = (event, editor) => {
    const data = editor.getData();
    setForm({
      ...form,
      desc: data,
    });
  };

  const handleSubmit = async (e) => {
    
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
  
      const formData = new FormData();
        formData.set("title", form.title);
        formData.set("desc", form.desc);
        formData.set("image", form.image[0], form.image[0].name);
  
        const response = await API.post("/story", formData, config);
        console.log(response);

        if (response.data.status === "Success") {
          const alert = (
            <div
              className="flex items-center bg-ming rounded-md text-white text-sm px-4 py-3"
              role="alert"
            >
              <p>New Journey posted.</p>
            </div>
          );
          setMessage(alert);
          setTimeout(() => {
            setMessage(null);
          }, 4000);
          setForm({
            title: "",
            desc: "",
            image: "",
          });
        } else {
          const alert = (
            <div
              className="flex justify-center items-center bg-magenta text-white text-sm font-bold px-4 py-3"
              role="alert"
            >
              <p>Error. Try Again</p>
            </div>
          );
          console.log(response);
          setMessage(alert);
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
        <div className='relative mx-5 my-4 md:mx-24 md:my-8'>
          <h1 className='text-3xl md:text-4xl font-bold font-patrick tracking-wider mb-10 md:mx-3'>
            New Journey
          </h1>

          <div className='mx-20'>
          {message && message}
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="flex flex-col md:mt-5 text-2xl md:mb-8"
              >
                Title Journey
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  required
                  className="border-2 py-1 px-3 mt-2"
                />
              </label>

              <CKEditor editor={ClassicEditor} onChange={handleChangeEditor}  />

              <div className="md:flex md:justify-between items-start mt-20">
                <label
                  htmlFor="image"
                  className="flex flex-col items-center justify-end w-48 h-48 p-4 space-y-4 bg-brand-white border border-brand-blue rounded-md cursor-pointer"
                >
                  <img src={preview ? preview : Preview} alt="preview" className="max-h-28" />
                  <p className="font-['Avenir-Black'] font-bold text-lg">
                    Insert Image Here
                  </p>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    className="sr-only"
                  />
                </label>
                <button type="submit" className="text-center text-white px-10 py-2 bg-light-blue rounded-md">
                  Post
                </button>
              </div>
            </form>
            
          </div>
        </div>
    </>
  )
}