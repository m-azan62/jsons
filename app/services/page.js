import { Suspense } from "react"
import ServicesPage from "@/components/pages/services-page"
import Loading from "@/components/loading"

export default function Services() {
  return (
    <Suspense fallback={<Loading />}>
      <ServicesPage />
    </Suspense>
  )
}
