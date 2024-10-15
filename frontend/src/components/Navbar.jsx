import React from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Array of paths where the buttons should be hidden
  const hiddenButtonPaths = ['/student-register', '/roleselection',  '/login', '/alumni-register'];

  // Check if the current path is in the hiddenButtonPaths array
  const hideButtons = hiddenButtonPaths.includes(location.pathname);

  return (
    <div className='sticky top-0 bg-white z-50 flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400 font-outfit'>
      <img className='w-44 cursor-pointer' src={assets.Logo} alt="" />
      <ul className={`md:flex items-center gap-10 font-medium text-secondary ${hideButtons ? 'justify-center w-full' : ''}`}>
        <NavLink to={'/'}>
          <li className='py-1 font-semibold'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/about'}>
          <li className='py-1 font-semibold'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/features'}>
          <li className='py-1 font-semibold'>FEATURES</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/contact'}>
          <li className='py-1 font-semibold'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      {!hideButtons && (
        <div className='flex items-start gap-4'>
          <button onClick={() => navigate('/roleselection')} className='bg-primary font-outfit text-white px-10 py-3 rounded-full font-light hidden md:block hover:bg-orange-600 transition'>
            Create Account
          </button>
          <button onClick={() => navigate('/login')} className='bg-secondary font-outfit text-white px-10 py-3 rounded-full font-light hidden md:block'>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;