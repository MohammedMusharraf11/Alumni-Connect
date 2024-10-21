const React = require('react'); // Import React
const { useState } = require('react'); // Import useState
const { BsSend } = require('react-icons/bs'); // Import the send icon
const useSendMessage = require('../../hooks/useSendMessage'); // Import the send message hook

const MessageInput = () => {
	const [message, setMessage] = useState(""); // State for the message input
	const { loading, sendMessage } = useSendMessage(); // Hook for sending messages

	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent the default form submission
		if (!message) return; // Don't send an empty message
		await sendMessage(message); // Send the message
		setMessage(""); // Clear the input
	};

	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message} // Bind input value to state
					onChange={(e) => setMessage(e.target.value)} // Update state on input change
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />} {/* Show loading spinner or send icon */}
				</button>
			</div>
		</form>
	);
};

module.exports = MessageInput; // Export the MessageInput component
