import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { handleSuccess } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { House, MessageSquareMore, Globe, Users, SquareChevronRight, Settings, Heart, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    
    // Show the success message immediately
    handleSuccess('Logged out successfully');
    
    // Navigate to the home page after a short delay (optional)
    setTimeout(() => {
      navigate('/');
    }, 1000); // Adjust the delay as needed (1000ms = 1 second)
  };

  


  return (
    <div className='fixed top-0 left-0 w-64 min-h-screen bg-white border-r font-outfit text-zinc-500'>

      <div className="flex justify-center py-5">
        <img src={assets.Logo} alt="Logo" className="h-16 w-auto" />
      </div>


      <ul className='text-[#515151] mt-5'>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
            }`
          }
          to={'/dashboard'}
        >
          <House />
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
            }`
          }
          to="/all-appointments"
        >
          <MessageSquareMore />
          <p>Messages</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
            }`
          }
          to="/add-doctor"
        >
          <Globe />
          <p>Events</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
            }`
          }
          to="/doctor-list"
        >
          <Users />
          <p>Network</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
            }`
          }
          to="/doctor-list"
        >
          <SquareChevronRight />
          <p>Open Source</p>
        </NavLink>
      </ul>

      {/* Spacer to push settings, support, and logout to the bottom */}

      <div className="absolute bottom-0 w-full">
    
      {/* Bottom Fixed Links */}
      <ul className="text-[#515151]">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
            }`
          }
          to="/doctor-appointments"
        >
          <Settings />
          <p>Settings</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
              isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
            }`
          }
          to="/supportus"
        >
          <Heart />
          <p>Support Us</p>
        </NavLink>

        {/* Logout Button */}
        <div
          className="flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-[#F2F3FF] border-r-4 border-transparent hover:border-primary"
          onClick={handleLogout}
        >
          <LogOut />
          <p>Logout</p>
        </div>
        
      </ul>
        </div>
    </div>
  );
};

export default Sidebar;
