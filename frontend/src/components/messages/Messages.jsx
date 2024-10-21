const React = require('react');
const { useEffect, useRef } = require('react');
const useGetMessages = require('../../hooks/useGetMessages');
const MessageSkeleton = require('../skeletons/MessageSkeleton');
const Message = require('./Message');
const useListenMessages = require('../../hooks/useListenMessages');

const Messages = () => {
    const { messages, loading } = useGetMessages(); // Get messages and loading state
    useListenMessages(); // Listen for incoming messages
    const lastMessageRef = useRef(); // Create a ref for the last message

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to the last message
        }, 100);
    }, [messages]);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length > 0 && messages.map((message, index) => (
                <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
                    <Message message={message} />
                </div>
            ))}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} {/* Show skeletons while loading */}
            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a message to start the conversation</p> // Message when there are no messages
            )}
        </div>
    );
};

module.exports = Messages; // Export the Messages component
