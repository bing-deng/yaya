'use client'

import { NextUIProvider } from "@nextui-org/react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className="min-h-screen bg-background text-foreground">
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}