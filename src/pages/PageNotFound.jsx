import React from 'react'
import pnf from '../assets/404.avif'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
      <section className=' bg-gray-200 min-h-screen flex justify-center items-center '>
        <div className=' '> 
          <img className='w-auto  ' src={pnf} alt="" />
           <Link to='/' className=' flex items-center justify-center'>
            <button type="button" class=" my-5 text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Go to home</button>
        </Link>
        </div>
       
      </section>
      
  )
}

export default PageNotFound
