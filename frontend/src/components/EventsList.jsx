// components/AllEvents.jsx
import React from "react";
import { events } from "../utils/events"; // Import dummy event data

const EventsList = () => {
  // console.log(events); // Add this to check if the events array has data

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg m-4">
      <h2 className="text-2xl font-bold mb-4 text-secondary">Upcoming Events</h2>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li
              key={event.id}
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
