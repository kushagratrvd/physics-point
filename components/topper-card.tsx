import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

interface TopperCardProps {
  name: string
  achievement: string
  year: string
  image: string
}

export default function TopperCard({ name, achievement, year, image }: TopperCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <h3 className="font-semibold text-lg dark:text-white">{name}</h3>
        <div className="flex items-center mt-2 text-yellow-600 dark:text-yellow-400">
          <Trophy className="h-4 w-4 mr-1 animate-pulse-slow" />
          <span className="text-sm font-medium">{achievement}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{year}</p>
      </CardContent>
    </Card>
  )
}

