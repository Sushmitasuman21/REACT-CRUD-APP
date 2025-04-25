import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='dark:bg-gray-700 dark:text-gray-200'>
      <Header/>
      <section className='flex'>
        <Navbar/>
        <Outlet/>
      </section>
    </div>
  )
}

export default Layout
