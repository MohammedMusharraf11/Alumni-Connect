const { useEffect } = require('react'); // Use CommonJS require for React
const { useSocketContext } = require('../context/SocketContext'); // Use CommonJS require for the socket context
const useConversation = require('../zustand/useConversation'); // Use CommonJS require for the conversation hook

const notificationSound = require('../assets/sounds/notification.mp3'); // Use CommonJS require for the sound file

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);

};

module.exports = useListenMessages; // Use CommonJS export
