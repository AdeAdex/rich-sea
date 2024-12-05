import React from "react";
import image from "@/public/images/login.png";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import logo from "@/public/images/logo-2.png";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Left Section */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <div className="font-bold flex items-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="RichSea Logo"
                  priority
                  quality={100}
                  //   width={200} // Default width for larger screens
                  //   height={30} // Defined height

                  className="object-contain w-[80px] md:w-[100px]" // Updates width for medium and larger screens
                />
              </Link>
            </div>
          </div>
          {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-4 text-rich-sea-blue">
            Sign in to RichSea
          </h1>
          {/* Wallet Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg mb-4 flex justify-center items-center text-sm font-[700]">
            Connect your wallet
          </button>
          {/* Google Sign-in Button */}
          <button className="w-full border border-gray-300 py-2 rounded-lg mb-2 flex justify-center items-center text-sm font-[700]">
            <FcGoogle />
            <span className="ml-2">Sign in with Google</span>
          </button>
          {/* Separator */}
          <div className="text-center text-gray-500 my-4 text-sm font-[700]">Or</div>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-red-100"
          />
          {/* Sign-in Button */}
          <button className="w-full bg-rich-sea-sky text-white py-2 rounded-lg mb-4 hover:bg-rich-sea-sky-hover">
            Sign In
          </button>
          
          {/* Forgot Password */}
          <div className="flex justify-between mb-6">
          <span className="text-red-500 text-sm mb-4">
            Your password is incorrect!
          </span>

            <a href="#" className="text-blue-500 text-sm">
              Forgot Password?
            </a>
            {/* Error Message */}
          </div>
          {/* Sign-up Link */}
          <p className="text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign Up here
            </a>
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

export default LoginPage;
