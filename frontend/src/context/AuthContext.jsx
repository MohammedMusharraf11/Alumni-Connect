const { createContext, useContext, useState } = require("react");

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
    const [authUser , setAuthUser ] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    return <AuthContext.Provider value={{ authUser , setAuthUser  }}>{children}</AuthContext.Provider>;
};

// Exporting the context and provider using CommonJS syntax
module.exports = {
    AuthContext,
    useAuthContext,
    AuthContextProvider
};