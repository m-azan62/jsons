import { Badge } from "@/components/ui/badge"

export default function SectionHeading({ badge, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">{badge}</Badge>
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mb-16 text-xl leading-relaxed text-gray-600">{description}</p>
    </div>
  )
}
