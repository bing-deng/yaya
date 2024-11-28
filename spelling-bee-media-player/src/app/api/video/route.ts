import { NextResponse } from "next/server"

export async function GET() {
  // 模拟数据，实际项目中应该从数据库或外部API获取
  const videoList = [
    {
      id: 1,
      title: "视频课程 1",
      url: "/videos/video1.mp4"
    }
  ]

  return NextResponse.json(videoList)
}