// Messages.jsx
import React from 'react';

const Messages = ({ conversations }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-h-80 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Conversations</h2>
      <div>
        {conversations.length > 0 ? (
          conversations.map((conversation, index) => (
            <div key={index} className="border-b py-2">
              <p className="font-bold">{conversation.sender}</p>
              <p className="text-gray-600">{conversation.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No conversations available.</p>
        )}
      </div>
    </div>
  );
};

export default Messages; // Make sure this line exists
