"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function ClaimAccess() {
  const params = useSearchParams();
  const [state, setState] = useState<"working" | "ready" | "error">("working");

  useEffect(() => {
    const sessionId = params.get("session_id");
    const slug = params.get("slug");
    const demo = params.get("demo");
    if (demo) {
      setState("ready");
      return;
    }
    fetch("/api/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, slug }),
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Claim failed");
        setState("ready");
      })
      .catch(() => setState("error"));
  }, [params]);

  if (state === "working") {
    return <p className="muted">Saving access on this browser.</p>;
  }

  if (state === "error") {
    return (
      <p className="muted">
        Payment may have gone through, but this browser could not save access.
        Open the success link again or email support.
      </p>
    );
  }

  return (
    <>
      <p className="lede">You now have access. Open the library on this device.</p>
      <div className="row">
        <Link className="btn" href="/library">
          Open library
        </Link>
        <Link className="btn ghost" href="/shop">
          Back to shop
        </Link>
      </div>
    </>
  );
}
