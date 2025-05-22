import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"

const team = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in telemarketing and BPO services.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Lisa Johnson",
    position: "Operations Director",
    bio: "Expert in streamlining processes and maximizing team performance.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "David Chen",
    position: "Sales Director",
    bio: "Specializes in developing effective sales strategies and team leadership.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Maria Rodriguez",
    position: "Client Success Manager",
    bio: "Dedicated to ensuring client satisfaction and building long-term relationships.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
]

export default function TeamGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {team.map((member) => (
        <Card
          key={member.name}
          className="group overflow-hidden border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="relative h-80 overflow-hidden">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-green-600"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-green-600"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {member.social.facebook && (
                <a
                  href={member.social.facebook}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-green-600"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
          <CardContent className="p-6 text-center">
            <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
            <p className="mb-3 text-green-600">{member.position}</p>
            <p className="text-gray-600">{member.bio}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
