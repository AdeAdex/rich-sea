"use client";

import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-red-600">500</h1>
        <h2 className="text-2xl md:text-3xl mt-4 text-gray-800">
          Oops! Something went wrong.
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          We&apos;re working to fix this issue. Please try again later.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
