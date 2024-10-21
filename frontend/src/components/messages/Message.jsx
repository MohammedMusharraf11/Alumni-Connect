// const React = require('react'); // Import React
// const { useAuthContext } = require('../../context/AuthContext'); // Import the auth context
// const { extractTime } = require('../../utils/extractTime'); // Import the time extraction utility
// const useConversation = require('../../zustand/useConversation'); // Import the conversation hook

// const Message = ({ message }) => {
// 	const { authUser } = useAuthContext(); // Get the authenticated user context
// 	const { selectedConversation } = useConversation(); // Get the currently selected conversation
// 	const fromMe = message.senderId === authUser._id; // Check if the message is from the user
// 	const formattedTime = extractTime(message.createdAt); // Format the message time
// 	const chatClassName = fromMe ? 'chat-end' : 'chat-start'; // Determine chat bubble position
// 	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic; // Choose profile picture based on sender
// 	const bubbleBgColor = fromMe ? 'bg-blue-500' : ''; // Background color for chat bubble
// 	const shakeClass = message.shouldShake ? 'shake' : ''; // Optional shake class

// 	return (
// 		<div className={`chat ${chatClassName}`}>
// 			<div className='chat-image avatar'>
// 				<div className='w-10 rounded-full'>
// 					<img alt='User avatar' src={profilePic} />
// 				</div>
// 			</div>
// 			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
// 				{message.message} {/* Display the message text */}
// 			</div>
// 			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
// 				{formattedTime} {/* Display the formatted time */}
// 			</div>
// 		</div>
// 	);
// };

// module.exports = Message; // Export the Message component


// Message.jsx

// import React from 'react';
// import { useAuthContext } from '../../context/AuthContext';
// import { extractTime } from '../../utils/extractTime';
// import useConversation from '../../zustand/useConversation';

// const Message = ({ message }) => {
// 	const { authUser } = useAuthContext();
// 	const { selectedConversation } = useConversation();
// 	const fromMe = message.senderId === authUser._id;
// 	const formattedTime = extractTime(message.createdAt);
// 	const chatClassName = fromMe ? 'chat-end' : 'chat-start';
// 	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
// 	const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
// 	const shakeClass = message.shouldShake ? 'shake' : '';

// 	return (
// 		<div className={`chat ${chatClassName}`}>
// 			<div className='chat-image avatar'>
// 				<div className='w-10 rounded-full'>
// 					<img alt='User avatar' src={profilePic} />
// 				</div>
// 			</div>
// 			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
// 				{message.message}
// 			</div>
// 			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
// 				{formattedTime}
// 			</div>
// 		</div>
// 	);
// };

//export default Message;  // Use ES6 export syntax

import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='User avatar' src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${fromMe ? 'bg-orange-500' : 'bg-lightgrey'}`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

