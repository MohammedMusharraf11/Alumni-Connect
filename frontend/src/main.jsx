import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SocketProvider } from './context/SocketContext.jsx'; // Import SocketProvider

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
    
      <SocketProvider userId={localStorage.getItem('userId')}>
        <App />
      </SocketProvider>
    </BrowserRouter>
  </StrictMode>,
);
