"use client";

import React from "react";
import Task from "./Task";
import SingleTask from "./SingleTask";
import { useSearchParams } from "next/navigation";

const TaskHandler: React.FC = () => {
  const searchParams = useSearchParams();
  const taskTitle = searchParams.get("task");

  return taskTitle ? <SingleTask /> : <Task />;
};

export default TaskHandler;
