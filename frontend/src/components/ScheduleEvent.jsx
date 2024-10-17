import React, { useState } from "react";
import { handleSuccess, handleError } from "../utils/utils"; // Import toast messages

const ScheduleEvent = ({ onCancel }) => {
  const [eventDescription, setEventDescription] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [category, setCategory] = useState("");

  // Event categories
  const categories = ["Tech Talk", "Hackathon", "Workshop", "Networking", "Non-Tech Meetup"];

  // Handle form submission and validation
  const handleSchedule = () => {
    const currentDate = new Date();
    const selectedDate = new Date(dateTime);

    // Form validation logic
    if (!eventDescription || !eventLink || !dateTime || !category) {
      handleError("Please fill in all fields.");
      return;
    }

    if (selectedDate < currentDate) {
      handleError("Date cannot be in the past.");
      return;
    }

    // Show success message
    handleSuccess("Event Scheduled Successfully");
    onCancel(); // Close the form after scheduling
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4">
      {/* Event Description Field */}
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      
      {/* Event Link Field */}
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Event Link"
        value={eventLink}
        onChange={(e) => setEventLink(e.target.value)}
      />
      
      {/* Event Date and Time */}
      <input
        type="datetime-local"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      
      {/* Event Category Selection */}
      <select
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Form Actions: Cancel and Submit */}
      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          onClick={handleSchedule}
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Schedule Event
        </button>
      </div>
    </div>
  );
};

export default ScheduleEvent;
