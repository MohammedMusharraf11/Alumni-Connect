const { createContext, useState, useEffect, useContext } = require("react");
const { useAuthContext } = require("./AuthContext");
const io = require("socket.io-client");

const SocketContext = createContext();

const useSocketContext = () => {
    return useContext(SocketContext);
};

const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser  } = useAuthContext();

    useEffect(() => {
        if (authUser ) {
            const socket = io("https://chat-app-yt.onrender.com", {
                query: {
                    userId: authUser ._id,
                },
            });

            setSocket(socket);

            // Listen for online users
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser ]);

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};

// Exporting the context and provider using CommonJS syntax
module.exports = {
    SocketContext,
    useSocketContext,
    SocketContextProvider
};