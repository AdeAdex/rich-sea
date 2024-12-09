// "use client";

// import React, { useState } from "react";
// import Feed from "./components/home/feed/Feed";
// import Task from "./components/home/task/Task";
// import Sidebar from "./components/sidebar/Sidebar";
// import Voting from "./components/home/voting/Voting";
// import Staking from "./components/home/staking/Staking";
// import SingleTask from "./components/home/task/SingleTask";
// import { useSearchParams } from "next/navigation";

// export default function Home() {
//   const [activeItem, setActiveItem] = useState<string>("News Feeds");
//   const searchParams = useSearchParams();
//   const taskTitle = searchParams.get("task");

//   return (
//     <div className="w-full flex mt-[80px] bg-gray-100 min-h-screen ">
//       {/* Pass the active item and setActiveItem function to Sidebar */}
//       <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

//       {/* Conditionally render content based on the active item */}
//       <main className="flex-1 py-8 px-4 md:px-8 md:ml-64">
//         {activeItem === "News Feeds" && <Feed />}
//         {/* {activeItem === "Tasks" && <Task />} */}
//         {activeItem === "Tasks" && !taskTitle && <Task />}
//         {activeItem === "Tasks" && taskTitle && <SingleTask />}
//         {activeItem === "Voting" && <Voting />}
//         {activeItem === "Staking" && <Staking />}
//       </main>
//     </div>
//   );
// }





"use client";

import React, { useState, Suspense } from "react";
import Feed from "./components/home/feed/Feed";
import Task from "./components/home/task/Task";
import Sidebar from "./components/sidebar/Sidebar";
import Voting from "./components/home/voting/Voting";
import Staking from "./components/home/staking/Staking";
import SingleTask from "./components/home/task/SingleTask";
import { useSearchParams } from "next/navigation";

function TaskHandler({ activeItem }: { activeItem: string }) {
  const searchParams = useSearchParams();
  const taskTitle = searchParams.get("task");

  if (activeItem !== "Tasks") return null;

  return taskTitle ? <SingleTask /> : <Task />;
}

export default function Home() {
  const [activeItem, setActiveItem] = useState<string>("News Feeds");

  return (
    <div className="w-full flex mt-[80px] bg-gray-100 min-h-screen">
      {/* Sidebar Component */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Main Content */}
      <main className="flex-1 py-8 px-4 md:px-8 md:ml-64">
        {activeItem === "News Feeds" && <Feed />}
        {activeItem === "Voting" && <Voting />}
        {activeItem === "Staking" && <Staking />}
        
        {/* Task Handler wrapped in Suspense */}
        <Suspense fallback={<div>Loading Tasks...</div>}>
          <TaskHandler activeItem={activeItem} />
        </Suspense>
      </main>
    </div>
  );
}
