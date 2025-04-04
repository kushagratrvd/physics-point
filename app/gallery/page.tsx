import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import ParticleBackground from "@/components/particle-background"

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=400&text=Physics+Lab",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=400&text=Classroom",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=400&text=Group+Discussion",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=400&text=Award+Ceremony",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=400&text=Science+Exhibition",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=400&text=Guest+Lecture",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=300&width=400&text=Practical+Session",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=300&width=400&text=Study+Material",
  },
  {
    id: 9,
    image: "/placeholder.svg?height=300&width=400&text=Campus+View",
  },
  {
    id: 10,
    image: "/placeholder.svg?height=300&width=400&text=Graduation+Day",
  },
  {
    id: 11,
    image: "/placeholder.svg?height=300&width=400&text=Faculty+Team",
  },
  {
    id: 12,
    image: "/placeholder.svg?height=300&width=400&text=Student+Activities",
  },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-purple text-white overflow-hidden">
        <ParticleBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">Our Gallery</h1>
            <p className="mx-auto max-w-[700px] text-lg animate-fade-in animate-delay-200">
              Take a visual tour of our facilities, events, and student activities.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <ScrollReveal key={item.id} delay={100 * (index % 6)}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer hover-lift shadow-md">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="Gallery image"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

