import IpTracker from "@/components/IpTracker";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <IpTracker />
      </Suspense>
    </>
  );
}
