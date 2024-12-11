"use client";

import React, { useEffect, useMemo } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import Image from "next/image";
import profile from "@/public/images/profile.png";
import { MdLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Menu, rem } from "@mantine/core";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };
  const router = useRouter();
  const pathname = usePathname();

  const sidebarItems = useMemo(
    () => [
      { label: "News Feeds", icon: <CiSquarePlus size={24} /> },
      { label: "Tasks", icon: <BsFillRocketTakeoffFill size={24} /> },
      { label: "Voting", icon: <MdBarChart size={24} /> },
      { label: "Staking", icon: <RiSettings5Fill size={24} /> },
      { label: "Log Out", icon: <FaSignOutAlt size={24} /> },
    ],
    []
  );

  const handleTabClick = (tabLabel: string) => {
    setActiveItem(tabLabel);

    if (tabLabel !== "Log Out") {
      const queryString = new URLSearchParams({ tab: tabLabel }).toString();
      router.push(`${pathname}?${queryString}`); 
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setActiveItem(tabFromUrl);
    } else {
      // Default to the first tab if no "tab" query parameter exists
      setActiveItem(sidebarItems[0].label);
    }
  }, [pathname, setActiveItem, sidebarItems]);
  
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
              onClick={() => handleTabClick(item.label)}
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
            className={`flex flex-col items-center cursor-pointer my-auto ${
              activeItem === item.label
                ? "text-rich-sea-sky font-bold"
                : "text-gray-500"
            }`}
            onClick={() => {
              if (item.label !== "Log Out") {
                handleTabClick(item.label);
              }
            }}
          >
            {item.label === "Log Out" ? (
              <div className="w-[35px] h-[35px] overflow-hidden">
                <Menu>
                  <Menu.Target>
                    <Image
                      src={profile}
                      alt="User Avatar"
                      width={38}
                      height={38}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      component={Link}
                      href="/signin"
                      leftSection={
                        <MdLogin style={{ width: rem(14), height: rem(14) }} />
                      }
                    >
                      Login
                    </Menu.Item>
                    <Menu.Item
                      component={Link}
                      href="/signin"
                      leftSection={
                        <FaUser style={{ width: rem(14), height: rem(14) }} />
                      }
                    >
                      Profile
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            ) : (
              item.icon
            )}
            {/* Optionally show the label for other items */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
