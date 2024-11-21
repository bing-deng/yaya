import { NextResponse } from "next/server"

export async function GET() {
  // 模拟数据，实际项目中应该从数据库或外部API获取
  const audioList = [
    {
      id: 1,
      title: "课程 1",
      url: "/audios/KG-P1.mp3"
    },
    {
      id: 2,
      title: "课程 2",
      url: "/audios/KG-P1.mp3"
    },
    {
      id: 3,
      title: "课程 3",
      url: "/audios/KG-P1.mp3"
    }
  ]

  return NextResponse.json(audioList)
}