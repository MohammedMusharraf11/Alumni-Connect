const Conversation = require("../Models/conversation");
const Message = require("../Models/message");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessage = async (req, res) => {
    try {
      const { message } = req.body;
      const { id: receiverId } = req.params;
  
      // Get senderId from middleware's attached user object
      const senderId = req.user._id;
  
      if (!senderId) {
        return res.status(401).json({ error: "Unauthorized access. SenderId missing." });
      }
  
      // Find or create conversation
      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });
  
      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }
  
      // Create a new message
      const newMessage = new Message({
        senderId,
        receiverId,
        message,
      });
  
      // Push message into conversation
      conversation.messages.push(newMessage._id);
  
      // Save both message and conversation
      const [savedConversation, savedMessage] = await Promise.all([conversation.save(), newMessage.save()]);
  
      if (!savedConversation || !savedMessage) {
        throw new Error("Error saving conversation or message.");
      }
  
      // Emit the message to the receiver via WebSocket
    //   const receiverSocketId = getReceiverSocketId(receiverId);
    //   if (receiverSocketId) {
    //     io.to(receiverSocketId).emit("message", newMessage);
    //   } else {
    //     console.log(`Receiver ${receiverId} not connected.`);
    //   }
  
      res.status(201).json(newMessage);
    } catch (error) {
      console.error("Error in sendMessage controller:", error.message);
      res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
  };
  

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;  // receiverId from params
    const senderId = req.user._id;  // senderId from authenticated user (set in middleware)

    // Find the conversation between sender and receiver
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");  // Populate messages in conversation

    if (!conversation) {
      return res.status(200).json([]);  // No messages if conversation not found
    }

    const messages = conversation.messages;

    res.status(200).json(messages);  // Return the messages
  } catch (error) {
    console.error("Error in getMessages controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { sendMessage, getMessages };
