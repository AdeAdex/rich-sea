import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface TaskCardProps {
  image: StaticImageData;
  icon: StaticImageData;
  title: string;
  subtitle: string;
  reward: string;
  participants: string;
  endDate: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  image,
  icon,
  title,
  subtitle,
  reward,
  participants,
  endDate,
  status,
}) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white font-raleway">
      {/* Card Image */}
      <div className="w-full h-16 md:h-32 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Icon and Subtitle */}
      <div className="flex flex-col items-center gap-2 mt-[-20px]">
        <div className="w-11 h-11 md:w-14 md:h-14 relative">
          <Image
            src={icon}
            alt={`${title} icon`}
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <span className="text-[6px] md:text-[13px] text-gray-500 font-[800] ">
          {subtitle}
        </span>
      </div>

      {/* Title and Details */}
      <div className="px-3">
        <h3 className="text-[10px] md:text-lg font-[800] mt-2 text-center">{title}</h3>
        <p className="text-[8px] md:text-sm text-gray-500 mt-1 font-[600] font-inter flex justify-between w-full">
          Reward zone: <span className="font-[500]">{reward}</span>
        </p>
        <p className="text-[8px] md:text-sm text-gray-500 font-[600] font-inter flex justify-between w-full">
          Participants: <span className="font-[500]">{participants}</span>
        </p>
        <p className="text-[8px] md:text-sm text-gray-500 font-[600] font-inter flex justify-between w-full">
          End date: <span className="font-[500]">{endDate}</span>
        </p>
      </div>

      {/* Action Button */}
      <button
        className={`mt-4 px-4 py-1 rounded-lg font-[700] font-raleway text-[9px] md:text-[17px] ${
          status === "Joined"
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-rich-sea-green text-white hover:bg-green-600"
        }`}
        disabled={status === "Joined"}
      >
        {status}
      </button>
    </div>
  );
};

export default TaskCard;
