import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white pt-12 px-6">
      <div className="  flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Black Betalz</Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          <Link to="/markets" className="hover:text-gray-400">Markets</Link>
          <Link to="/portfolio" className="hover:text-gray-400">Portfolio</Link>
          <Link to="/reports" className="hover:text-gray-400">Reports</Link>
          <Link to="/settings" className="hover:text-gray-400">Settings</Link>
        </div>
      </div>
      <hr className="border-gray-700 mt-4 pb-2" />
    </nav>
  );
};

export default NavBar;
