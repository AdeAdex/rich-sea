import React from "react";
import Image from "next/image";
import image from "@/public/images/voting.png";

const VotingBanner = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white w-full font-raleway">
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
      <div className="px-3">
      <h3 className="text-2xl font-[800] mt-4 mb-3">Who is the next Big Boss?</h3>
      <span className="font-raleway font-[400] text-base">
        In the next bull-run, who do you think will top the chart as utility?
        Solana or BNB?
      </span>
      <p className="text-sm text-gray-500 mt-2">Each vote costs 200 $RICH</p>
      <hr className="mb-4 border-t border-gray-200" />


      <div className="w-full flex flex-col gap-2 mt-4">
        <button className="w-full  bg-rich-sea-pink text-rich-sea-deep-pink px-4 py-2 rounded-md font-bold hover:bg-rich-sea-sky-dark transition">
          Solana
        </button>
        <button className="w-full bg-rich-sea-green text-rich-sea-deep-green px-4 py-2 rounded-md font-bold hover:bg-rich-sea-sky-dark transition">
          BNB
        </button>
      </div>

      </div>
    </div>
  );
};

export default VotingBanner;
