import votingData from "@/app/data/votingData";
import React, { useState } from "react";
import VotingCard from "./VotingCard";
import VotingBanner from "./VotingBanner";

const Voting = () => {
  const buttons = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming" },
  ];

  const [activeButton, setActiveButton] = useState("all");

  const handleClick = (id: string) => {
    setActiveButton(id);
    console.log(`${id} button clicked!`); // Example action
  };
  return (
    <div className="pb-10 grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="w-full md:col-span-9">
        <div className="flex flex-col md:flex-row justify-between font-raleway mb-4">
          <h2 className="text-2xl font-bold text-center md:text-left mb-3 md:mb-0">
            Voting
          </h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {votingData.map((voting, index) => (
            <VotingCard
              key={index}
              image={voting.image}
              title={voting.title}
              votes={voting.votes}
              totalParticipants={voting.totalParticipants}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:col-span-3 flex flex-col gap-8 py-12">
        <VotingBanner />
      </div>
    </div>
  );
};

export default Voting;
