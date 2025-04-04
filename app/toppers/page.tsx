import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import ParticleBackground from "@/components/particle-background"

// Sample toppers data
const toppers = [
  {
    id: 1,
    name: "Rahul Sharma",
    achievement: "AIR 45 in JEE Advanced",
    year: "2023",
    quote: "Physics Point helped me understand complex concepts with ease.",
    image: "/placeholder.svg?height=150&width=150&text=Rahul",
  },
  {
    id: 2,
    name: "Priya Patel",
    achievement: "AIR 78 in NEET",
    year: "2023",
    quote: "The faculty's guidance was instrumental in my success.",
    image: "/placeholder.svg?height=150&width=150&text=Priya",
  },
  {
    id: 3,
    name: "Amit Kumar",
    achievement: "AIR 120 in JEE Advanced",
    year: "2022",
    quote: "The structured approach to teaching physics made all the difference.",
    image: "/placeholder.svg?height=150&width=150&text=Amit",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    achievement: "AIR 95 in NEET",
    year: "2022",
    quote: "Physics Point's teaching methodology is unparalleled.",
    image: "/placeholder.svg?height=150&width=150&text=Sneha",
  },
  {
    id: 5,
    name: "Vikram Singh",
    achievement: "AIR 150 in JEE Advanced",
    year: "2021",
    quote: "The regular tests and feedback helped me improve consistently.",
    image: "/placeholder.svg?height=150&width=150&text=Vikram",
  },
  {
    id: 6,
    name: "Neha Sharma",
    achievement: "AIR 110 in NEET",
    year: "2021",
    quote: "I owe my success to the dedicated faculty at Physics Point.",
    image: "/placeholder.svg?height=150&width=150&text=Neha",
  },
  {
    id: 7,
    name: "Arjun Reddy",
    achievement: "AIR 200 in JEE Advanced",
    year: "2020",
    quote: "The problem-solving sessions were extremely helpful.",
    image: "/placeholder.svg?height=150&width=150&text=Arjun",
  },
  {
    id: 8,
    name: "Kavita Desai",
    achievement: "AIR 180 in NEET",
    year: "2020",
    quote: "Physics Point made physics my strongest subject.",
    image: "/placeholder.svg?height=150&width=150&text=Kavita",
  },
  {
    id: 9,
    name: "Rajesh Kumar",
    achievement: "AIR 250 in JEE Advanced",
    year: "2019",
    quote: "The faculty's dedication to teaching is commendable.",
    image: "/placeholder.svg?height=150&width=150&text=Rajesh",
  },
]

export default function ToppersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-purple text-white overflow-hidden">
        <ParticleBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">
              Our Past Toppers
            </h1>
            <p className="mx-auto max-w-[700px] text-lg animate-fade-in animate-delay-200">
              Meet the students who achieved remarkable success with Physics Point's guidance.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.map((topper, index) => (
              <ScrollReveal key={topper.id} delay={100 * (index % 6)}>
                <Card className="overflow-hidden hover-lift hover-glow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                      <Image src={topper.image || "/placeholder.svg"} alt={topper.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-semibold text-lg">{topper.name}</h3>
                    <div className="flex items-center mt-2 text-yellow-600">
                      <Trophy className="h-4 w-4 mr-1 animate-pulse-slow" />
                      <span className="text-sm font-medium">{topper.achievement}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{topper.year}</p>
                    <p className="mt-4 text-gray-600 italic">"{topper.quote}"</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

