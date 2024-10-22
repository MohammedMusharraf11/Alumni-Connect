import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import EventsList from "../components/EventsList";
import Card from "../components/Card";
import ScheduleEventForm from "../components/ScheduleEvent";
import HostMentorshipForm from "../components/HostMentorship";
import JobOpeningsForm from "../components/JobOpenings";
import { Search } from "lucide-react";
import { assets } from "../assets/assets"; // Assuming assets is properly imported
import Network from "../components/Network";
import OpenSource from "../components/OpenSource";
import { networkData } from "../utils/networkData";

function Dashboard() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCard, setActiveCard] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard"); // Track the active section
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentDate = new Date().toLocaleDateString();

  const handleCardClick = (title) => {
    setActiveCard(title);
    if (title === "Events") {
      setActiveSection("events");
    }
    if (title === "Network") {
      setActiveSection("network");
    }
    if (title === "Open Source") {
      setActiveSection("open-source");
    }
    if (title === "Network") {
      setActiveSection("network");
    }
  };

  const handleCancelForm = () => {
    setActiveCard("");
  };



  // Render content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
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
        );
      case "events":
        return <EventsList />;
      case "network":
        return <Network />;
      case "open-source":
        return <OpenSource />;
      default:
        return <div>Default content</div>;
    }
  };
  const renderTopAlumni = () => {
    const sortedAlumni = networkData.alumni
      .sort((a, b) => b.credits - a.credits)
      .slice(0, 4); // Show top 4 alumni

    return (
      <Card
        title="Top Alumni"
        description=<ul className="space-y-2">
        {sortedAlumni.map((alumni, index) => (
          <li key={index} className="flex ">
            <div className="font-medium text-secondary">{alumni.name}</div>
            <div className="text-gray-600">{alumni.credits} credits</div>
          </li>
        ))}
      </ul>
        icon={assets.Star} // Assuming you have a "star" icon for top alumni
        onClick={() => {}}
      >
        
      </Card>
    );
  };

  return (
    <div className="grid grid-cols-12 min-h-screen w-screen max-w-full bg-[#EDF0F7]">
      <div className="col-span-2 rounded-lg min-h-full">
        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      </div>

      <div className="col-span-8 rounded-lg min-h-fit pt-4">
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

        {/* Conditionally render the selected form */}
        {activeCard === "Schedule an Event" && <ScheduleEventForm onCancel={handleCancelForm} />}
        {activeCard === "Host a Mentorship" && <HostMentorshipForm onCancel={handleCancelForm} />}
        {activeCard === "Job Openings" && <JobOpeningsForm onCancel={handleCancelForm} />}

        {/* Render the main content based on active section */}
        {renderContent()}
      </div>

      {/* Right-side Profile Section */}
      <div className="col-span-2 flex justify-center px-4 pt-4 ">
  <div className="relative flex flex-col items-center space-y-4">
    {/* Profile Section */}
    <button
      onClick={toggleDropdown}
      className="flex items-center space-x-2 focus:outline-none"
    >
      <span className="font-outfit font-bold text-secondary">
        {loggedInUser}
      </span>
      <img
        src={assets.Profile}
        alt="Profile"
        className="w-10 h-10 rounded-xl"
      />
    </button>
    <br />
    
    {/* Card for Credits */}
    <div className="flex mt-10 px-4">
          {/* Top Alumni */}
          {renderTopAlumni()}
          </div>

          {/* Credits Section for Logged-in User */}
          <Card
            title="Your Credits"
            description="126"
            icon={assets.Dollor}
            onClick={() => {}} // Add onClick handler 
          />   
        </div>
      </div>
  </div>


    
  );
}

export default Dashboard;
