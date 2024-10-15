import React, { useState, useEffect } from "react";
import { handleSuccess } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { assets } from "../assets/assets";
import { Search } from "lucide-react";
import Card from "../components/Card";
import ScheduleEventForm from "../components/ScheduleEvent"; // Import Schedule Event Form
import HostMentorshipForm from "../components/HostMentorship"; // Import Host Mentorship Form
import JobOpeningsForm from "../components/JobOpenings"; // Import Job Openings Form

function Dashboard() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(""); // State to track the active card
  const navigate = useNavigate();
  const user = loggedInUser.toUpperCase();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentDate = new Date().toLocaleDateString();

  const handleCardClick = (title) => {
    setActiveCard(title); // Set the active card based on the clicked card
  };

  const handleCancelForm = () => {
    setActiveCard(""); // Reset the active card when the form is canceled
  };

  return (
    <>
      <div className="grid grid-cols-12 min-h-screen w-screen max-w-full bg-[#EDF0F7]">
        {/* Left Sidebar */}
        <div className="col-span-2 rounded-lg min-h-full">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="col-span-8 rounded-lg min-h-fit pt-4">
          {/* Welcome and Search Bar */}
          <div className="flex justify-between items-center gap-8 px-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-outfit font-bold text-secondary">
                Welcome, {loggedInUser}
              </h1>
              <p className="text-[#023074cd]">{currentDate}</p>
            </div>

            <div className="relative mx-auto w-96">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-full border border-gray-300 rounded-lg pl-10 focus:outline-none focus:border-[#023074a0]"
              />
              <Search className="absolute top-3 left-3 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-3 gap-4 mt-8 px-4">
            <Card
              title="Schedule an Event"
              description="Organize and promote alumni events."
              icon={assets.Calender}
              onClick={() => handleCardClick("Schedule an Event")}
            />
            <Card
              title="Host a Mentorship"
              description="Offer your expertise to students and fellow alumni."
              icon={assets.ShakeHand}
              onClick={() => handleCardClick("Host a Mentorship")}
            />
            <Card
              title="Job Openings"
              description="Share opportunities with alumni."
              icon={assets.Money}
              onClick={() => handleCardClick("Job Openings")}
            />
          </div>

          {/* Conditionally render the selected form */}
          {activeCard === "Schedule an Event" && <ScheduleEventForm onCancel={handleCancelForm} />}
          {activeCard === "Host a Mentorship" && <HostMentorshipForm onCancel={handleCancelForm} />}
          {activeCard === "Job Openings" && <JobOpeningsForm onCancel={handleCancelForm} />}
        </div>

        {/* Right-side Profile Section */}
        <div className="col-span-2 flex justify-center px-4 pt-4">
          <div className="relative flex flex-col items-center">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <span className="font-outfit font-bold text-secondary">{user}</span>
              <img
                src={assets.Profile}
                alt="Profile"
                className="w-10 h-10 rounded-xl"
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => navigate("/update-profile")}
                >
                  Update Profile
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
