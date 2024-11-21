'use client'

import { useState, useEffect } from "react"
import { Card, CardBody, Button } from "@nextui-org/react"
import { FaPlay, FaPause, FaRedo } from "react-icons/fa"

interface AudioItem {
  id: number
  title: string
  url: string
}

export default function AudioList() {
  const [audioList, setAudioList] = useState<AudioItem[]>([])
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [loopingId, setLoopingId] = useState<number | null>(null)

  useEffect(() => {
    // 模拟从API获取数据
    const fetchData = async () => {
      const response = await fetch('/api/audio')
      const data = await response.json()
      setAudioList(data)
    }
    fetchData()
  }, [])

  const handlePlay = (id: number) => {
    const audio = document.getElementById(`audio-${id}`) as HTMLAudioElement
    if (playingId === id) {
      audio.pause()
      setPlayingId(null)
    } else {
      if (playingId) {
        const currentPlaying = document.getElementById(`audio-${playingId}`) as HTMLAudioElement
        currentPlaying?.pause()
      }
      audio.play()
      setPlayingId(id)
    }
  }

  const handleLoop = (id: number) => {
    const audio = document.getElementById(`audio-${id}`) as HTMLAudioElement
    if (loopingId === id) {
      audio.loop = false
      setLoopingId(null)
    } else {
      audio.loop = true
      setLoopingId(id)
    }
  }

  return (
    <div className="gap-4 grid grid-cols-1">
      {audioList.map((item) => (
        <Card key={item.id} className="w-full">
          <CardBody className="flex flex-row items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <audio 
                id={`audio-${item.id}`} 
                src={item.url}
                onEnded={() => setPlayingId(null)}
              />
            </div>
            <div className="flex gap-2">
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