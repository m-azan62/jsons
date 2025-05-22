import { Suspense } from "react"
import AboutPage from "@/components/pages/about-page"
import Loading from "@/components/loading"

export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <AboutPage />
    </Suspense>
  )
}
