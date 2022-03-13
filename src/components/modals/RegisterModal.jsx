import { Dialog } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { API } from '../../config/api';
import { RegisteredContext } from '../../contexts/AuthContext'
import { UserContext } from '../../contexts/UserContext';

export default function RegisterModal() {
    const [registered, setRegistered] = useContext(RegisteredContext)
    const [state, dispatch] = useContext(UserContext);
  
    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
    
          // Configuration Content-type
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          // Data body
          const body = JSON.stringify(form);
          // Insert data user to database
          const response = await API.post("/register", body, config);
          // Notification
          if (response.data.status === "Success") {
            const alert = (
              <div
                className="flex items-center bg-green-600 rounded-md text-white text-sm px-4 py-3"
                role="alert"
              >
                <p>
                  Successfully registered. Click{" "}
                  <button
                    className="font-bold"
                    onClick={() => setRegistered(!registered)}
                  >
                    here
                  </button>{" "}
                  to login.
                </p>
              </div>
            );
            setMessage(alert);
            setForm({
              fullname: "",
              phone: "",
              email: "",
              password: "",
            });
          } else if (response?.status === 400) {
            const alert = (
              <div
                className="flex justify-center items-center rounded-md text-blue-600 border border-blue-600 text-sm font-bold px-4 py-3"
                role="alert"
              >
                <p>{response.message}</p>
              </div>
            );
            setMessage(alert);
          }
        } catch (error) {
          const alert = (
            <div
              className="flex justify-center items-center rounded-md text-red-600 border border-red-600 text-sm font-bold px-4 py-3"
              role="alert"
            >
              <p>Register Failed. Try Again</p>
            </div>
          );
          console.log(error);
          setMessage(alert);
        }
      };

    const { fullname, phone, email, password } = form;

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };


    return (
        <>
            <Dialog.Title as="h3" className=" text-2xl font-bold text-red-700">
                Register
            </Dialog.Title>
            {message && message}
            <form onSubmit={handleSubmit} className="space-y-5">
                
            <div>
                {/* <label htmlFor="fullname" className="sr-only">
                Full Name
                </label> */}
                <input
                id="fullname"
                name="fullname"
                type="text"
                value={fullname}
                onChange={handleChange}
                required
                className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                />
            </div>
            <div>
                {/* <label htmlFor="fullname" className="sr-only">
                Full Name
                </label> */}
                <input
                id="phone"
                name="phone"
                type="text"
                value={phone}
                onChange={handleChange}
                required
                className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Phone"
                />
            </div>
            <div>
                {/* <label htmlFor="email" className="sr-only">
                Email address
                </label> */}
                <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
                className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                />
            </div>
            <div>
                {/* <label htmlFor="password" className="sr-only">
                Password
                </label> */}
                <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                required
                className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                />
            </div>
            <div>
                <button type="submit" className=' bg-red-700 w-full text-white px-4 py-2 font-semibold rounded'>
                    Register
                </button>
            </div>
            <p className='text-center'>Already have an account ? Click <button onClick={() => setRegistered(!registered)} className='font-bold'>Here</button></p>
            </form>
        </>
    )
}
