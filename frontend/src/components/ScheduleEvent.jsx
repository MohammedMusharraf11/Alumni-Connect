import React, { useState } from "react";
import axios from "axios";
import { handleSuccess, handleError } from "../utils/utils"; // Import toast messages

const ScheduleEvent = ({ onCancel }) => {
  const [eventDescription, setEventDescription] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["Tech Talk", "Hackathon", "Workshop", "Networking", "Non-Tech Meetup"];

  const handleSchedule = async () => {
    const currentDate = new Date();
    const selectedDate = new Date(dateTime);

    // Form validation
    if (!eventDescription || !eventLink || !dateTime || !category) {
      handleError("Please fill in all fields.");
      return;
    }

    if (selectedDate < currentDate) {
      handleError("Date cannot be in the past.");
      return;
    }

    // Event data to be sent in the POST request
    const eventData = {
      description: eventDescription,
      link: eventLink,
      dateTime,
      category,
    };

    try {
      // POST request to create a new event
      const response = await axios.post("http://localhost:8080/api/events", eventData);

      // Show success message and reset form if request is successful
      handleSuccess("Event Scheduled Successfully");
      setEventDescription("");
      setEventLink("");
      setDateTime("");
      setCategory("");
      onCancel(); // Close the form
    } catch (error) {
      handleError("Failed to schedule the event. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Event Link"
        value={eventLink}
        onChange={(e) => setEventLink(e.target.value)}
      />
      <input
        type="datetime-local"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
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
