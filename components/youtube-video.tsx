"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface YoutubeVideoProps {
  videoId: string
  thumbnail?: string
}

export default function YoutubeVideo({ videoId, thumbnail }: YoutubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Generate YouTube thumbnail URL if not provided
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      {!isPlaying ? (
        <div className="relative w-full h-full">
          <Image src={thumbnailUrl || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover" />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors"
            aria-label="Play video"
          >
            <div className="h-16 w-16 rounded-full bg-red-600 flex items-center justify-center">
              <Play className="h-8 w-8 text-white fill-white" />
            </div>
          </button>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      )}
    </div>
  )
}

