import { Suspense } from "react"
import TermsOfServicePage from "@/components/pages/terms-of-service-page"
import Loading from "@/components/loading"

export default function TermsOfService() {
  return (
    <Suspense fallback={<Loading />}>
      <TermsOfServicePage />
    </Suspense>
  )
}
