import { Suspense } from "react";
import { ClaimAccess } from "./claim-access";

export const metadata = { title: "You are in" };

export default function SuccessPage() {
  return (
    <div className="wrap section">
      <p className="badge">Checkout finished</p>
      <h1>Unlocking your library…</h1>
      <Suspense fallback={<p className="muted">Saving access on this browser.</p>}>
        <ClaimAccess />
      </Suspense>
    </div>
  );
}
