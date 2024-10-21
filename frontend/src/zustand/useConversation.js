const { create } = require("zustand"); // Use CommonJS require for zustand

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

module.exports = useConversation; // Use CommonJS export
