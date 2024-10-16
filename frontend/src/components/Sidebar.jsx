import React from "react";
import { useNavigate } from "react-router-dom";
import { House, MessageSquareMore, Globe, Users, SquareChevronRight, Settings, LogOut } from "lucide-react";
import {assets} from '../assets/assets';// Assuming assets is properly imported
import { handleSuccess } from "../utils/utils";

const Sidebar = ({ setActiveSection, activeSection }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged Out Successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="fixed top-0 left-0 w-64 min-h-screen bg-white border-r font-outfit">
      <div className="flex justify-center py-5">
        <img
          src={assets.Logo}
          alt="Logo"
          className="h-16 w-auto"
          onClick={() => navigate('/')}
        />
      </div>

      <ul className="text-[#2B64BB] mt-5">
        <li
          className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            activeSection === "dashboard" ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
          }`}
          onClick={() => setActiveSection("dashboard")}
        >
          <House />
          <p>Dashboard</p>
        </li>

        <li
          className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            activeSection === "messages" ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
          }`}
          onClick={() => setActiveSection("messages")}
        >
          <MessageSquareMore />
          <p>Messages</p>
        </li>

        <li
          className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            activeSection === "events" ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
          }`}
          onClick={() => setActiveSection("events")}
        >
          <Globe />
          <p>Events</p>
        </li>

        <li
          className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            activeSection === "network" ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
          }`}
          onClick={() => setActiveSection("network")}
        >
          <Users />
          <p>Network</p>
        </li>

        <li
          className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            activeSection === "open-source" ? "bg-[#F2F3FF] border-r-4 border-primary" : " "
          }mb-10` }
          onClick={() => setActiveSection("open-source")}
        >
          <SquareChevronRight />
          <p>Open Source</p>
        </li>
          <br />
          <br />
          <br />
          <br />
        <li
          className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            activeSection === "settings" ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
          }`}
          onClick={() => setActiveSection("settings")}
        >
          <Settings />
          <p>Settings</p>
        </li>

        <button
          className="flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 text-red-500 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut />
          <p>Logout</p>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
