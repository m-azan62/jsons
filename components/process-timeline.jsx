import Image from "next/image"

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Needs Assessment",
      description: "We begin by understanding your business, goals, and target audience to create a tailored strategy.",
      image: "/pic/CONSULTATION.webp?height=200&width=300&text=Step+1",
    },
    {
      number: "02",
      title: "Strategy & Campaign Planning",
      description: "Our team develops a comprehensive plan with clear objectives, scripts, and performance metrics.",
      image: "/pic/Campaign-Planning.webp?height=200&width=300&text=Step+2",
    },
    {
      number: "03",
      title: "Training & Call Execution",
      description: "Our specialized agents are trained on your products/services before beginning the campaign.",
      image: "/pic/Call-Execution.webp?height=200&width=300&text=Step+3",
    },
    {
      number: "04",
      title: "Quality Assurance & Reporting",
      description: "We monitor calls, provide detailed reports, and ensure compliance with industry standards.",
      image: "/pic/Reporting.webp?height=200&width=300&text=Step+4",
    },
    {
      number: "05",
      title: "Continuous Optimization",
      description: "We analyze results and refine our approach to maximize performance and ROI.",
      image: "/pic/Continuous-Optimization.webp?height=200&width=300&text=Step+5",
    },
  ]

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-green-200 md:block"></div>

      <div className="space-y-12 md:space-y-0">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`relative flex flex-col items-center gap-8 md:grid md:grid-cols-5 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`relative z-10 md:col-span-2 ${index % 2 === 0 ? "md:text-right" : "md:order-2 md:text-left"}`}
            >
              <h3 className="mb-2 text-3xl font-bold text-green-600">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>

            <div className="z-20 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white md:col-span-1">
              {step.number}
            </div>

            <div
              className={`relative z-10 md:col-span-2 ${index % 2 === 0 ? "md:order-1 md:text-left" : "md:text-right"}`}
            >
              <div
                className={`h-40 w-full overflow-hidden rounded-lg bg-white p-2 shadow-lg ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <Image
                  src={step.image || "/placeholder.png"}
                  alt={`Process step ${step.number}`}
                  width={300}
                  height={200}
                  className="h-full w-full rounded object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
