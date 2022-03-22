import React, { useContext, useState, useEffect  } from 'react'
import { LoginContext, RegisteredContext } from '../contexts/AuthContext'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../contexts/ModalContext'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { API } from '../config/api'
import Dropdown from './Dropdown'
import { Hibiscus, LeafTop, LogoBook } from '../exports/exportImage'


export default function Nav() {
    const [ login, setLogin ] = useContext(LoginContext)
    const [ open, setOpen ] = useContext(ModalContext)
    const [ registered, setRegistered ] = useContext(RegisteredContext)
    const [ state, dispatch ] = useContext(UserContext);

    let navigate = useNavigate();
    const logout = () => {
        setLogin(false);
        dispatch({
          type: "LOGOUT",
        });
        navigate("/");
    };

    const [ user, setUser ] = useState([])
    const getUser = async() => {
    try {
        const response = await API.get('/profile')
            setUser(response.data.data)
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

    return (
        <div>
            {login ? (
                <nav className="w-full top-0 px-2 sm:px-14 py-4 rounded bg-white dark:bg-gray-800 shadow-xl">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <div  className="flex items-center relative">
                            <Link 
                            to="/"
                            className="self-center text-2xl font-sumvib whitespace-nowrap text-black">
                                The Journey
                            <img src={LogoBook} alt="" className='absolute -top-1 -right-8 mt-1' />
                            <img src={LeafTop} alt="" className='absolute -top-1 left-12'/>
                            <img src={Hibiscus} alt="" className='absolute top-5 right-0'/>
                            </Link>
                        </div>
                        
                        <div>
                            <Dropdown />
                        </div>
                        

                    </div>
                </nav>
            ) : (
            <>
                <div className='w-full bg-cover brightness-75 bg-ming h-96 md:bg-header md:h-96 '/>
                <nav className="absolute w-full top-0 px-2 sm:px-14 py-7 rounded dark:bg-gray-800">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <button  className="flex items-center">
                            <Link 
                            to="/"
                            className="self-center text-3xl font-sumvib whitespace-nowrap text-white">
                                The Journey
                            </Link>
                        </button>

                        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>

                        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                            <ul className="flex flex-row mt-4 md:space-x-8 md:mt-0 md:text-lg font-sansita">
                                <li className=''>
                                    <button
                                    onClick={() => {
                                    setOpen(!open)
                                    setRegistered(true)}} 
                                    className="block text-beige py-2 pr-4 pl-3 md:px-3 md:py-1.5 border-2 rounded-xl md:bg-transparent " aria-current="page">
                                        Sign In
                                    </button>
                                </li>
                                <li className=" rounded-xl ">
                                    <button
                                    onClick={() => {
                                    setOpen(!open)
                                    setRegistered(false)}} 
                                    className="block text-beige py-2 pr-4 pl-3 md:px-3 md:py-1.5 border-2 rounded-xl md:bg-blue " >
                                        Sign Up
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col px-3 py-8 md:py-12 md:px-10 gap-5'>
                        <span className="text-white font-sansita text-4xl md:text-5xl" >The Journey <br/>you ever dreamed of.</span>
                        <span className='text-beige text-base md:text-lg'>We made a tool so you can easily keep & share your travel memories.<br/>But there is a lot more</span>
                    </div>
                </nav>
            </>
            
            )}
        </div>
    )
}
