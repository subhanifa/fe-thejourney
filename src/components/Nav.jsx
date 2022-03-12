import React, { useContext } from 'react'
import { LoginContext, RegisteredContext } from '../contexts/AuthContext'
import { BookmarkIcon, Default, Journey, Logout, Profile } from '../exports/exportImage'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../contexts/ModalContext'



export default function Nav() {
    const [ login, setLogin ] = useContext(LoginContext)
    const [ open, setOpen ] = useContext(ModalContext)
    const [ registered, setRegistered ] = useContext(RegisteredContext)
    return (
        <div>
            {login ? (
                <nav className="w-full top-0 px-2 sm:px-14 py-4 rounded bg-white dark:bg-gray-800 shadow-xl">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <button  className="flex items-center">
                            <Link 
                            to="/"
                            className="self-center text-2xl font-sumvib whitespace-nowrap text-black">
                                The Journey
                            </Link>
                        </button>
                        
                        <div>
                            <Menu as="div" className="relative z-10">
                            <div>
                                <Menu.Button>
                                <span className="sr-only">Open user menu</span>
                                <img
                                    src={Default}
                                    alt="user"
                                    className="h-12 w-12 object-cover rounded-full border-2 border-brand-red"
                                />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-1 w-44 py-2 space-y-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <>
                                        <Menu.Item>
                                            <Link
                                            to="/my-profile"
                                            className="px-4 py-1 flex items-center hover:bg-gray-100 w-full"
                                            >
                                            <img
                                                src={Profile}
                                                className="w-5 mr-2"
                                                alt="profile"
                                            />
                                                My Profile
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link
                                            to="/add-journey"
                                            className="px-4 py-1 flex items-center hover:bg-gray-100 w-full"
                                            >
                                            <img
                                                src={Journey}
                                                className="w-5 mr-2"
                                                alt="profile"
                                            />
                                                New Journey
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link
                                            to="/my-bookmark"
                                            className="px-4 py-1 flex items-center hover:bg-gray-100 w-full"
                                            >
                                            <img
                                                src={BookmarkIcon}
                                                className="w-5 mr-2"
                                                alt="profile"
                                            />
                                                Bookmark
                                            </Link>
                                        </Menu.Item>
                                    </>
                                
                                <hr />
                                <Menu.Item>
                                    <div className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                                    <img src={Logout} className="w-5 mr-2" alt="logout" />
                                        Logout
                                    </div>
                                </Menu.Item>
                                </Menu.Items>
                            </Transition>
                            </Menu>
                        </div>
                        

                    </div>
                </nav>
            ) : (
            <>
                <div className='w-full bg-cover brightness-75 bg-ming h-screen md:bg-header md:h-96 '/>
                <nav className="absolute w-full top-0 px-2 sm:px-14 py-7 rounded dark:bg-gray-800">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <button  className="flex items-center">
                            <span className="self-center text-3xl font-sumvib whitespace-nowrap text-white">The Journey</span>
                        </button>

                        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>

                        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg font-sansita">
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
                    <div className='flex flex-col px-3 py-14 md:py-12 md:px-10 gap-5'>
                        <span className="text-white font-sansita text-4xl md:text-5xl" >The Journey <br/>you ever dreamed of.</span>
                        <span className='text-beige text-base md:text-lg'>We made a tool so you can easily keep & share your travel memories.<br/>But there is a lot more</span>
                    </div>
                </nav>
            </>
            
            )}
        </div>
    )
}
