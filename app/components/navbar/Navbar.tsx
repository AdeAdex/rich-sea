"use client";

import Image from "next/image";
import logo from "@/public/images/rich-sea-logo.png";
import profile from "@/public/images/profile.png";
import { FiPlus } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import whiteVector from "@/public/images/white-vector.png";
import yellowVector from "@/public/images/yellow-vector.png";
import { MdLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Menu, rem } from "@mantine/core";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-md fixed w-full left-0 z-50">
      {/* Logo Section and Search Box */}
      <div className="flex gap-x-[100px]">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={logo}
              alt="RichSea Logo"
              priority
              quality={100}
              //   width={200} // Default width for larger screens
              //   height={30} // Defined height

              className="object-contain w-[150px] md:w-[200px]" // Updates width for medium and larger screens
            />
          </Link>
        </div>

        {/* Search Box */}
        <div className="relative w-3/4 hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-12 py-2 text-sm text-gray-700 bg-rich-sea-gray rounded-full focus:outline-none focus:ring-2 focus:ring-rich-sea-sky"
          />
          <div className="absolute top-0 left-4 flex items-center justify-center h-full text-gray-500">
            <AiOutlineSearch size={22} />
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-4 font-raleway text-sm font-bold leading-[22px]">
        <button className="flex items-center px-2 py-2  bg-rich-sea-yellow rounded-lg hover:bg-yellow-600 text-white hidden md:flex">
          <FiPlus size={18} /> Create
        </button>
        <div className="flex items-center ps-3 md:px-3 py-0 md:py-2 text-sm font-medium border border-rich-sea-yellow rounded-lg gap-3 md:gap-0">
          <Image
            src={yellowVector}
            alt="Rich Icon"
            width={16}
            height={16}
            className="mr-2 hidden md:flex"
          />
          <Image
            src={whiteVector}
            alt="Rich Icon"
            width={16}
            height={16}
            className="order-2 md:order-1 bg-rich-sea-yellow py-1 w-8 text-white md:hidden rounded-lg"
          />
          <div className="flex gap-2 font-raleway text-base font-bold order-1 md:order-2">
            <span className="">20,000</span>
            <span className="text-rich-sea-sky hidden md:flex">$RICH</span>
          </div>
        </div>
        <div className="w-[38px] h-[38px] overflow-hidden hidden md:flex">
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
      </div>
    </nav>
  );
};

export default Navbar;
