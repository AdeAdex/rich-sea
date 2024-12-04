import React, { useState } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface Community {
  id: number;
  name: string;
  followers: number;
  image: StaticImageData;
}

interface CommunitiesProps {
  suggestedCommunities: Community[];
}

const Communities: React.FC<CommunitiesProps> = ({ suggestedCommunities }) => {
  const [showAll, setShowAll] = useState(false);

  // Toggle the state to show all communities or just 4
  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  // Display only the first 4 communities when `showAll` is false
  const communitiesToDisplay = showAll
    ? suggestedCommunities
    : suggestedCommunities.slice(0, 4);

  return (
    <aside className="hidden lg:block">
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-[800] mb-4 font-raleway text-[19px]">
          Suggested Communities
        </h3>
        <ul className="space-y-4">
          {communitiesToDisplay.map((community) => (
            <li
              key={community.id}
              className="flex items-center justify-between relative"
            >
              <div className="flex items-center gap-3">
                {community.image && (
                  <Image
                    src={community.image}
                    alt={community.name}
                    className="w-12 h-12 rounded-full"
                    width={40}
                    height={40}
                  />
                )}
                <div>
                  <p className="font-bold font-raleway text-[17px]">
                    {community.name}
                  </p>
                  <span className="text-sm text-gray-500 font-raleway font-[400]">
                    {community.followers} followers
                  </span>
                </div>
              </div>
              <button className="text-[11px] py-1 px-2 rounded-full border border-gray-500 hover:bg-rich-sea-sky hover:text-white font-[500] font-raleway">
                Follow
              </button>
              <hr className="absolute bottom-0 left-0 border-t-1 border-gray-100 my-8" />
            </li>
          ))}
        </ul>
        <button
          onClick={handleShowMore}
          className="text-blue-500 mt-4 w-full text-center"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </aside>
  );
};

export default Communities;
