import React, { useEffect, useState } from "react";
import axios from "axios";

const EventsList = () => {
  const [events, setEvents] = useState([]); // State to hold events data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch events from backend API
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/events");
        setEvents(response.data); // Update events state with fetched data
        setLoading(false);
      } catch (err) {
        setError("Error fetching events. Please try again later.");
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>; // Show loading message while fetching
  if (error) return <p className="text-red-500">{error}</p>; // Show error message if there’s an error

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg m-4">
      <h2 className="text-2xl font-bold mb-4 text-secondary">Upcoming Events</h2>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li
              key={event._id}
              className="mb-4 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-secondary">{event.description}</h3>
              <p className="text-gray-600 mb-2">
                <strong>Category:</strong> {event.category}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Date & Time:</strong> {new Date(event.dateTime).toLocaleString()}
              </p>
              <a
                href={event.link}
                className="text-orange-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Event
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No events available at the moment.</p>
      )}
    </div>
  );
};

export default EventsList;
