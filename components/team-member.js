import Image from "next/image"

export default function TeamMember({ name, position, image }) {
  return (
    <div className="text-center">
      <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
        <Image src={image || "/placeholder.png"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  )
}
