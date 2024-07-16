import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className = 'bg-black text-white flex justify-between py-4 px-5 items-baseline mx-5 my-5 rounded-md shadow-pink-500'>
      <h1 className='text-2xl'>Puspow</h1>
    <nav className='space-x-5 items-baseline'>
     <NavLink to={'/about'}>about</NavLink>
     <button>about</button>
     <button>about</button>
    </nav>
    </div>
  )
}

export default Header