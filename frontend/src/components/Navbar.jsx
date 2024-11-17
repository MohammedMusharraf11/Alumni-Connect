import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [dropDown, setDropDown] = useState(false);

  const hiddenButtonPaths = ['/student-register', '/roleselection', '/login', '/alumni-register','/admin'];
  const hideButtons = hiddenButtonPaths.includes(location.pathname);

  return (
    <div className="relative top-0 bg-white z-50 flex items-center justify-between text-sm py-4 border-b border-white-400 font-outfit">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src={assets.Logo}
        alt=""
        data-aos="zoom-in"
        data-aos-duration="800"
        onClick={() => navigate('/')}
      />

      {/* Desktop Navbar */}
      <ul
        className={`relative  items-center gap-10 font-medium text-secondary hidden xl:flex`}
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {['/', '/about', '/features', '/contact'].map((path, index) => (
          <li key={index} className="relative">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `py-1 font-semibold transition-colors ${
                  isActive ? 'text-primary' : 'hover:text-primary'
                }`
              }
            >
              {path === '/' ? 'HOME' : path.toUpperCase().slice(1)}
            </NavLink>
            {/* Line under active link */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-1 h-[3px] bg-primary rounded-full transition-all duration-500 ${
                location.pathname === path ? 'w-full' : 'w-0'
              }`}
            ></div>
          </li>
        ))}
      </ul>

      {/* Buttons (Create Account and Login) */}
      {!hideButtons && (
        <div
          className="flex items-start gap-4 md:max-lg:gap-2"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <button
            onClick={() => navigate('/roleselection')}
            className="bg-primary font-outfit text-white px-10 py-3 rounded-full font-light hidden xl:block hover:bg-orange-600 transition md:max-lg:px-6 md:max-lg:py-2"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/login')}
            className="bg-secondary font-outfit text-white px-10 py-3 rounded-full font-light hidden xl:block md:max-lg:px-6 md:max-lg:py-2"
          >
            Login
          </button>
        </div>
      )}

      {/* Mobile Dropdown */}
      <div className="xl:hidden flex items-center">
        <div className="mr-4" onClick={() => setDropDown(!dropDown)}>
          {dropDown ? <X /> : <Menu />}
        </div>

        {/* Dropdown Menu */}
        {dropDown && (
          <div
            className="absolute w-full top-0 left-0 flex flex-col justify-center items-center bg-white gap-4 py-6 backdrop-blur-lg bg-opacity-20 transition-all duration-300 ease-in-out"
          >
            <ul className="flex flex-col items-center gap-4 font-medium text-secondary text-center">
              {['/', '/about', '/features', '/contact'].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `py-1 font-semibold transition-colors ${
                        isActive ? 'text-primary' : 'hover:text-primary'
                      }`
                    }
                    onClick={() => setDropDown(false)} // Close dropdown on click
                  >
                    {path === '/' ? 'HOME' : path.toUpperCase().slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Create Account and Login buttons in mobile view */}
            {!hideButtons && (
              <div className="flex flex-col items-start gap-4">
                <button
                  onClick={() => navigate('/roleselection')}
                  className="bg-primary font-outfit text-white px-10 py-3 rounded-full font-light hover:bg-orange-600 transition w-full"
                >
                  Create Account
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-secondary font-outfit text-white px-10 py-3 rounded-full font-light w-full"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
