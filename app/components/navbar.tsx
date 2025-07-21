import React from 'react'
import { CircleUserRound, Squirrel } from "lucide-react";

const userName = "Dhanavadh Saito";

const Navbar = () => {
  return (
    <div className='flex w-full px-2 bg-gray-800 text-white sticky top-0 font-sans justify-between items-center'>
        <section className='flex flex-col items-start justify-center gap-2 mt-2'>            
          <span className='flex items-center justify-center gap-2'>
            <Squirrel />
            <h1 className='text-lg font-medium'>สวัสดี, {userName}</h1>            
          </span>
          <div className='flex bg-gray-600'>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2 bg-gray-200 text-black hover:text-white'>หน้าแรก</a>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2'>IM</a>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2'>Tasks</a>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2'>Interim/ติดตามเคส</a>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2'>Commission</a>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2'>Reimburise</a>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2'>Contact Lists</a>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2'>Knowledge Base</a>
              <a href="#" className='text-sm font-medium hover:underline hover:bg-gray-700 p-2'>ออกจากระบบ</a>
          </div>
        </section>   
        <section className='flex flex-col items-end justify-center gap-2'>
          <button className='p-2 bg-gray-600 hover:bg-gray-700 rounded-md'>
            <CircleUserRound className='w-5 h-5' />
          </button>
          <span className='text-sm font-medium'>Logged in as Admin</span>
        </section>     
    </div>
  )
}

export default Navbar