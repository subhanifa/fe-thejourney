import { Dialog } from '@headlessui/react'
import React, { useContext } from 'react'
import { RegisteredContext } from '../../contexts/AuthContext'

export default function RegisterModal() {
    const [registered, setRegistered] = useContext(RegisteredContext)

    return (
        <>
            <Dialog.Title as="h3" className=" text-2xl font-bold text-red-700">
                Register
            </Dialog.Title>
            {/* {message && message} */}
            <form onSubmit="{handleSubmit}" className="space-y-5">
                
            <div>
                {/* <label htmlFor="fullname" className="sr-only">
                Full Name
                </label> */}
                <input
                // id="fullname"
                name="fullname"
                type="text"
                // value="{fullname}"
                // onChange="{handleChange}"
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
                // id="phone"
                name="phone"
                type="text"
                // value="{phone}"
                // onChange="{handleChange}"
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
                // id="email"
                name="email"
                type="email"
                // value="{email}"
                // onChange="{handleChange}"
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
                // id="password"
                name="password"
                type="password"
                // value="{password}"
                // onChange="{handleChange}"
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
