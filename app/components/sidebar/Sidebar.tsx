'use client';

import React, { useState } from "react";
import { FaSignOutAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("News Feeds");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Sidebar items array
  const sidebarItems = [
    { label: "News Feeds", icon: <CiSquarePlus size={24} /> },
    { label: "Tasks", icon: <BsFillRocketTakeoffFill size={24} /> },
    { label: "Voting", icon: <MdBarChart size={24} /> },
    { label: "Stacking", icon: <RiSettings5Fill size={24} /> },
    { label: "Log Out", icon: <FaSignOutAlt size={24} /> },
  ];

  return (
    <div
      className={`hidden md:block h-screen transition-width duration-300 mt-[70px] px-6 ${
        isCollapsed ? "w-24" : "w-64"
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
        {sidebarItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center gap-4 hover:bg-gray-200 hover:rounded-xl cursor-pointer text-[15px] font-raleway ${
              activeItem === item.label ? "bg-rich-sea-sky rounded-xl text-white font-bold" : ""
            } ${!isCollapsed ? 'p-4' : 'p-2 justify-center'} ${item.label === "Log Out" ? 'font-[500]' : 'font-[800]'}`}
            onClick={() => setActiveItem(item.label)}
          >
            {item.icon}
            {!isCollapsed && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
