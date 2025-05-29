import { Suspense } from "react";
import CareerForm from "@/components/pages/career-page";
import Loading from "@/components/loading";

export default function Career() {
  return (
    <Suspense fallback={<Loading />}>
      <CareerForm />
    </Suspense>
  );
}
