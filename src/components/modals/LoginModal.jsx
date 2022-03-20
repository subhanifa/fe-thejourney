import { Dialog } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { API } from '../../config/api'
import { LoginContext, RegisteredContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'
import { UserContext } from '../../contexts/UserContext'
import { LeafIcon, PinIcon } from '../../exports/exportImage'

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
            setOpen(!open);
            setLogin(!login);
          }
        } catch (error) {
          const alert = (
            <div
              className="flex items-center text-red-500 border border-red-500 rounded-lg py-2 text-md justify-center font-bold"
              role="alert"
            >
              <p>Failed to login. Try Again</p>
            </div>
          );
          setMessage(alert);
          console.log(error);
        }
    };

    return (
    <>
    <Dialog.Title as="h3" className=" text-2xl font-bold text-black">
        Login
    </Dialog.Title>
    {message && message}
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className='absolute top-0 right-0 z-20'>
        <img src={LeafIcon} alt="" className='w-16' />
      </div>
      <div className='absolute -top-5 left-0 z-20'>
        <img src={PinIcon} alt="" className='w-10'/>
      </div>
      {/* <div>
        <svg viewBox="0 0 1240 320" className='absolute left-0 bottom-0 w-full'>
          <path fill="#56CBF9" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
      <div>
          <input
          id="email-address"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          className="appearance-none relative block w-full px-3 py-2 border-2 border-silver bg-beige placeholder-gray-500 rounded-md focus:outline-none focus:z-10 sm:text-sm"
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
          className="appearance-none relative block w-full px-3 py-2 border-2 border-silver bg-beige placeholder-gray-500 rounded-md focus:outline-none focus:z-10 sm:text-sm"
          placeholder="Password"
          />
      </div>
      <div>
          <button 
          type="submit" 
          className=' bg-light-blue w-full text-white px-4 py-2 font-semibold rounded'
          >
              Sign In
          </button>
      </div>
    <p className='text-center'>Don't have an account ? Click <button onClick={() => setRegistered(!registered)} className='font-bold'>Here</button></p>
    </form>
    </>
    )
}
