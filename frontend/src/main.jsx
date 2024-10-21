//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { BrowserRouter } from "react-router-dom";

//import { AuthContextProvider } from "./context/AuthContext.jsx";
//import { SocketContextProvider } from "./context/SocketContext.jsx";


createRoot(document.getElementById('root')).render(
  
		 
<BrowserRouter>
	
			<App />
		
</BrowserRouter>

	
)

{/* <React.StrictMode>
<BrowserRouter>
	<AuthContextProvider>
		<SocketContextProvider>
			<App />
		</SocketContextProvider>
	</AuthContextProvider>
</BrowserRouter>
</React.StrictMode> */}