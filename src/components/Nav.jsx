import React from 'react'
// import { LogoWhite } from '../exports/exportImage'


export default function Nav() {
  return (
    <div>
        <div className='bg-header h-96 w-full bg-cover brightness-75'/>
        {/* If Guest Show This */}
        <nav className="absolute w-full top-0 px-2 sm:px-14 py-7 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <button  className="flex items-center">
                    <span className="self-center text-2xl font-sumvib whitespace-nowrap text-white">The Journey</span>
                </button>

                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg font-sansita">
                        <li>
                            <button className="block text-white py-2 pr-4 pl-3 md:px-3 md:py-1.5 border-2 rounded md:bg-transparent dark:text-white " aria-current="page">Sign In</button>
                        </li>
                        <li>
                            <button className="block text-white py-2 pr-4 pl-3 md:px-3 md:py-1.5 border-2 rounded md:bg-transparent dark:text-white" >Sign Up</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex md:py-12 md:px-10 md:flex-col gap-5'>
                <span className="text-white font-sansita text-5xl" >The Journey <br/>you ever dreamed of.</span>
                <span className='text-beige font-pacifico text-lg'>We made a tool so you can easily keep & share your travel memories.<br/>But there is a lot more</span>
            </div>
        </nav>

        {/* If Login Show This */}
        {/* <nav className="w-full top-0 px-2 sm:px-14 py-7 rounded dark:bg-gray-800 bg-white">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
                <button  className="flex items-center">
                    <span className="self-center text-2xl font-sumvib whitespace-nowrap text-black">The Journey</span>
                </button>

                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-base font-sansita">
                        <li>
                            <button className="block py-2 pr-4 pl-3 text-black bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white " aria-current="page">Login</button>
                        </li>
                        <li>
                            <button className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" >Register</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
    </div>
  )
}
