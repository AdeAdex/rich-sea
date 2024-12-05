import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface VotingCardProps {
  image: StaticImageData; // Image source URL or path
  title: string;
  votes: { label: string; count: number; color: string }[];
  totalParticipants: number;
}

const VotingCard: React.FC<VotingCardProps> = ({
  image,
  title,
  votes,
  totalParticipants,
}) => {
//   const totalVotes = votes.reduce((sum, vote) => sum + vote.count, 0);

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white w-full font-raleway">
      {/* Top Image */}
      <div className="w-full h-36 relative">
        <Image
          src={image}
          alt="Voting Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mt-4">{title}</h3>

      {/* Votes */}
      <div className="flex mt-3 w-full">
        {votes.map((vote, index) => (
          <div
            key={vote.label}
            className={`flex flex-col mb-2 w-1/2 ${
              index % 2 === 1 ? "items-end text-right" : "items-start"
            }`}
          >
            {/* Label */}
            <span className="font-medium">{vote.label}</span>
            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full w-full relative">
              <div
                className="h-2 rounded-full"
                style={{
                  //   width: `${(vote.count / totalVotes) * 100}%`,
                  backgroundColor: vote.color,
                }}
              ></div>
            </div>
            {/* Vote Count */}
            <span className="text-sm flex">
              {vote.count} <span className="ml-1">votes</span>
            </span>
          </div>
        ))}
      </div>

      <hr className="my-4 border-t border-gray-200" />

      {/* Total Participants */}
      <div className="flex justify-between">
        <span className="text-gray-500 text-center text-sm">
          {totalParticipants} Participants
        </span>

        {/* Vote Button */}
        <button className="bg-rich-sea-green text-white rounded-xl px-4 py-1 font-semibold">
          Vote
        </button>
      </div>
    </div>
  );
};

export default VotingCard;
