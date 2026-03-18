import { Suspense } from "react";
import ApplyPage from "./pages";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ApplyPage />
    </Suspense>
  );
}

