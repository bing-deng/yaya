'use client'

import { Tabs, Tab } from "@nextui-org/react"
import AudioList from "@/components/AudioList"
import VideoList from "@/components/VideoList"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Media Player
        </h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <Tabs 
            aria-label="Options"
            color="primary"
            variant="bordered"
            classNames={{
              tabList: "gap-6 w-full relative rounded-lg p-2",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-4 h-10",
              tabContent: "group-data-[selected=true]:text-white"
            }}
          >
            <Tab
              key="music"
              title="Music"
              className="text-white"
            >
              <AudioList />
            </Tab>
            <Tab
              key="video"
              title="Video"
              className="text-white"
            >
              <VideoList />
            </Tab>
          </Tabs>
        </div>
      </div>
    </main>
  )
}