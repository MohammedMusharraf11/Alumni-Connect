import React, { useState, useEffect } from "react";
import axios from "axios";
import { handleError, handleSuccess } from "../utils/utils";

const EditProfilePopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    graduationYear: "",
    course: "",
    usn: "",
    fieldOfStudy: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const userId = localStorage.getItem("userId"); // Get userId from localStorage

  // Fetch the user profile data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
        setFormData({
          fullName: response.data.fullName || "",
          graduationYear: response.data.graduationYear || "",
          course: response.data.course || "",
          usn: response.data.usn || "",
          fieldOfStudy: response.data.fieldOfStudy || "",
        });
        setIsLoading(false);
      } catch (error) {
        setError("Failed to load profile details.");
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      // Make the PUT request to update the user profile
      await axios.put(`http://localhost:8080/api/user/${userId}`, formData);
      setError(null);
  
      // Save only the updated fullName (as a string) in localStorage
      localStorage.setItem("loggedInUser", formData.fullName);
    
      handleSuccess("Profile updated successfully!");
      onClose(); // Close the popup
    } catch (error) {
      handleError("Failed to update profile.");
    }
  };
  
  
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px] h-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <strong className="font-bold">Error!</strong> <span>{error}</span>
              </div>
            )}
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>

            {/* Form Fields in Two Columns */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Graduation Year
                </label>
                <input
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">USN</label>
                <input
                  type="text"
                  name="usn"
                  value={formData.usn}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditProfilePopup;
