"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Youtube } from "lucide-react"
import TopperCard from "@/components/topper-card"
import YoutubeVideo from "@/components/youtube-video"
import ScrollReveal from "@/components/scroll-reveal"
import ParticleBackground from "@/components/particle-background"
import GoogleMapComponent from "@/components/google-map"
import TestimonialMarquee from "@/components/testimonial-marquee"
import { TextAnimate } from "@/registry/magicui/text-animate"
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-purple text-white overflow-hidden">
        <ParticleBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <TextAnimate
                animation="blurIn"
                as="h1"
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              >
                Welcome to Physics Point
              </TextAnimate>
              <TextAnimate animation="blurIn" delay={300} as="p" className="text-xl font-medium">
                by AV BHAIYA
              </TextAnimate>
              <TextAnimate animation="blurIn" delay={500} as="p" className="mx-auto max-w-[700px] text-lg md:text-xl">
                Empowering students to excel in physics through expert guidance and personalized learning.
              </TextAnimate>
            </div>
            {/* Removed Enroll Now button */}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900 dark:text-purple-400">
                  About Physics Point
                </h2>
                <p className="mt-2 text-lg text-purple-700 dark:text-purple-300 font-medium">by AV BHAIYA</p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Founded in 2010, Physics Point has been a center of excellence for physics education. Our mission is
                  to make physics accessible, engaging, and enjoyable for all students.
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  With a proven teaching methodology, we have helped thousands of
                  students achieve their academic goals and develop a deep understanding of physics.
                </p>
                <div className="mt-8 flex items-center space-x-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 animate-pulse-slow">
                    <Clock className="h-6 w-6 text-purple-900 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-white">10+ Years</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">of Excellence</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg hover-lift">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Physics classroom"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Banner */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900 dark:text-purple-400">
                Our Coaching Gallery
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300">
                Take a virtual tour of our state-of-the-art facilities and vibrant learning environment.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i, index) => (
              <ScrollReveal key={i} delay={100 * index}>
                <div className="relative h-60 overflow-hidden rounded-lg group cursor-pointer shadow-md hover-lift bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={`/placeholder.svg?height=240&width=360&text=Gallery+Image+${i}`}
                    alt={`Gallery image ${i}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white/20 transition-all">
                      View Gallery
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="mt-8 text-center">
              <Link href="/gallery" className="block mx-auto w-fit">
                <InteractiveHoverButton className="border-purple-900 text-purple-900 dark:border-purple-400 dark:text-purple-400 hover:text-white">
                  View All Photos
                </InteractiveHoverButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900 dark:text-purple-400">
                Featured Lectures
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300">
                Watch some of our popular physics lectures and tutorials.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <YoutubeVideo videoId="9qwGTds3NcM" thumbnail="https://i.ytimg.com/vi/9qwGTds3NcM/maxresdefault.jpg" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <YoutubeVideo videoId="dZQSKEBjCFo" thumbnail="https://i.ytimg.com/vi/dZQSKEBjCFo/maxresdefault.jpg" />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <YoutubeVideo videoId="mdlVuKgjAUY" thumbnail="https://i.ytimg.com/vi/mdlVuKgjAUY/maxresdefault.jpg" />
            </ScrollReveal>
          </div>
          <ScrollReveal delay={400}>
  <div className="mt-8 text-center">
    <a
      href="http://www.youtube.com/@Learnandgrowwithanand"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py"
    >

      <InteractiveHoverButton className="border-purple-900 text-purple-900 dark:border-purple-400 dark:text-purple-400 hover:text-white">
        Visit Our YouTube Channel
      </InteractiveHoverButton>
    </a>
  </div>
</ScrollReveal>

        </div>
      </section>

      {/* Top Performers Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900 dark:text-purple-400">
                Our Top Performers
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300">
                Meet some of our students who have achieved remarkable success in various competitive exams.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <div className="hover-lift">
                <TopperCard
                  name="Rahul Sharma"
                  achievement="AIR 45 in JEE Advanced"
                  year="2023"
                  image="/placeholder.svg?height=150&width=150&text=Rahul"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="hover-lift">
                <TopperCard
                  name="Priya Patel"
                  achievement="AIR 78 in NEET"
                  year="2023"
                  image="/placeholder.svg?height=150&width=150&text=Priya"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="hover-lift">
                <TopperCard
                  name="Amit Kumar"
                  achievement="AIR 120 in JEE Advanced"
                  year="2022"
                  image="/placeholder.svg?height=150&width=150&text=Amit"
                />
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={400}>
            <div className="mt-8 text-center">
              <Link href="/toppers" className="block mx-auto w-fit">
                <InteractiveHoverButton className="border-purple-900 text-purple-900 dark:border-purple-400 dark:text-purple-400 hover:text-white">
                  View All Toppers
                </InteractiveHoverButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center">
              <TextAnimate
                animation="blurIn"
                as="h2"
                className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900 dark:text-purple-400"
              >
                What Our Students Say
              </TextAnimate>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300">
                Hear from our students about their experience at Physics Point.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <TestimonialMarquee />
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-8 text-center">
              <Link href="/testimonials" className="block mx-auto w-fit">
                <InteractiveHoverButton className="border-purple-900 text-purple-900 dark:border-purple-400 dark:text-purple-400 hover:text-white">
                  Read More Testimonials
                </InteractiveHoverButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-purple text-white overflow-hidden">
        <ParticleBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <ScrollReveal>
              <div>
                <TextAnimate
                  animation="blurIn"
                  as="h2"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Ready to Excel in Physics?
                </TextAnimate>
                <p className="mt-4 text-lg">
                  Contact us today to learn more about our programs and how we can help you achieve your academic goals.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" />
                    <span>9J4H+RF2, Gulistan Colony, Navadia, Fatehgarh, Uttar Pradesh 209601</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>info@physicspoint.com</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mt-8 lg:mt-0">
                <GoogleMapComponent />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

