// src/pages/Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../hooks/useUserAuth';
import toast from 'react-hot-toast';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear auth tokens or session
    localStorage.removeItem('authToken'); // or whatever key you're using
    toast.success("You’ve been logged out successfully.");

    // Optional: clear user context or state
    // authContext.logout(); // if you have a logout method

    // Redirect to login page after short delay
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-xl font-semibold text-gray-700">
        Logging you out...
      </h2>
    </div>
  ); 
};

export default Logout;
