"use client";

import { useState } from "react";

export function CheckoutForm({ slug }: { slug: string }) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setBusy(false);
    }
  }

  return (
    <form className="stack" onSubmit={onSubmit}>
      <label htmlFor="email">Email for your receipt and library access</label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@email.com"
      />
      <button className="btn" disabled={busy} type="submit">
        {busy ? "Starting checkout…" : "Continue to checkout"}
      </button>
      {error ? <p className="muted">{error}</p> : null}
    </form>
  );
}
