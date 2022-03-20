import React, { useContext, useEffect, useState } from 'react'
import { LoginContext, RegisteredContext } from '../contexts/AuthContext'
import { BookmarkIcon, Default, Journey, Logout, Profile } from '../exports/exportImage'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../contexts/ModalContext'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { API } from '../config/api'
import urlSlug from "url-slug";

export default function Dropdown() {
    const [ login, setLogin ] = useContext(LoginContext)
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
            // console.log(response);
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
    <div className=''>
    <Menu as="div" className="relative z-20">
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
                        to={"/profile/" + urlSlug(user.fullname)}

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
            <Menu.Item onClick={logout}>
                <div className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                <img src={Logout} className="w-5 mr-2" alt="logout" />
                    Logout
                </div>
            </Menu.Item>
            </Menu.Items>
        </Transition>
                            </Menu>
    </div>
  )
}
