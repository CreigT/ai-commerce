export type Product = {
  slug: string;
  name: string;
  price: number;
  interval: "one_time" | "month";
  blurb: string;
  description: string;
  includes: string[];
  badge?: string;
  popular?: boolean;
  stripePriceEnv?: string;
};

export const products: Product[] = [
  {
    slug: "starter-pack",
    name: "Starter Pack",
    price: 9,
    interval: "one_time",
    badge: "Most affordable",
    blurb: "A small set of ready-to-use prompts and checklists.",
    description:
      "Start here if you want something useful today without a big commitment. One payment. Instant access. No subscription.",
    includes: [
      "20 high-converting product prompts",
      "Simple pricing worksheet",
      "One-page launch checklist",
      "Lifetime access to this pack",
    ],
    stripePriceEnv: "STRIPE_PRICE_STARTER",
  },
  {
    slug: "business-kit",
    name: "Business Kit",
    price: 29,
    interval: "one_time",
    badge: "Best value",
    popular: true,
    blurb: "The complete playbook to sell a digital product this week.",
    description:
      "Everything in the Starter Pack, plus pages, emails, and a paywall plan you can copy. Built for people who want a store live without hiring a team.",
    includes: [
      "Everything in the Starter Pack",
      "Landing page copy templates",
      "Email sequences for launch and refunds",
      "Paywall and pricing guide",
      "Agent task list for daily store operations",
    ],
    stripePriceEnv: "STRIPE_PRICE_KIT",
  },
  {
    slug: "member-pass",
    name: "Member Pass",
    price: 19,
    interval: "month",
    badge: "Cancel anytime",
    blurb: "New drops, updated prompts, and agent reports each month.",
    description:
      "A calm monthly membership. You get new product ideas, refreshed copy, and a short report from the store agents. Cancel from your email receipt at any time.",
    includes: [
      "Everything in the Business Kit",
      "Monthly product idea drop",
      "Updated prompt library",
      "Short agent operations report",
      "Member-only library updates",
    ],
    stripePriceEnv: "STRIPE_PRICE_MEMBER",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(product: Product) {
  const dollars = `$${product.price}`;
  return product.interval === "month" ? `${dollars}/mo` : dollars;
}
