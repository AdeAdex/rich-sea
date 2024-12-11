// "use client";

// import { useSearchParams } from "next/navigation";
// import { taskDatas } from "@/app/data/taskData";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import type { StaticImageData } from "next/image";
// import { Modal } from '@mantine/core';
// import { useDisclosure } from "@mantine/hooks";

// interface TaskItem {
//   name: string;
//   completed: boolean;
// }

// interface Task {
//   id: number;
//   icon: StaticImageData;
//   image: StaticImageData;
//   title: string;
//   subtitle: string;
//   reward: string;
//   participants: string;
//   endDate: string;
//   status: string;
//   tasks: TaskItem[];
// }

// const SingleTask = () => {
//   const searchParams = useSearchParams();
//   const title = searchParams.get("task"); // Use the correct query key
//   const [task, setTask] = useState<Task | null>(null);
//   const [modalTitle, setModalTitle] = useState("");
//   const [opened, { open, close }] = useDisclosure(false);

//   useEffect(() => {
//     if (title) {
//       const decodedTitle = decodeURIComponent(title);
//       const normalizedTitle = decodedTitle
//         .toLowerCase()
//         .replace(/\s+/g, "") // Remove spaces
//         .replace(/[^\w\s]/gi, ""); // Remove non-alphanumeric characters

//       const foundTask = taskDatas.find((task) => {
//         const taskNormalized = task.title
//           .toLowerCase()
//           .replace(/\s+/g, "") // Remove spaces
//           .replace(/[^\w\s]/gi, ""); // Remove non-alphanumeric characters

//         return taskNormalized === normalizedTitle;
//       });

//       setTask(foundTask || null);
//     }
//   }, [title]);

//   const handleTaskClick = (taskItemName: string) => {
//     setModalTitle(taskItemName);
//     open();
//   };

//   if (!task) return <div>Loading...</div>;

//   return (
//     <div className="flex flex-col font-raleway px-4">
//       <h2 className="text-2xl font-extrabold mb-2">{task.title}</h2>
//       <div className="py-4 bg-white px-2 rounded-xl">
//         <div className="relative w-full h-64 md:h-96 mb-3">
//           <Image
//             src={task.image}
//             alt={task.title}
//             fill
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//         <div className="flex w-full border-b-2 pb-4">
//           <div className="flex flex-col gap-1 border-r-2 w-1/3 justify-center items-center">
//             <span className="font-extrabold text-lg">Reward Zone</span>
//             <span className="font-medium">{task.reward}</span>
//           </div>
//           <div className="flex flex-col gap-1 border-r-2 w-1/3 justify-center items-center">
//             <span className="font-extrabold text-lg">Participants</span>
//             <span className="font-medium">{task.participants}</span>
//           </div>
//           <div className="flex flex-col gap-1 w-1/3 justify-center items-center">
//             <span className="font-extrabold text-lg">End Date</span>
//             <span className="font-medium">{task.endDate}</span>
//           </div>
//         </div>
//         <div className="px-4 md:px-10 py-6">
//           <h2 className="text-lg font-bold mb-5">
//             Tasks {task.tasks.filter((taskItem) => taskItem.completed).length}/
//             {task.tasks.length}
//           </h2>
//           <div className="space-y-3">
//             {task.tasks.map((taskItem, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="w-6 h-6 rounded-full border-2 border-gray-400 bg-white checked:bg-purple-500 checked:border-purple-500 disabled:opacity-50 appearance-none cursor-pointer"
//                   defaultChecked={taskItem.completed}
//                   disabled={taskItem.completed} // Disable if task is completed
//                   onClick={() => handleTaskClick(taskItem.name)}
//                 />
//                 <span>{taskItem.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Modal
//         opened={opened}
//         onClose={close}
//         title={`Follow ${modalTitle} on Twitter`}
//         transitionProps={{
//           transition: "fade",
//           duration: 600,
//           timingFunction: "linear",
//         }}
//       >
//         <div className="space-y-4">
//           <p className="text-sm text-gray-600">
//             Follow {modalTitle} on X:{" "}
//             <a
//               href="https://x.com/RICH_SEA1"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               https://x.com/RICH_SEA1
//             </a>
//             . Upload the screenshot as proof of task done.
//           </p>
//           <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
//             <label
//               htmlFor="upload-screenshot"
//               className="block w-full h-24 cursor-pointer flex items-center justify-center text-gray-500"
//             >
//               <input
//                 type="file"
//                 id="upload-screenshot"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={(e) => {
//                   if (e.target.files && e.target.files[0]) {
//                     console.log("File selected:", e.target.files[0]); // Handle file upload logic here
//                   }
//                 }}
//               />
//               <span>Upload screenshot</span>
//             </label>
//           </div>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition"
//             onClick={() => {
//               close();
//               // Add submission logic here
//             }}
//           >
//             Submit proof
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default SingleTask;





"use client";

import { useSearchParams } from "next/navigation";
import { taskDatas } from "@/app/data/taskData";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface TaskItem {
  name: string;
  completed: boolean;
}

interface Task {
  id: number;
  icon: StaticImageData;
  image: StaticImageData;
  title: string;
  subtitle: string;
  reward: string;
  participants: string;
  endDate: string;
  status: string;
  tasks: TaskItem[];
}

const SingleTask = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("task"); // Use the correct query key
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (title) {
      const decodedTitle = decodeURIComponent(title);
      const normalizedTitle = decodedTitle
        .toLowerCase()
        .replace(/\s+/g, "") // Remove spaces
        .replace(/[^\w\s]/gi, ""); // Remove non-alphanumeric characters

      const foundTask = taskDatas.find((task) => {
        const taskNormalized = task.title
          .toLowerCase()
          .replace(/\s+/g, "") // Remove spaces
          .replace(/[^\w\s]/gi, ""); // Remove non-alphanumeric characters

        return taskNormalized === normalizedTitle;
      });

      setTask(foundTask || null);
    }
  }, [title]);

  const handleTaskClick = (taskItemName: string) => {
    Swal.fire({
      title: `<span style="font-size: 18px; font-weight: bold; color: black">Follow ${taskItemName} on Twitter</span>`,
      html: `
        <p class="text-gray-600 font-raleway text-base">
          Follow ${taskItemName} on X: 
          <a 
            href="https://x.com/RICH_SEA1" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-blue-600 underline"
          >
            https://x.com/RICH_SEA1
          </a>
          . Upload the screenshot as proof of task done.
        </p>
        <div class="border-2 border-dashed border-gray-300 p-4 rounded-lg mt-3">
          <input 
            type="file" 
            id="upload-screenshot" 
            class="swal2-file hidden"
            accept="image/*"
          />
          <label 
            for="upload-screenshot" 
            class="block w-full h-24 cursor-pointer flex items-center justify-center text-gray-500"
          >
            <span>Upload screenshot</span>
          </label>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Submit proof",
      preConfirm: () => {
        const fileInput =
          Swal.getPopup()?.querySelector<HTMLInputElement>(
            "#upload-screenshot"
          );
        const file = fileInput?.files?.[0];

        if (!file) {
          Swal.showValidationMessage("Please upload a screenshot.");
          return false;
        }

        console.log("File selected:", file);
        // Add your submission logic here
        return true;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Proof Submitted!",
          "Your task proof has been uploaded.",
          "success"
        );
      }
    });
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="flex flex-col font-raleway md:px-4">
      <h2 className="text-2xl font-extrabold mb-2">{task.title}</h2>
      <div className="py-4 bg-white px-2 rounded-xl">
        <div className="relative w-full h-64 md:h-96 mb-3">
          <Image
            src={task.image}
            alt={task.title}
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex  w-full border-b-2 pb-4 gap-y-4">
          <div className="flex flex-col gap-1 border-r-2 w-1/3 justify-center items-center">
            <span className="font-extrabold text-[9px] md:text-lg">Reward Zone</span>
            <span className="font-medium text-[8px] md:text-[14px]">{task.reward}</span>
          </div>
          <div className="flex flex-col gap-1 border-r-2 w-1/3 justify-center items-center">
            <span className="font-extrabold text-[9px] md:text-lg">Participants</span>
            <span className="font-medium text-[8px] md:text-[14px]">{task.participants}</span>
          </div>
          <div className="flex flex-col gap-1 w-1/3 justify-center items-center">
            <span className="font-extrabold text-[9px] md:text-lg">End Date</span>
            <span className="font-medium text-[8px] md:text-[14px]">{task.endDate}</span>
          </div>
        </div>
        <div className="px-4 md:px-10 py-6">
          <h2 className="text-lg font-bold mb-5">
            Tasks {task.tasks.filter((taskItem) => taskItem.completed).length}/
            {task.tasks.length}
          </h2>
          <div className="space-y-3">
            {task.tasks.map((taskItem, index) => (
              <div key={index} className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  className="w-6 h-6 flex-shrink-0 rounded-full border-2 border-gray-400 bg-white checked:bg-purple-500 checked:border-purple-500 disabled:opacity-50 appearance-none cursor-pointer"
                  defaultChecked={taskItem.completed}
                  disabled={taskItem.completed} // Disable if task is completed
                  onClick={() => handleTaskClick(taskItem.name)}
                />
                <span className="font-[600] font-raleway text-[12px] md:text-[14px]">{taskItem.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
