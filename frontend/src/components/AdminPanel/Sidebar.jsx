import React from 'react';

function Sidebar({ setCurrentView, currentView }) {
    const menuItems = [
        { label: 'Students', key: 'students' },
        { label: 'Alumni', key: 'alumni' },
        { label: 'Settings', key: 'settings' },
        { label: 'Logout', key: 'logout' },
    ];

    return (
        <div className="w-1/4 bg-secondary text-white min-h-screen">
            <h2 className="text-2xl font-bold text-center py-4">Admin Panel</h2>
            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item.key}
                        className={`py-3 px-6 cursor-pointer ${
                            currentView === item.key ? 'bg-primary' : ''
                        }`}
                        onClick={() => setCurrentView(item.key)} // Change current view
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
