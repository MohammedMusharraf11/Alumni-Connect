import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import RoleSelection from './pages/RoleSelection'
import StudentReg from './pages/StudentReg'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard'
import SupportUs from './components/SupportUs'
function App() {
  return (
    <div className=''>

      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/roleselection' element={<RoleSelection />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/student-register' element={<StudentReg />} />
        <Route path='/supportus' element={<SupportUs />} />
        
        </Routes>

    </div>
  )
}

export default App
