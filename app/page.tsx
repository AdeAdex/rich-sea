"use client";

import React, { useState } from "react";
import Feed from "./components/home/feed/Feed";
import Task from "./components/home/task/Task";
import Sidebar from "./components/sidebar/Sidebar";
import Voting from "./components/home/voting/Voting";

export default function Home() {
  const [activeItem, setActiveItem] = useState<string>("News Feeds");
  return (
    <div className="w-full flex mt-[80px] bg-gray-100 min-h-screen ">
      {/* Pass the active item and setActiveItem function to Sidebar */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Conditionally render content based on the active item */}
      <main className="flex-1 py-8 px-4 md:px-8 md:ml-64">
        {activeItem === "News Feeds" && <Feed />}
        {activeItem === "Tasks" && <Task />}
        {activeItem === "Voting" && <Voting />}
      </main>
    </div>
  );
}
