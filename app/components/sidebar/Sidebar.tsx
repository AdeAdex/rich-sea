"use client";

import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  const sidebarItems = [
    { label: "News Feeds", icon: <CiSquarePlus size={24} /> },
    { label: "Tasks", icon: <BsFillRocketTakeoffFill size={24} /> },
    { label: "Voting", icon: <MdBarChart size={24} /> },
    { label: "Stacking", icon: <RiSettings5Fill size={24} /> },
    { label: "Log Out", icon: <FaSignOutAlt size={24} /> },
  ];

  return (
    <>
      {/* Sidebar for desktop */}
      {/* <div
        className={`hidden md:block h-screen transition-width duration-300 bg-white shadow-lg border-r-2 border-gray-200 py-8 px-4 ${
          isCollapsed ? "w-24" : "w-64"
        }`}
      > */}
        <div
        className={`fixed left-0 hidden md:block h-screen transition-width duration-300 bg-white shadow-lg border-r-2 border-gray-200 py-8 px-4 w-64`}
      >
        {/* <div className="flex items-center justify-end p-4">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
          </button>
        </div> */}

        <ul className="space-y-4">
          {sidebarItems.map((item) => (
            <li
              key={item.label}
              className={`flex items-center gap-4 hover:bg-rich-sea-sky-hover hover:rounded-xl cursor-pointer text-[15px] font-raleway p-4 ${
                activeItem === item.label
                  ? "bg-rich-sea-sky rounded-xl text-white font-bold"
                  : ""
              } ${item.label === "Log Out" ? "font-[500]" : "font-[800]"}`}
              onClick={() => setActiveItem(item.label)}
            >
              {item.icon}
              {/* {!isCollapsed && */} <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar for mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-10 md:hidden bg-white border-t-2 border-gray-200 shadow-lg flex justify-around py-2">
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center cursor-pointer ${
              activeItem === item.label
                ? "text-rich-sea-sky font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveItem(item.label)}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
