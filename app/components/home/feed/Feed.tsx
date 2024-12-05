import React from "react";
import HeroSection from "./HeroSection";
import NewsFeed from "./NewsFeed";
import { feedDatas } from "@/app/data/feedData";
import FeedContent from "./FeedContent";
import Communities from "./Communities";
import { suggestedCommunities } from "@/app/data/communityData";

const Feed = () => {
  return (
    <div className="w-full pb-10">
      <HeroSection />
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* News Feed */}
        <section className="lg:col-span-8">
          <NewsFeed />
          {/* Feed content (replace with dynamic feed items later) */}
          {/* <FeedContent/> */}
          <div className="space-y-4 mt-5">
            {feedDatas.map((feed, index) => (
              <FeedContent key={feed.id} feed={feed} index={index} />
            ))}
          </div>
        </section>

        {/* Suggested Communities */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <Communities suggestedCommunities={suggestedCommunities} />
          <div className="px-4 pt-16 pb-4 bg-white rounded-lg">
            <div className="w-full h-48 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;
