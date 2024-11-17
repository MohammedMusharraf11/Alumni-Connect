import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Alumni from './Alumni';  // Import your Alumni component
import Students from './Students';  // Import your Students component

function AdminPanel() {
    const [currentView, setCurrentView] = useState('students');  // Default to 'students'

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar setCurrentView={setCurrentView} currentView={currentView} />

            {/* Main Content */}
            <main className="flex-1 p-5">
                {currentView === 'students' && <Students />}
                {currentView === 'alumni' && <Alumni />}
                {currentView === 'settings' && <div>Settings Content</div>}
                {currentView === 'logout' && <div>Logout Content</div>}
            </main>
        </div>
    );
}

export default AdminPanel;
