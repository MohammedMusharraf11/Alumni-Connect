import React from 'react';
import { assets } from '../assets/assets'// Assuming your assets are in a separate file

function Features() {
  return (
    <div className="container mx-auto py-16 font-outfit">
      <h1 className="text-3xl font-bold text-center mb-8 text-secondary">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] transition-all duration-300 rounded-lg">
          <img src={assets.Icon01} alt="Networking Opportunities" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-medium mb-2 text-primary">Networking Opportunities</h3>
          <p className="text-secondary">Connect with alumni and students to build valuable professional relationships.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] transition-all duration-300 rounded-lg">
          <img src={assets.Icon02} alt="Mentorship Program" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-medium mb-2 text-primary">Mentorship Program</h3>
          <p className="text-secondary">Find mentors who can guide you through your career journey.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] transition-all duration-300 rounded-lg">
          <img src={assets.Icon03} alt="Webinars" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-medium mb-2 text-primary">Webinars</h3>
          <p className="text-secondary">Attend informative webinars led by industry professionals.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] transition-all duration-300 rounded-lg">
          <img src={assets.Icon04} alt="Discussion Forums" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-medium mb-2 text-primary">Discussion Forums</h3>
          <p className="text-secondary">Engage in discussions and share insights with your peers.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-custom-blue hover:bg-[#cae0ff] transition-all duration-300 rounded-lg">
          <img src={assets.Icon05} alt="Career Guidance" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-medium mb-2 text-primary">Career Guidance</h3>
          <p className="text-secondary">Access resources and advice to help navigate your career path.</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className= "bg-primary text-white font-light py-2 px-6 rounded-full shadow-lg hover:bg-orange-600 transition font-outfit">Join Now</button>
      </div>
    </div>
  );
}

export default Features;