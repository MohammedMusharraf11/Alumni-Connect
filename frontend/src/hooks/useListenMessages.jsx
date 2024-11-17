import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";

const useListenMessages = ({ onMessageReceived } = {}) => {
  const { socket } = useSocketContext();

  useEffect(() => {
    if (!socket) return;
  
    const handleMessage = (message) => {
      if (onMessageReceived) {
        onMessageReceived(message);
      }
    };
  
    socket.on("message", handleMessage);
  
    // Cleanup the event listener on unmount
    return () => {
      socket.off("message", handleMessage);
    };
  }, [socket, onMessageReceived]);
  
};

export default useListenMessages;
