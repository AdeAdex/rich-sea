import React, { useState } from "react";
import HeroSection from "./HeroSection";
import NewsFeed from "./NewsFeed";
import { feedDatas } from "@/app/data/feedData";
import FeedContent from "./FeedContent";
import Communities from "./Communities";
import { suggestedCommunities } from "@/app/data/communityData";

const Feed = () => {
  const [filter, setFilter] = useState("recent");

  // Filter logic based on the selected filter
  const filteredFeeds = feedDatas.filter((feed) => {
    if (filter === "recent") {
      // Sort by most recent (assuming `feed` has a `date` field)
      return true; // Show all, sorted later
    } else if (filter === "following") {
      // Example logic: Check if the user is following (add logic here)
      return feed.user.name === "Marlene UI/UX Pro"; // Example logic
    } else if (filter === "trending") {
      // Example logic: Trending items based on comments count
      return feed.comments > 10;
    }
    return true;
  });

  // Sort feeds for "recent" (add a `date` field to your data for sorting)
  const sortedFeeds =
    filter === "recent"
      ? [...filteredFeeds].sort(
          (a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0)
        )
      : filteredFeeds;

  return (
    <div className="w-full pb-10">
      <HeroSection />
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* News Feed */}
        <section className="lg:col-span-8">
          <NewsFeed setFilter={setFilter} />
          <div className="space-y-4 mt-5">
            {sortedFeeds.map((feed, index) => (
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
