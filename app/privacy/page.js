import { Suspense } from "react"
import PrivacyPolicyPage from "@/components/pages/privacy-policy-page"
import Loading from "@/components/loading"

export default function PrivacyPolicy() {
  return (
    <Suspense fallback={<Loading />}>
      <PrivacyPolicyPage />
    </Suspense>
  )
}
