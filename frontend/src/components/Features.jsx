import React, { useEffect } from "react";
import { assets } from "../assets/assets"; // Assuming your assets are in a separate file
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: false,    // Allow animation to trigger only once
      offset: 100,    // Offset value for triggering animations
    });
  }, []);

  return (
    <div className="container mx-auto py-16 font-outfit">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary" data-aos="zoom-in">
        Our Features
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Card 1 */}
        <div
          className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] hover:scale-105 transition-all duration-300 rounded-lg shadow-md"
          data-aos="fade-up" // AOS animation
          data-aos-delay="100"
        >
          <img
            src={assets.Icon01}
            alt="Networking Opportunities"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-medium mb-2 text-primary">
            Networking Opportunities
          </h3>
          <p className="text-secondary text-center">
            Connect with alumni and students to build valuable professional relationships.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] hover:scale-105 transition-all duration-300 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={assets.Icon02}
            alt="Mentorship Program"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-medium mb-2 text-primary">
            Mentorship Program
          </h3>
          <p className="text-secondary text-center">
            Find mentors who can guide you through your career journey.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] hover:scale-105 transition-all duration-300 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={assets.Icon03}
            alt="Webinars"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-medium mb-2 text-primary">
            Webinars
          </h3>
          <p className="text-secondary text-center">
            Attend informative webinars led by industry professionals.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] hover:scale-105 transition-all duration-300 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src={assets.Icon04}
            alt="Discussion Forums"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-medium mb-2 text-primary">
            Discussion Forums
          </h3>
          <p className="text-secondary text-center">
            Engage in discussions and share insights with your peers.
          </p>
        </div>

        {/* Card 5 */}
        <div
          className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] hover:scale-105 transition-all duration-300 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={assets.Icon05}
            alt="Career Guidance"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-medium mb-2 text-primary">
            Career Guidance
          </h3>
          <p className="text-secondary text-center">
            Access resources and advice to help navigate your career path.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/roleselection")}
          className="bg-primary text-white font-light py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
          data-aos="zoom-in"
        >
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Features;
