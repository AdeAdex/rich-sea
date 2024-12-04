"use client";

import React from "react";
import HeroSection from "./components/home/HeroSection";
import NewsFeed from "./components/home/NewsFeed";
import FeedContent from "./components/home/FeedContent";
import { feedDatas } from "./data/feedData";
import { suggestedCommunities } from "./data/communityData";
import Communities from "./components/home/Communities";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[80px] px-8 bg-gray-100 py-8">
      <HeroSection />
      <main className="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-8">
        {/* News Feed */}
        <section className="lg:col-span-4">
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
        <div className="lg:col-span-2 flex flex-col gap-8">
          <Communities suggestedCommunities={suggestedCommunities} />
          <div className="px-4 pt-16 pb-4 bg-white rounded-lg">
            <div className="w-full h-48 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
