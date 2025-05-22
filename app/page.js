import Header from "@/components/header"
import Footer from "@/components/footer"
import HomePage from "@/components/pages/home-page"
import Loading from "@/components/loading"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>

      <Footer />
    </div>
  )
}
