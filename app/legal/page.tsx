import { store } from "@/lib/config";

export const metadata = { title: "Legal" };

export default function LegalPage() {
  return (
    <div className="wrap section">
      <h1>Legal</h1>
      <p className="muted">Plain language. Not a substitute for a lawyer.</p>

      <h2>Refunds</h2>
      <p>
        Digital products can be refunded within 7 days if the library was not a
        fit. Email {store.supportEmail}.
      </p>

      <h2>Payments</h2>
      <p>
        Card charges are processed by Stripe when keys are configured. Demo mode
        never charges a card.
      </p>

      <h2>Privacy</h2>
      <p>
        We keep the email you type at checkout so we can send a receipt and
        restore access. We do not sell your email.
      </p>

      <h2>Owner</h2>
      <p>
        Legal owner: {store.ownerName}. This software is an operator, not the
        owner of the business.
      </p>
    </div>
  );
}
