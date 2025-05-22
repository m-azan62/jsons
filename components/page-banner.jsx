import Image from "next/image"

export default function PageBanner({ title, description, image }) {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 z-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">{title}</h1>
          <p className="text-xl text-gray-200">{description}</p>
        </div>
      </div>
    </section>
  )
}
