import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400 font-outfit '>
      <img className='w-44 cursor-pointer' src= {assets.Logo} alt="" />
      <ul className='hidden  md:flex items-start gap-5 font-medium text-secondary'>
        <NavLink to={'/'}>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/about'}>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/features'}>
            <li className='py-1'>FEATURES</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/contact'}>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-start gap-4'>
        <button onClick={()=>navigate('/createaccount')} className='bg-primary font-outfit text-white px-10 py-3 rounded-full font-light hidden md:block hover:bg-orange-600 transition'>Create Account</button>
        <button onClick={()=>navigate('/login')} className='bg-secondary font-outfit text-white px-10 py-3 rounded-full font-light hidden md:block '>Login</button>
      </div>
    </div>
  )
}

export default Navbar
