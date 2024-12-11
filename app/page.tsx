"use client";

import React, { Suspense, useState } from "react";
import Feed from "./components/home/feed/Feed";
import Task from "./components/home/task/Task";
import Sidebar from "./components/sidebar/Sidebar";
import Voting from "./components/home/voting/Voting";
import Staking from "./components/home/staking/Staking";
import SingleTask from "./components/home/task/SingleTask";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [activeItem, setActiveItem] = useState<string>("News Feeds");
  const searchParams = useSearchParams();
  const taskTitle = searchParams.get("task");

  return (
    <div className="w-full flex mt-[80px] bg-gray-100 min-h-screen ">
      {/* Pass the active item and setActiveItem function to Sidebar */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Conditionally render content based on the active item */}
      <main className="flex-1 py-8 px-4 md:px-8 md:ml-64">
        <Suspense fallback={<div>Loading...</div>}>
          {activeItem === "News Feeds" && <Feed />}
          {activeItem === "Tasks" && !taskTitle && <Task />}
          {activeItem === "Tasks" && taskTitle && <SingleTask />}
          {activeItem === "Voting" && <Voting />}
          {activeItem === "Staking" && <Staking />}
        </Suspense>
      </main>
    </div>
  );
}
