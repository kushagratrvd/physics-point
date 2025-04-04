import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  name: string
  text: string
  image: string
}

export default function TestimonialCard({ name, text, image }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold dark:text-white">{name}</h3>
            <div className="mt-3 relative">
              <QuoteIcon className="absolute -top-2 -left-2 h-6 w-6 text-purple-200 dark:text-purple-700" />
              <p className="pl-4 text-gray-600 dark:text-gray-300">{text}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

