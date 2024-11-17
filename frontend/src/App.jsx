import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RoleSelection from './pages/RoleSelection';
import StudentReg from './pages/StudentReg';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import SupportUs from './components/SupportUs';
import AlumniReg from './pages/AlumniReg';
import Features from './components/Features';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { SocketProvider } from './context/SocketContext'; // Correct import

function App() {
  const authUserId = localStorage.getItem('userId'); // Retrieve the userId from localStorage

  return (
    <div className="font-outfit overflow-hidden">
      <ToastContainer />
      {/* Wrap the app with SocketProvider and pass the userId */}
      <SocketProvider userId={authUserId}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/features" element={<Features />} />
            <Route path="/roleselection" element={<RoleSelection />} />
            <Route path="/student-register" element={<StudentReg />} />
            <Route path="/alumni-register" element={<AlumniReg />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/supportus" element={<SupportUs />} />
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
