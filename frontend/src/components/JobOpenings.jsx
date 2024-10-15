// src/components/JobOpenings.jsx
import React, { useState } from 'react';

const JobOpeningsForm = ({ onCancel }) => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit job details
    console.log('Job opening submitted:', jobDetails);
    onCancel(); // Close the form after submission
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobDetails.title}
            onChange={handleChange}
            required
            className="border rounded-lg w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={jobDetails.company}
            onChange={handleChange}
            required
            className="border rounded-lg w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            required
            className="border rounded-lg w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={jobDetails.description}
            onChange={handleChange}
            required
            className="border rounded-lg w-full py-2 px-3"
          />
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

export default JobOpeningsForm;
