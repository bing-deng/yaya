'use client'

import { useState, useEffect } from "react"
import { Card, CardBody, Button, Progress, Slider } from "@nextui-org/react"
import { FaPlay, FaPause, FaRedo, FaVolumeUp, FaVolumeMute } from "react-icons/fa"

interface AudioItem {
  id: number
  title: string
  url: string
}

export default function AudioList4() {
  const [audioList, setAudioList] = useState<AudioItem[]>([])
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [loopingId, setLoopingId] = useState<number | null>(null)
  const [progress, setProgress] = useState<{ [key: number]: number }>({})
  const [duration, setDuration] = useState<{ [key: number]: number }>({})
  const [currentTime, setCurrentTime] = useState<{ [key: number]: number }>({})
  const [volume, setVolume] = useState<number>(1)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  useEffect(() => {
    const mockData = Array.from({ length: 42 }, (_, index) => ({
      id: index + 1,
      title: `LRP Unit ${index + 1}`,
      url: `https://github.com/bing-deng/yaya/raw/refs/heads/main/spelling-bee-media-player/public/audios/LRP/LR-P${index + 1}.mp3`
    }))
    
    setAudioList(mockData)
  }, [])

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

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

  const updateProgress = (id: number) => {
    const audio = document.getElementById(`audio-${id}`) as HTMLAudioElement
    const currentProgress = (audio.currentTime / audio.duration) * 100
    setProgress(prev => ({ ...prev, [id]: currentProgress }))
    setCurrentTime(prev => ({ ...prev, [id]: audio.currentTime }))
  }

  const handleVolumeChange = (value: number) => {
    setVolume(value)
    audioList.forEach(item => {
      const audio = document.getElementById(`audio-${item.id}`) as HTMLAudioElement
      if (audio) {
        audio.volume = value
      }
    })
    if (value === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    const newVolume = isMuted ? volume || 1 : 0
    handleVolumeChange(newVolume)
    setIsMuted(!isMuted)
  }

  return (
    <div className="gap-4 grid grid-cols-1">
      {audioList.map((item) => (
        <Card key={item.id} className="w-full">
          <CardBody className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <audio 
                  id={`audio-${item.id}`} 
                  src={item.url}
                  onEnded={() => setPlayingId(null)}
                  onTimeUpdate={() => updateProgress(item.id)}
                  onLoadedMetadata={(e) => {
                    const audio = e.currentTarget as HTMLAudioElement
                    setDuration(prev => ({ ...prev, [item.id]: audio.duration }))
                  }}
                />
              </div>
              <div className="flex items-center gap-4">
                {/* 音量控制 */}
                <div className="flex items-center gap-2 min-w-[140px]">
                  <Button
                    isIconOnly
                    variant="light"
                    onClick={toggleMute}
                    className="text-default-500"
                  >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </Button>
                  <Slider 
                    size="sm"
                    value={isMuted ? 0 : volume}
                    onChange={(value) => handleVolumeChange(Number(value))}
                    maxValue={1}
                    step={0.1}
                    className="w-20"
                  />
                </div>
                {/* 播放控制 */}
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
            </div>
            
            {/* 进度条和时间显示 */}
            <div className="space-y-1">
              <Progress 
                aria-label="音频进度"
                value={progress[item.id] || 0}
                className="h-1"
                color="secondary"
                onClick={(e) => {
                  const audio = document.getElementById(`audio-${item.id}`) as HTMLAudioElement
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const clickedValue = (x / rect.width) * 100
                  audio.currentTime = (clickedValue / 100) * audio.duration
                }}
                classNames={{
                  base: "cursor-pointer",
                  track: "border border-default-100",
                  indicator: "bg-gradient-to-r from-secondary to-primary"
                }}
              />
              <div className="flex justify-between text-small text-default-500">
                <span>{formatTime(currentTime[item.id] || 0)}</span>
                <span>{formatTime(duration[item.id] || 0)}</span>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}