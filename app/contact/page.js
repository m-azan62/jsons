import { Suspense } from "react"
import ContactPage from "@/components/pages/contact-page"
import Loading from "@/components/loading"

export default function Contact() {
  return (
    <Suspense fallback={<Loading />}>
      <ContactPage />
    </Suspense>
  )
}
