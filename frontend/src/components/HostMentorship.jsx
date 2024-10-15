// src/components/HostMentorship.jsx
import React, { useState } from 'react';

const HostMentorshipForm = ({ onCancel }) => {
  const [mentorshipDetails, setMentorshipDetails] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentorshipDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit mentorship details
    console.log('Mentorship details submitted:', mentorshipDetails);
    onCancel(); // Close the form after submission
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Mentorship Title</label>
          <input
            type="text"
            name="title"
            value={mentorshipDetails.title}
            onChange={handleChange}
            required
            className="border rounded-lg w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={mentorshipDetails.description}
            onChange={handleChange}
            required
            className="border rounded-lg w-full py-2 px-3"
          />
        </div>
        <div className="mb-4 flex space-x-2">
          <div className="flex-1">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={mentorshipDetails.date}
              onChange={handleChange}
              required
              className="border rounded-lg w-full py-2 px-3"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={mentorshipDetails.time}
              onChange={handleChange}
              required
              className="border rounded-lg w-full py-2 px-3"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="mr-2 px-4 py-2 bg-secondary text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostMentorshipForm;
