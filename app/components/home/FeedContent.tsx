import React from "react";
import Image from "next/image";
import { TfiMoreAlt } from "react-icons/tfi";
import { BsChatDots } from "react-icons/bs";
import upvote from "@/public/images/upvote.png";
import type { StaticImageData } from "next/image";

// Define the Feed interface
interface Feed {
  id: number;
  user: {
    name: string;
    role: string;
    image: StaticImageData;
  };
  title: string;
  content: string;
  image: StaticImageData | null; // Image is optional
  comments: number;
}

const FeedContent = ({ feed, index }: { feed: Feed; index: number }) => {
  const bgClass = index % 2 === 0 ? "bg-rich-sea-light-yellow" : "bg-white";
  return (
    <div className={`py-4 px-8 ${bgClass} rounded-lg shadow`}>
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={feed.user.image}
            alt={`${feed.user.name} profile picture`}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-medium text-gray-800">{feed.user.name}</span>
            <span className="text-sm text-gray-500">{feed.user.role}</span>
          </div>
        </div>
        <TfiMoreAlt size={24} className="text-gray-500" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mt-4">
        <div className="w-full md:w-1/2">
          <h3 className="font-bold text-lg md:text-xl">{feed.title}</h3>
          <p className="text-sm text-gray-700 mt-2">{feed.content}</p>
        </div>

        {feed.image && (
          <div className="flex-shrink-0 w-full md:w-1/2 h-40 md:h-52 relative">
            <Image
              src={feed.image}
              alt="News feed image"
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
      </div>

      <hr className="border-t-1 border-[#7A7A7A] my-8" />

      {/* Footer Section */}
      <div className="flex gap-8">
        <Image src={upvote} alt="upvote" />
        <div className="flex gap-2 my-auto">
          <BsChatDots size={20} />
          <span>{feed.comments} comments</span>
        </div>
      </div>
    </div>
  );
};

export default FeedContent;
