import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScrollReveal from "@/components/scroll-reveal"
import ParticleBackground from "@/components/particle-background"

// Sample FAQ data
const faqs = [
  {
    id: "item-1",
    question: "What courses does Physics Point offer?",
    answer:
      "Physics Point offers comprehensive physics coaching for JEE (Main & Advanced), NEET, and other competitive exams. We have specialized batches for Class 11, Class 12, and droppers.",
  },
  {
    id: "item-2",
    question: "What is the admission process?",
    answer:
      "The admission process involves a simple registration followed by an entrance test to assess the student's current understanding of physics. Based on the test results, students are placed in appropriate batches.",
  },
  {
    id: "item-3",
    question: "What is the fee structure?",
    answer:
      "Our fee structure varies depending on the course and duration. Please contact our office or fill out the contact form for detailed information about fees for specific courses.",
  },
  {
    id: "item-4",
    question: "Do you provide study materials?",
    answer:
      "Yes, we provide comprehensive study materials including theory notes, problem sets, previous year questions, and mock test papers. These materials are regularly updated to align with the latest exam patterns.",
  },
  {
    id: "item-5",
    question: "How are the batches organized?",
    answer:
      "Batches are organized based on the student's academic level, goals, and performance in our entrance test. We maintain a limited batch size to ensure personalized attention to each student.",
  },
  {
    id: "item-6",
    question: "Do you offer online classes?",
    answer:
      "Yes, we offer both offline and online classes. Our online platform provides the same quality of education with interactive sessions, doubt-clearing, and regular assessments.",
  },
  {
    id: "item-7",
    question: "How do you track student progress?",
    answer:
      "We conduct regular tests and assessments to track student progress. Detailed performance analysis is shared with students and parents, highlighting strengths and areas that need improvement.",
  },
  {
    id: "item-8",
    question: "Do you offer doubt-clearing sessions?",
    answer:
      "Yes, we have dedicated doubt-clearing sessions where students can get their queries resolved. Additionally, our faculty is available for one-on-one doubt resolution by appointment.",
  },
  {
    id: "item-9",
    question: "What is your success rate?",
    answer:
      "Physics Point has consistently produced top rankers in JEE and NEET. Over 80% of our students qualify for these competitive exams, with many securing ranks within the top 1000.",
  },
  {
    id: "item-10",
    question: "Can I join mid-session?",
    answer:
      "Yes, you can join mid-session. We offer crash courses and special batches for students joining mid-session to help them catch up with the curriculum.",
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-purple text-white overflow-hidden">
        <ParticleBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-[700px] text-lg animate-fade-in animate-delay-200">
              Find answers to common questions about Physics Point and our programs.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200 dark:border-gray-700">
                    <AccordionTrigger
                      className="text-left py-4 hover:text-purple-900 dark:hover:text-purple-400 transition-all"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

