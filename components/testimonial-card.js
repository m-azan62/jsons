import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialCard({ quote, author, company }) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-green-500 mb-4" />
        <p className="text-gray-600 mb-6 italic">"{quote}"</p>
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-gray-500">{company}</p>
        </div>
      </CardContent>
    </Card>
  )
}
