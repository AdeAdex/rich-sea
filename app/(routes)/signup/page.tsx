'use client'

import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import logo from "@/public/images/logo-2.png";
import { signUpValidationSchema } from "@/app/validations/signupValidationSchema";

const SignUpPage = () => {
  // Form submission handler
  const handleSubmit = (values: { email: string }) => {
    console.log("Form Submitted with values:", values);
    // Add logic to handle the form submission
  };

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
                  className="object-contain w-[80px] md:w-[100px]"
                />
              </Link>
            </div>
          </div>
          {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-4 text-rich-sea-blue">
            Sign Up Now
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
          <div className="text-center text-gray-500 my-4 text-sm font-[700]">
            Or
          </div>
          {/* Formik Form */}
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                {/* Email Input */}
                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="etienodouglas@gmail.com"
                    className={`w-full border ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg px-4 py-2 mb-4 focus:outline-none`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm italic font-bold font-raleway mb-3"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-rich-sea-sky text-white py-2 rounded-lg mb-4 hover:bg-rich-sea-sky-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Next"}
                </button>
              </Form>
            )}
          </Formik>
          {/* Sign-up Link */}
          <p className="text-center text-gray-500 text-sm">
            Already own an Account?{" "}
            <Link
              href="/signin"
              className="text-rich-sea-yellow font-raleway font-bold text-sm"
            >
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
          overflow: "hidden",
          backgroundColor: "#FFF4F4",
        }}
      ></div>
    </div>
  );
};

export default SignUpPage;
