"use client";
import Headerlogin from "@/components/headerlogin";
import HomeSection from "@/components/screens/homesection/homesection";
import { useState } from "react";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenFeed, setIsModalOpenFeed] = useState(false);
  const [isModalOpenFeedSubmit, setIsModalOpenFeedSubmit] = useState(false);
  return (
    <main className="min-h-screen ">
      <Headerlogin onOpenModal={() => setIsModalOpen(true)} onopenFeedack={() => setIsModalOpenFeed(true)} 
        onopenFeedackSubmit={() => setIsModalOpenFeedSubmit(true)} />
      <HomeSection openConf={isModalOpen} onCloseConf={() => setIsModalOpen(false)}
        openFeed={isModalOpenFeed} onCloseFeed={() => setIsModalOpenFeed(false)}
        openFeedSubmit={isModalOpenFeedSubmit} onCloseFeedSubmit={() => setIsModalOpenFeedSubmit(false)}
      />
    </main>
  );
}
