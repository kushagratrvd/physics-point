import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import ParticleBackground from "@/components/particle-background"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ananya Singh",
    role: "JEE Advanced 2023",
    text: "Physics Point transformed my approach to physics. The teachers are incredibly knowledgeable and make complex concepts easy to understand. I was able to secure a top rank in JEE Advanced thanks to their guidance.",
    image: "/placeholder.svg?height=80&width=80&text=Ananya",
  },
  {
    id: 2,
    name: "Vikram Desai",
    role: "NEET 2023",
    text: "I was struggling with physics until I joined Physics Point. The personalized attention and quality of teaching helped me secure a top rank in NEET. The faculty is supportive and always available to clear doubts.",
    image: "/placeholder.svg?height=80&width=80&text=Vikram",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "JEE Mains 2022",
    text: "The teaching methodology at Physics Point is exceptional. The concepts are explained in a way that makes them easy to grasp and remember. The regular tests and feedback helped me improve consistently.",
    image: "/placeholder.svg?height=80&width=80&text=Priya",
  },
  {
    id: 4,
    name: "Rahul Kumar",
    role: "NEET 2022",
    text: "Physics Point has the best faculty for physics. Their approach to teaching is unique and effective. The study material provided is comprehensive and covers all aspects of the syllabus.",
    image: "/placeholder.svg?height=80&width=80&text=Rahul",
  },
  {
    id: 5,
    name: "Neha Patel",
    role: "JEE Advanced 2022",
    text: "Joining Physics Point was the best decision I made for my JEE preparation. The faculty's dedication and the structured curriculum helped me build a strong foundation in physics.",
    image: "/placeholder.svg?height=80&width=80&text=Neha",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "NEET 2023",
    text: "I am grateful to Physics Point for helping me achieve my dream of getting into a top medical college. The faculty's guidance and support were instrumental in my success.",
    image: "/placeholder.svg?height=80&width=80&text=Arjun",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-purple text-white overflow-hidden">
        <ParticleBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">
              Student Testimonials
            </h1>
            <p className="mx-auto max-w-[700px] text-lg animate-fade-in animate-delay-200">
              Hear what our students have to say about their experience at Physics Point.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={100 * (index % 6)}>
                <Card className="overflow-hidden hover-lift hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <div className="mt-3 relative">
                          <QuoteIcon className="absolute -top-2 -left-2 h-6 w-6 text-purple-200" />
                          <p className="pl-4 text-gray-600 dark:text-gray-300">{testimonial.text}</p>
                        </div>
                      </div>
                    </div>
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

