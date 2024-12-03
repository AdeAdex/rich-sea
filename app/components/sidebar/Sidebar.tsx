'use client'


import React, { useState } from "react";
import { FaHome, FaTasks, FaUser, FaSignOutAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`hidden md:block h-screen bg-gray-100 transition-width duration-300 mt-[70px] ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-end p-4">
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <ul className="space-y-4">
        <li className="flex items-center gap-4 p-4 hover:bg-gray-200">
          <FaHome size={24} />
          {!isCollapsed && <span>News Feeds</span>}
        </li>
        <li className="flex items-center gap-4 p-4 hover:bg-gray-200">
          <FaTasks size={24} />
          {!isCollapsed && <span>Tasks</span>}
        </li>
        <li className="flex items-center gap-4 p-4 hover:bg-gray-200">
          <FaUser size={24} />
          {!isCollapsed && <span>Profile</span>}
        </li>
        <li className="flex items-center gap-4 p-4 hover:bg-gray-200">
          <FaSignOutAlt size={24} />
          {!isCollapsed && <span>Log Out</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
