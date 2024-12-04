"use client";

import React, { useState } from "react";
import Feed from "./components/home/feed/Feed";
import Task from "./components/home/task/Task";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  const [activeItem, setActiveItem] = useState<string>("News Feeds");
  return (
    <div className="flex mt-[80px] bg-gray-100 min-h-screen ">
      {/* Pass the active item and setActiveItem function to Sidebar */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Conditionally render content based on the active item */}
      <main className="flex-1 py-8 px-8">
        {activeItem === "News Feeds" && <Feed />}
        {activeItem === "Tasks" && <Task />}
      </main>
    </div>
  );
}
