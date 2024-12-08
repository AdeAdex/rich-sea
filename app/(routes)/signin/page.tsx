'use client'


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import image from "@/public/images/login.png";
import logo from "@/public/images/logo-2.png";
import { MdAccountBalanceWallet } from "react-icons/md";

const SignInPage = () => {
  // Form state
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });

  // Validation function
  const validate = () => {
    const formErrors = { email: "", password: "" };

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);
    return formErrors;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle input blur (for touched state)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.values(validationErrors).every((err) => err === "")) {
      console.log("Form submitted:", formData);
    }
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
          <h1 className="text-2xl font-bold text-center mb-4 text-rich-sea-blue font-raleway">
            Sign in to RichSea
          </h1>

          {/* Wallet Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg mb-4 flex justify-center items-center text-sm font-bold font-raleway">
            <MdAccountBalanceWallet size={22} /> Connect your wallet
          </button>

          {/* Google Sign-in Button */}
          <button className="w-full border border-gray-300 py-2 rounded-lg mb-2 flex justify-center items-center text-sm font-bold font-raleway">
            <FcGoogle size={22} />
            <span className="ml-2">Sign in with Google</span>
          </button>

          {/* Separator */}
          <div className="text-center text-gray-500 my-4 text-sm font-[700]">
            Or
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="etienodouglas@gmail.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 mb-4`}
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm italic font-bold font-raleway mb-3">
                {errors.email}
              </div>
            )}

            {/* Password Input */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${
                touched.password && errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 mb-4`}
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm italic font-bold font-raleway mb-3">
                {errors.password}
              </div>
            )}

            {/* Sign-in Button */}
            <button
              type="submit"
              className="w-full bg-rich-sea-sky text-white py-2 rounded-lg mb-4 hover:bg-rich-sea-sky-hover font-bold font-raleway text-lg"
            >
              Sign In
            </button>
          </form>

          {/* Forgot Password */}
          <div className="flex mb-6 justify-end">
            <Link
              href="/forgot-password"
              className="font-raleway font-bold text-[#929292] text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign-up Link */}
          <p className="text-center text-gray-500 text-sm font-bold">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-rich-sea-yellow font-raleway font-bold"
            >
              Sign Up here
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
        }}
      >
        <Image
          src={image}
          alt="Login Illustration"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;









// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { FcGoogle } from "react-icons/fc";
// import image from "@/public/images/login.png";
// import logo from "@/public/images/logo-2.png";
// import { signInValidationSchema } from "@/app/validations/signinValidationSchemas";
// import { MdAccountBalanceWallet } from "react-icons/md";

// const SignInPage = () => {
//   return (
//     <div className="flex h-screen w-full">
//       {/* Left Section */}
//       <div className="flex-1 bg-white flex flex-col justify-center items-center p-8">
//         <div className="w-full max-w-md">
//           {/* Logo */}
//           <div className="flex justify-center mb-2">
//             <div className="font-bold flex items-center">
//               <Link href="/">
//                 <Image
//                   src={logo}
//                   alt="RichSea Logo"
//                   priority
//                   quality={100}
//                   className="object-contain w-[80px] md:w-[100px]"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Title */}
//           <h1 className="text-2xl font-bold text-center mb-4 text-rich-sea-blue font-raleway">
//             Sign in to RichSea
//           </h1>

//           {/* Wallet Button */}
//           <button className="w-full bg-black text-white py-2 rounded-lg mb-4 flex justify-center items-center text-sm font-bold font-raleway">
//             <MdAccountBalanceWallet size={22} /> Connect your wallet
//           </button>

//           {/* Google Sign-in Button */}
//           <button className="w-full border border-gray-300 py-2 rounded-lg mb-2 flex justify-center items-center text-sm font-bold font-raleway">
//             <FcGoogle size={22} />
//             <span className="ml-2">Sign in with Google</span>
//           </button>

//           {/* Separator */}
//           <div className="text-center text-gray-500 my-4 text-sm font-[700]">
//             Or
//           </div>

//           {/* Form */}
//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//             }}
//             validationSchema={signInValidationSchema}
//             onSubmit={(values) => {
//               // Handle form submission
//               console.log("Form submitted:", values);
//             }}
//           >
//             {({ touched, errors }) => (
//               <Form>
//                 {/* Email Input */}
//                 <Field
//                   type="email"
//                   name="email"
//                   placeholder="etienodouglas@gmail.com"
//                   className={`w-full border ${
//                     touched.email && errors.email
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   } rounded-lg px-4 py-2 mb-4`}
//                 />
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className="text-red-500 text-sm italic font-bold font-raleway"
//                 />

//                 {/* Password Input */}
//                 <Field
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className={`w-full border ${
//                     touched.password && errors.password
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   } rounded-lg px-4 py-2 mb-4`}
//                 />
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="text-red-500 text-sm italic font-bold font-raleway"
//                 />

//                 {/* Sign-in Button */}
//                 <button
//                   type="submit"
//                   className="w-full bg-rich-sea-sky text-white py-2 rounded-lg mb-4 hover:bg-rich-sea-sky-hover font-bold font-raleway text-lg"
//                 >
//                   Sign In
//                 </button>
//               </Form>
//             )}
//           </Formik>

//           {/* Forgot Password */}
//           <div className="flex justify-between mb-6">
//             <Link
//               href="/forgot-password"
//               className="font-raleway font-bold text-[#929292] text-sm"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Sign-up Link */}
//           <p className="text-center text-gray-500 text-sm font-bold">
//             Don&apos;t have an account?{" "}
//             <Link
//               href="/signup"
//               className="text-rich-sea-yellow font-raleway font-bold"
//             >
//               Sign Up here
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div
//         className="flex-1 hidden lg:flex justify-center items-center relative"
//         style={{
//           borderTopRightRadius: "30px",
//           borderBottomRightRadius: "30px",
//           overflow: "hidden",
//         }}
//       >
//         <Image
//           src={image}
//           alt="Login Illustration"
//           fill
//           style={{
//             objectFit: "cover",
//             objectPosition: "center",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default SignInPage;
