"use client";

import { taskDatas } from "@/app/data/taskData";
import React, { useState } from "react";
import TaskCard from "./TaskCard";

const Task = () => {
  const buttons = [
    { id: "all", label: "All" },
    { id: "recent", label: "Recent" },
    { id: "completed", label: "Completed" },
  ];

  const [activeButton, setActiveButton] = useState("all");

  const handleClick = (id: string) => {
    setActiveButton(id);
    console.log(`${id} button clicked!`); // Example action
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between font-raleway mb-4">
        <h2 className="text-2xl font-bold text-center md:text-left mb-3 md:mb-0">Tasks</h2>
        <div className="flex space-x-4 justify-center md:justify-normal">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleClick(button.id)}
              className={`px-4 rounded-xl font-[800] text-[16px]   ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {taskDatas.map((task) => (
          <TaskCard
            key={task.id}
            icon={task.icon}
            image={task.image}
            title={task.title}
            subtitle={task.subtitle}
            reward={task.reward}
            participants={task.participants}
            endDate={task.endDate}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Task;
