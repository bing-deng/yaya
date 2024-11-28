'use client'

import { useState, useEffect } from "react"
import { Card, CardBody, Button } from "@nextui-org/react"
import { FaPlay, FaPause, FaRedo } from "react-icons/fa"

interface VideoItem {
  id: number
  title: string
  url: string
}

export default function VideoList() {
  const [videoList, setVideoList] = useState<VideoItem[]>([])
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [loopingId, setLoopingId] = useState<number | null>(null)

  useEffect(() => {
    // 模拟从API获取数据
    const fetchData = async () => {
      const response = await fetch('/api/video')
      const data = await response.json()
      setVideoList(data)
    }
    fetchData()
  }, [])

  const handlePlay = (id: number) => {
    const video = document.getElementById(`video-${id}`) as HTMLVideoElement
    if (playingId === id) {
      video.pause()
      setPlayingId(null)
    } else {
      if (playingId) {
        const currentPlaying = document.getElementById(`video-${playingId}`) as HTMLVideoElement
        currentPlaying?.pause()
      }
      video.play()
      setPlayingId(id)
    }
  }

  const handleLoop = (id: number) => {
    const video = document.getElementById(`video-${id}`) as HTMLVideoElement
    if (loopingId === id) {
      video.loop = false
      setLoopingId(null)
    } else {
      video.loop = true
      setLoopingId(id)
    }
  }

  return (
    <div className="gap-4 grid grid-cols-1">
      {videoList.map((item) => (
        <Card key={item.id} className="w-full">
          <CardBody>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <video
              id={`video-${item.id}`}
              src={item.url}
              className="w-full rounded-lg mb-2"
              onEnded={() => setPlayingId(null)}
            />
            <div className="flex justify-end gap-2">
              <Button
                isIconOnly
                color="primary"
                onClick={() => handlePlay(item.id)}
                aria-label={playingId === item.id ? "暂停" : "播放"}
              >
                {playingId === item.id ? <FaPause /> : <FaPlay />}
              </Button>
              <Button
                isIconOnly
                color={loopingId === item.id ? "success" : "default"}
                onClick={() => handleLoop(item.id)}
                aria-label="循环"
              >
                <FaRedo />
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}