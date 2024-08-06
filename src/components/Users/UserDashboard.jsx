import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaBell, FaSignOutAlt, FaChartPie, FaCalendar, FaCog } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`lg:w-64 h-screen bg-gray-800 text-white fixed top-0 lg:relative z-40 lg:z-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-300 ease-in-out`}>
    <ul className="space-y-6 p-6 pt-32">
      <li>
        <Link to="/user/dashboard" className="block p-2 hover:bg-gray-700 rounded"><FaChartPie className="inline mr-2"/> Dashboard</Link>
      </li>
      <li>
        <Link to="/user/events" className="block p-2 hover:bg-gray-700 rounded"><FaCalendar className="inline mr-2"/> Events</Link>
      </li>
      <li>
        <Link to="/user/settings" className="block p-2 hover:bg-gray-700 rounded"><FaCog className="inline mr-2"/> Settings</Link>
      </li>
    </ul>
  </div>
);

const Navbar = ({ toggleSidebar }) => (
  <nav className="bg-gradient-to-r from-yellow-400 to-green-500 text-white flex justify-between items-center lg:px-10 lg:py-7 fixed top-0 w-screen z-50 p-2 shadow-lg">
    <button onClick={toggleSidebar} className="lg:hidden p-4 focus:outline-none">
      <FaBars className="text-2xl" />
    </button>
    <div>
      <Link to="/home" className="text-4xl font-bold text-white sm:text-xl" style={{ fontFamily: 'Sankofa Display, Sedgwick Ave Display' }}>BESTWAY COLLEGE</Link>
    </div>
    <div className="flex lg:gap-5">
      <Link to="/profile" className="p-2"><FaUser /></Link>
      <Link to="/notifications" className="p-2"><FaBell /></Link>
      <Link to="/logout" className="p-2"><FaSignOutAlt /></Link>
    </div>
  </nav>
);

const UserDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [tokenMatch, setTokenMatch] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        navigate('/');
      }

      axios.post('http://localhost:3000/user/verifyToken', { token })
        .then(response => {
          if (token === response.data.token) {
            setLoading(false);
            setTokenMatch(true);
          } else {
            setLoading(false);
            setTokenMatch(false);
            navigate('/');
          }
        })
        .catch(error => {
          console.error('Error verifying token:', error);
          setLoading(false);
          setTokenMatch(false);
          navigate('/');
        });
    };

    checkToken();
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tokenMatch) {
    return null;
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-grow lg:ml-10 p-6 mt-24">
          <h1 className="text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Sankofa Display, Sedgwick Ave Display' }}>User Dashboard</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <p>Check out the latest events happening in the college.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Announcements</h2>
              <p>Stay updated with the latest announcements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Profile</h2>
              <p>Manage your profile and settings.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
