import React, { useState } from "react";
import Image from "next/image";
import { TfiMoreAlt } from "react-icons/tfi";
import { BsChatDots } from "react-icons/bs";
import upvote from "@/public/images/upvote.png";
import type { StaticImageData } from "next/image";

// Define the Feed interface
interface Message {
  name: string;
  text: string;
  time: string;
  avatar: StaticImageData;
}

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
  messages: Message[]; // Array of messages
}

const FeedContent = ({ feed, index }: { feed: Feed; index: number }) => {
  const [showMessages, setShowMessages] = useState(false); // State for dropdown visibility
  const bgClass = index % 2 === 0 ? "bg-rich-sea-light-yellow" : "bg-white";

  const toggleMessages = () => setShowMessages((prev) => !prev); // Toggle dropdown

  return (
    <div className={`py-4 px-4 md:px-8 ${bgClass} rounded-lg shadow`}>
      {/* Header Section */}
      <div className="flex justify-between items-center gap-4 md:gap-0">
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
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <Image src={upvote} alt="upvote" className="mx-auto md:mx-0" />
        <div
          className="flex gap-2 my-auto mx-auto md:mx-0 cursor-pointer"
          onClick={toggleMessages} // Toggle message dropdown
        >
          <BsChatDots size={20} />
          <span>{feed.comments} comments</span>
        </div>
      </div>

      {/* Message Dropdown */}
      {showMessages && (
        <div className="mt-4 md:p-4 rounded-lg">
          <h4 className="font-medium text-gray-800">Comments</h4>
          <hr className="my-4 border-t border-gray-200" />
          <ul className="mt-4 space-y-8">
            {feed.messages.map((message, idx) => (
              <li key={idx} className="flex justify-between gap-4 md:p-[unset] w-full">
                <div className="flex gap-3">
                  <div className="w-10 h-10 my-auto flex-shrink-0">
                    <Image
                      src={message.avatar}
                      alt={`${message.name} avatar`}
                      // width={30}
                      // height={30}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col font-raleway">
                    <span className="text-[12px] md:text-sm font-bold text-gray-800">
                      {message.name}
                    </span>
                    <span className="text-[12px] md:text-sm font-[400] text-gray-600">
                      {message.text}
                    </span>
                  </div>
                </div>

                <div className="my-auto">
                  <span className="text-[12px] md:text-sm font-raleway font-bold whitespace-nowrap">{message.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FeedContent;
