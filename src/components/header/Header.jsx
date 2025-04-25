import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
   <header className='p-4 flex justify-between shadow'>
    <section className='flex gap-5'>
    <h3 className='flex justify-center items-center'>
    <GiHamburgerMenu />
    </h3>

        <div className='px-2.5  w-[50vw] flex gap-2.5'>
            <span className='flex justify-center items-center'>
                <FaSearch />
                </span>
            <input placeholder='Search' className='p-1 w-full outline-0' />
        </div>
    </section>

    <section className='flex  items-center gap-1.5'>
        <img src="0" alt="user" className='h-8 w-8 rounded-full border ' />
        <select className='outline-0'>
            <option>Rebecca</option>
            <option>Logout</option>
        </select>
    </section>

   </header>
  )
}

export default Header
