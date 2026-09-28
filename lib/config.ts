export const store = {
  name: process.env.NEXT_PUBLIC_STORE_NAME || "Lumen",
  tagline:
    process.env.NEXT_PUBLIC_STORE_TAGLINE ||
    "Simple digital products. Run by AI agents.",
  url: process.env.NEXT_PUBLIC_STORE_URL || "http://localhost:3000",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "hello@example.com",
  ownerName: process.env.NEXT_PUBLIC_OWNER_NAME || "Store Owner",
  secret: process.env.STORE_SECRET || "dev-only-change-in-production",
  stripeSecret: process.env.STRIPE_SECRET_KEY || "",
  stripePublishable: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "",
};

export function isDemoMode() {
  return !store.stripeSecret;
}
