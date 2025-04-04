"use client"
import { Youtube } from "lucide-react"
import YoutubeVideo from "@/components/youtube-video"
import ScrollReveal from "@/components/scroll-reveal"
import ParticleBackground from "@/components/particle-background"
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button"

// Sample video data with real YouTube IDs
const videos = [
  {
    id: "video-1",
    videoId: "9qwGTds3NcM",
    thumbnail: "https://i.ytimg.com/vi/9qwGTds3NcM/maxresdefault.jpg",
  },
  {
    id: "video-2",
    videoId: "dZQSKEBjCFo",
    thumbnail: "https://i.ytimg.com/vi/dZQSKEBjCFo/maxresdefault.jpg",
  },
  {
    id: "video-3",
    videoId: "By9wCB9IZp0",
    thumbnail: "https://i.ytimg.com/vi/mdlVuKgjAUY/maxresdefault.jpg",
  },
  {
    id: "video-4",
    videoId: "-CTRhZp65FU",
    thumbnail: "https://i.ytimg.com/vi/-CTRhZp65FU/maxresdefault.jpg",
  },
  {
    id: "video-5",
    videoId: "nnJpeeQmwRw",
    thumbnail: "https://i.ytimg.com/vi/nnJpeeQmwRw/maxresdefault.jpg",
  },
  {
    id: "video-6",
    videoId: "U-hp6NZq_Pg",
    thumbnail: "https://i.ytimg.com/vi/U-hp6NZq_Pg/maxresdefault.jpg",
  },
  {
    id: "video-7",
    videoId: "wTa_UO1fE_8",
    thumbnail: "https://i.ytimg.com/vi/wTa_UO1fE_8/maxresdefault.jpg",
  },
  {
    id: "video-8",
    videoId: "NN6xSFYyiSI",
    thumbnail: "https://i.ytimg.com/vi/NN6xSFYyiSI/maxresdefault.jpg",
  },
  {
    id: "video-9",
    videoId: "AUAQ6Qrv-G8",
    thumbnail: "https://i.ytimg.com/vi/AUAQ6Qrv-G8/maxresdefault.jpg",
  },
]

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-purple text-white overflow-hidden">
        <ParticleBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">
              YouTube Videos
            </h1>
            <p className="mx-auto max-w-[700px] text-lg animate-fade-in animate-delay-200">
              Here we teach academic subjects as well as moral values
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <ScrollReveal key={video.id} delay={100 * (index % 6)}>
                <div className="w-full hover-lift">
                  <YoutubeVideo videoId={video.videoId} thumbnail={video.thumbnail} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-8 text-center">
              <a
                href="http://www.youtube.com/@Learnandgrowwithanand"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-auto w-fit"
              >
                <InteractiveHoverButton className="border-purple-900 text-purple-900 dark:border-purple-400 dark:text-purple-400 hover:text-white">
                  Visit Our YouTube Channel
                </InteractiveHoverButton>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

