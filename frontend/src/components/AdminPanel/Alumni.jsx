import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Alumni = () => {
  const [alumniList, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the alumni data
  const fetchAlumni = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/alumni');
      
      // Log the full response to check the structure
      console.log('API Response:', response.data);
      
      // Check if the alumni data exists and is an array
      const alumniData = response.data && Array.isArray(response.data.alumni) ? response.data.alumni : [];
      
      // If alumniData is an array, filter unverified alumni
      if (alumniData.length > 0) {
        const unverifiedAlumni = alumniData.filter(alum => !alum.verified);
        setAlumni(unverifiedAlumni);
      } else {
        console.error('No alumni data or alumni data is not an array');
        setAlumni([]); // Handle case where data is missing or not an array
      }
      
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching alumni:', error);
      setAlumni([]); // Handle error by resetting state
      setLoading(false); // Set loading to false even in case of an error
    }
  };

  useEffect(() => {
    fetchAlumni();
  }, []);

  // Function to handle verification
  const handleVerify = async (id) => {
    try {
      await axios.put(`http://localhost:8080/admin/alumni/${id}/verify`);
      // Re-fetch the alumni list after verification
      fetchAlumni();
    } catch (error) {
      console.error('Error verifying alumni:', error);
    }
  };

  if (loading) {
    return <p>Loading alumni...</p>;
  }

  return (
    <div className="alumni-list">
      {alumniList.length === 0 ? (
        <p>No unverified alumni found.</p>
      ) : (
        alumniList.map((alumni) => (
          <div key={alumni._id} className="alumni-card p-4 border rounded mb-4">
            <div className="flex items-center">
              <img
                src={alumni.profilePhoto}
                alt={alumni.fullName}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">{alumni.fullName}</h3>
                <p className="text-sm">{alumni.graduationYear}</p>
                <a
                  href={alumni.degreeCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm"
                >
                  View Degree Certificate
                </a>
              </div>
            </div>
            <button
              onClick={() => handleVerify(alumni._id)}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Verify
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Alumni;
