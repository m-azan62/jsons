import { Suspense } from "react"
import TestimonialsPage from "@/components/pages/testimonials-page"
import Loading from "@/components/loading"

export default function Testimonials() {
  return (
    <Suspense fallback={<Loading />}>
      <TestimonialsPage />
    </Suspense>
  )
}
