import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-radiance-red">404</h1>
        <h2 className="text-2xl md:text-3xl mt-4 text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-radiance-gray text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
