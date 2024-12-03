import Image from "next/image";
import logo from "@/public/images/rich-sea-logo.png";
import vector from "@/public/images/Vector.png";
import profile from "@/public/images/profile.png";
import { FiPlus } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full left-0 z-50">
      {/* Logo Section and Search Box */}
      <div className="flex gap-x-[100px]">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="RichSea Logo"
            priority
            quality={100}
            width={200} // Defined width
            height={40} // Defined height
            style={{ height: "auto" }} // Ensures aspect ratio is maintained
            className="object-contain"
          />
        </div>

        {/* Search Box */}
        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-12 py-2 text-sm text-gray-700 bg-rich-sea-gray rounded-full focus:outline-none focus:ring-2 focus:ring-rich-sea-sky"
          />
          <div className="absolute top-[-3px] left-4 flex items-center justify-center h-full text-gray-500">
            <AiOutlineSearch size={22}/>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-4 font-raleway text-sm font-bold leading-[22px]">
        <button className="flex items-center px-2 py-2  bg-rich-sea-yellow rounded-lg hover:bg-yellow-600 text-white">
          <FiPlus size={18} /> Create
        </button>
        <div className="flex items-center px-3 py-2 text-sm font-medium border border-rich-sea-yellow rounded-lg">
          <Image
            src={vector}
            alt="Rich Icon"
            width={16}
            height={16}
            className="mr-2"
          />
          <div className="flex gap-2 font-raleway text-base font-bold">
            <span className="">20,000</span>
            <span className="text-rich-sea-sky">$RICH</span>
          </div>
        </div>
        <div className="w-[38px] h-[38px] overflow-hidden">
          <Image
            src={profile}
            alt="User Avatar"
            width={38}
            height={38}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
