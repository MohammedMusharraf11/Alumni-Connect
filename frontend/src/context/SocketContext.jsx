import React, { createContext, useContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

// Create a context for socket
export const SocketContext = createContext();

// SocketProvider component which will wrap the app and provide the socket connection
export const SocketProvider = ({ children, userId }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!userId) {
      console.error('UserId is not available!');
      return; // Don't proceed if userId is missing
    }

    // Initialize socket connection
    const newSocket = io('http://localhost:8080', {
      withCredentials: true, // Optional: If you're using cookies or authentication
    });

    // Register the user
    newSocket.emit('registerUser', userId);

    // Set socket to state
    setSocket(newSocket);

    // Cleanup socket connection on unmount or userId change
    return () => {
      newSocket.disconnect();
      setSocket(null);
    };
  }, [userId]); // Re-run when userId changes

  return (
    <SocketContext.Provider value={{ userId, socket }}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook to access the socket context
export const useSocketContext = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocketContext must be used within a SocketProvider');
  }

  return context;
};
