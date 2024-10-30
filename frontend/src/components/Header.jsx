import React from 'react';
import BannerImage from '../assets/Banner 1.png'; // Path to your banner image
import AboutImage from '../assets/About.png';   // Path to your about image
import {useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col items-center">
      {/* Banner Section */}
      <div className="relative">
        <img src={BannerImage} alt="Banner" className="w-full h-auto" />
        <button onClick={()=>navigate('/roleselection')} className="absolute top-[70%] left-[60%] sm:left-[55%] transform -translate-x-1/2 bg-primary text-white font-light py-1 sm:py-2 sm:px-6 px-4 rounded-full shadow-lg hover:bg-orange-600 transition font-outfit xl:top-[72%] xl:left-[46%]">
          Get Started
        </button>
      </div>

      {/* About Section */}
      <div className="relative mt-16">
        <img src={AboutImage} alt="About Alumni Connect" className="w-full h-auto" />
        
      </div>
    </div>
  );
}

export default Header;
