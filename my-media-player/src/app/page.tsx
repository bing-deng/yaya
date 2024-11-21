'use client'

import { Tabs, Tab } from "@nextui-org/react"
import AudioList from "@/components/AudioList"
import VideoList from "@/components/VideoList"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <Tabs 
        aria-label="Media Tabs"
        className="mt-4"
        color="primary"
        variant="bordered"
      >
        <Tab key="audio" title="音频课程">
          <AudioList />
        </Tab>
        <Tab key="video" title="视频课程">
          <VideoList />
        </Tab>
      </Tabs>
    </main>
  )
}