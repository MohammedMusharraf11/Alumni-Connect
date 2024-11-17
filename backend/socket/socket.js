const socketIo = require('socket.io');

let io;
const userSocketMap = new Map();

/**
 * Initializes the Socket.IO server.
 * @param {Object} server - The HTTP server instance.
 */
const initSocket = (server) => {
  io = socketIo(server, {
    cors: {
      origin: 'http://localhost:5173', // Adjust to match your frontend origin
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Register user and map userId to socketId
    socket.on('registerUser', (userId) => {
      if (userId) {
        userSocketMap.set(userId, socket.id);
        console.log(`User ${userId} associated with socket ${socket.id}`);
      } else {
        console.log('User ID is required for registration.');
      }
    });

    // Handle message sending
    socket.on('sendMessage', (messageData) => {
      const { receiverId, senderId, message } = messageData;
      console.log(`Message from ${senderId} to ${receiverId}: ${message}`);

      // Ensure receiverId exists in the map
      const receiverSocketId = getReceiverSocketId(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit('receiveMessage', {
          senderId,
          message,
        });
        console.log(`Message sent to ${receiverId} via socket ${receiverSocketId}`);
      } else {
        console.log(`Receiver ${receiverId} is not connected.`);
      }
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
      for (const [userId, socketId] of userSocketMap.entries()) {
        if (socketId === socket.id) {
          userSocketMap.delete(userId);
          console.log(`User ${userId} disconnected.`);
          break;
        }
      }
    });
  });
};

/**
 * Helper function to get the socket ID of a user by their userId.
 * @param {string} receiverId - The userId of the receiver.
 * @returns {string|null} - The socket ID if found, otherwise null.
 */
const getReceiverSocketId = (receiverId) => {
  return userSocketMap.get(receiverId) || null;
};

module.exports = { initSocket, getReceiverSocketId };
