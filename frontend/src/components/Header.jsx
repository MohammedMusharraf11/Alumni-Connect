import React, { useEffect } from "react";
import BannerImage from "../assets/Banner 1.png"; // Path to your banner image
import AboutImage from "../assets/About.png";   // Path to your about image
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true,    // Animation triggers once per element
      offset: 100,   // Offset value for triggering animations
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center space-y-16">
      {/* Banner Section */}
      <div className="relative w-full overflow-hidden">
        <img
          src={BannerImage}
          alt="Banner"
          className="w-full h-auto"
          data-aos="fade-left"
          data-aos-duration="1200"
        />
        <button
          onClick={() => navigate("/roleselection")}
          className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-light py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 font-outfit"
          data-aos="fade-down-left"
        >
          Get Started
        </button>
      </div>

      {/* About Section */}
      <div
        className="relative w-full flex justify-center items-center"
        data-aos="fade-right"
      >
        <img
          src={AboutImage}
          alt="About Alumni Connect"
          
        />
      </div>
    </div>
  );
}

export default Header;
