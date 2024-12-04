"use client";

import React, { useState } from "react";

const NewsFeed = () => {
  const buttons = [
    { id: "recent", label: "Recent" },
    { id: "following", label: "Following" },
    { id: "trending", label: "Trending" },
  ];

  const [activeButton, setActiveButton] = useState("recent");

  const handleClick = (id: string) => {
    setActiveButton(id);
    console.log(`${id} button clicked!`); // Example action
  };



  return (
    <div className="px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
      <h2 className="text-2xl font-bold mb-4 lg:mb-0">News Feed</h2>
      <div className="flex space-x-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleClick(button.id)}
            className={`px-4 rounded-xl font-medium ${
              activeButton === button.id
                ? "bg-black text-white"
                : "bg-white text-[#888888] border border-gray-300"
            } hover:bg-rich-sea-sky hover:text-white transition duration-300`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
