import React from "react";
import image from "@/public/images/login.png";
import Image from "next/image";
import logo from "@/public/images/logo-2.png";
import Link from "next/link";

const ResetPasswordPage = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Left Section */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-2">
            <div className="font-bold flex items-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="RichSea Logo"
                  priority
                  quality={100}
                  className="object-contain w-[80px] md:w-[100px]"
                />
              </Link>
            </div>
          </div>
          {/* Title */}
          <h1 className="text-2xl text-center mb-4 text-rich-sea-blue font-raleway font-bold">
            Create Password
          </h1>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 font-raleway font-bold focus:outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 font-raleway font-bold focus:outline-none"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 font-raleway font-bold focus:outline-none"
          />

          {/* Next Button */}
          <button className="w-full bg-rich-sea-sky text-white py-2 rounded-lg mb-4 hover:bg-rich-sea-sky-hover font-raleway font-bold">
            Next
          </button>

          {/* Sign-up Link */}
          <p className="text-center text-gray-500 font-raleway font-bold text-sm">
            Already own an Account?{" "}
            <Link href="/signup" className="text-rich-sea-yellow text-sm">
              Log in now
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="flex-1 hidden lg:flex justify-center items-center relative"
        style={{
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
          overflow: "hidden", // Ensures image respects border radius
        }}
      >
        <Image
          src={image}
          alt="Login Illustration"
          fill // Replaces layout="fill"
          style={{
            objectFit: "cover", // Ensures the image covers the container
            objectPosition: "center", // Centers the image
          }}
        />
      </div>
    </div>
  );
};

export default ResetPasswordPage;