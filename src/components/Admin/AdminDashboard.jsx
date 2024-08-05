// src/components/Admin/AdminDashboard.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [tokenMatch, setTokenMatch] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        navigate('/');
      }

      axios.post('http://localhost:3000/admin/verifyToken', { token })
        .then(response => {
          if (token === response.data.token) {
            setLoading(false);
            setTokenMatch(true);
          } else {
            setLoading(true);
            setTokenMatch(false);
          }
        })
        .catch(error => {
          console.error('Error verifying token:', error);
          setLoading(false);
          setTokenMatch(false);
          navigate('/');
        });
    };

    const timeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
        navigate('/');
      }
    }, 3000); 

    checkToken();
    return () => {
      clearTimeout(timeout);
    };

  }, [navigate, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tokenMatch) {
    navigate('/');
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
