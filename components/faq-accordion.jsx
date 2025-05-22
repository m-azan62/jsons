"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqAccordion() {
  const faqs = [
    {
      question: "What telemarketing services do you offer?",
      answer:
        "We offer a comprehensive range of telemarketing services including sales and lead generation, customer support solutions, appointment setting, market research, and specialized services for various industries such as finance, insurance, and e-commerce.",
    },
    {
      question: "How do you ensure the quality of your telemarketing calls?",
      answer:
        "We maintain high quality standards through rigorous training, real-time call monitoring, regular performance reviews, and continuous feedback. Our quality assurance team regularly evaluates calls against established metrics and provides coaching to ensure consistent excellence.",
    },
    {
      question: "Can you customize telemarketing campaigns for my specific business needs?",
      answer:
        "We specialize in creating tailored telemarketing solutions based on your unique business objectives, target audience, and industry requirements. Our team works closely with you to develop customized scripts, training materials, and performance metrics.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have extensive experience across multiple industries including finance, insurance, healthcare, technology, e-commerce, real estate, and more. Our specialized teams understand the nuances of each industry and can adapt our approach accordingly.",
    },
    {
      question: "How do you measure the success of telemarketing campaigns?",
      answer:
        "We track various key performance indicators (KPIs) including conversion rates, appointment setting success, lead quality, customer satisfaction scores, and return on investment. We provide detailed reports and analytics to help you understand campaign performance and areas for improvement.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is flexible and depends on your specific requirements, campaign complexity, call volume, and duration. We offer various pricing models including per-hour, per-call, or performance-based structures. Contact us for a customized quote based on your needs.",
    },
    {
      question: "How quickly can you set up a telemarketing campaign?",
      answer:
        "Typically, we can set up a new campaign within 2-4 weeks, depending on complexity. This includes needs assessment, strategy development, script creation, team training, and system setup. For simpler campaigns or existing clients, we can often expedite this timeline.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
