import React from 'react';
import { FaBars, FaBell, FaEnvelope, FaUserCircle, FaSearch } from 'react-icons/fa';
import { RiMessage2Fill } from "react-icons/ri";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-white h-16 px-4 shadow-sm">
      {/* Sidebar Toggle for Mobile */}
      <button className="sm:hidden" onClick={toggleSidebar}>
        <FaBars className="w-6 h-6 text-gray-800" />
      </button>

      {/* Title */}
      
      {/* Search Box */}
      <div className="flex flex-1 items-center justify-start mx-0"> {/* Remove mx-4 */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button className="absolute top-0 right-0 mt-2 mr-4 text-gray-500">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Additional Navbar Items */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <FaBell className="w-5 h-5" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <RiMessage2Fill className="w-5 h-5" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaUserCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
