
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <ul className="space-y-6 p-6">
        <li>
          <Link to="/admin/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/students" className="block p-2 hover:bg-gray-700 rounded">Manage Students</Link>
        </li>
        <li>
          <Link to="/admin/announcements" className="block p-2 hover:bg-gray-700 rounded">Post Announcements</Link>
        </li>
        <li>
          <Link to="/admin/events" className="block p-2 hover:bg-gray-700 rounded">Manage Events</Link>
        </li>
        <li>
          <Link to="/admin/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
