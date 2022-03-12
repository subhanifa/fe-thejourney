import { Dialog } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../../config/api'
import { LoginContext, RegisteredContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'
import { UserContext } from '../../contexts/UserContext'

export default function LoginModal() {
    // let navigate = useNavigate();
    // State for Login
    const [ login, setLogin ] = useContext(LoginContext)
    // State for Opening Modal
    const [ open, setOpen ] = useContext(ModalContext)
    // State to Switch between Login & Register Modal
    const [ registered, setRegistered ] = useContext(RegisteredContext)
    // State to Call UserContext
    const [ state, dispatch ] = useContext(UserContext);


    const [ message, setMessage ] = useState(null);
    const [ form, setForm ] = useState({
        email: "",
        password: "",
    });
    const { email, password } = form;
    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
    
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const body = JSON.stringify(form);
          const response = await API.post("/login", body, config);
    
          if (response?.status === 200) {
            // Send data to useContext
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: response.data.user,
            });

            setLogin(!login);
            setOpen(!open);
            // setOpen(false)
            // if (response.data.user.status === "admin") {
            //   navigate("/");
            //   setOpen(true);
            // }
    
          }
        } catch (error) {
          console.log(error);
        }
    };

    return (
    <>
    <Dialog.Title as="h3" className=" text-2xl font-bold text-red-700">
        Login
    </Dialog.Title>
    {/* {message && message} */}
    <form onSubmit={handleSubmit} className="space-y-5">
        <div>
            <input
            id="email-address"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            />
        </div>
        <div>
            <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            />
        </div>
        <div>
            <button 
            type="submit" 
            className=' bg-red-700 w-full text-white px-4 py-2 font-semibold rounded'
            >
                Sign In
            </button>
        </div>
    <p className='text-center'>Don't have an account ? Click <button onClick={() => setRegistered(!registered)} className='font-bold'>Here</button></p>
    </form>
    </>
    )
}
