"use client"

import Image from "next/image"

// Use our existing testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ananya Singh",
    role: "JEE Advanced 2023",
    text: "Physics Point transformed my approach to physics. The teachers are incredibly knowledgeable and make complex concepts easy to understand.",
    image: "/placeholder.svg?height=80&width=80&text=Ananya",
  },
  {
    id: 2,
    name: "Vikram Desai",
    role: "NEET 2023",
    text: "I was struggling with physics until I joined Physics Point. The personalized attention and quality of teaching helped me secure a top rank in NEET.",
    image: "/placeholder.svg?height=80&width=80&text=Vikram",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "JEE Mains 2022",
    text: "The teaching methodology at Physics Point is exceptional. The concepts are explained in a way that makes them easy to grasp and remember.",
    image: "/placeholder.svg?height=80&width=80&text=Priya",
  },
  {
    id: 4,
    name: "Rahul Kumar",
    role: "NEET 2022",
    text: "Physics Point has the best faculty for physics. Their approach to teaching is unique and effective.",
    image: "/placeholder.svg?height=80&width=80&text=Rahul",
  },
  {
    id: 5,
    name: "Neha Patel",
    role: "JEE Advanced 2022",
    text: "Joining Physics Point was the best decision I made for my JEE preparation. The faculty's dedication and the structured curriculum helped me build a strong foundation.",
    image: "/placeholder.svg?height=80&width=80&text=Neha",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "NEET 2023",
    text: "I am grateful to Physics Point for helping me achieve my dream of getting into a top medical college.",
    image: "/placeholder.svg?height=80&width=80&text=Arjun",
  },
]

const TestimonialCard = ({
  image,
  name,
  role,
  text,
}: {
  image: string
  name: string
  role: string
  text: string
}) => {
  return (
    <div className="w-[280px] h-[200px] flex-shrink-0 rounded-lg bg-gray-900 dark:bg-gray-900 p-4 mx-2 overflow-hidden">
      <div className="flex items-center gap-3 mb-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-800">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-300 line-clamp-5">{text}</p>
    </div>
  )
}

export default function TestimonialMarquee() {
  return (
    <div className="w-full overflow-hidden py-8">
      {/* First row */}
      <div className="testimonial-container mb-6 overflow-hidden">
        <div className="testimonial-track">
          {/* Duplicate testimonials to ensure continuous loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>

      {/* Second row */}
      <div className="testimonial-container overflow-hidden">
        <div className="testimonial-track-reverse">
          {/* Duplicate testimonials to ensure continuous loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-reverse-${index}`}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

