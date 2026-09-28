# Lumen — simple AI commerce

A small digital store you can understand in one sitting.

People see a clear landing page, three fair prices, and a library behind a paywall.
You add environment variables, push to GitHub, and deploy on Vercel.

You are the legal owner. You are not meant to run the shop day to day.

## Live repo

https://github.com/CreigT/ai-commerce

## Deploy on Vercel

1. Open [vercel.com/new](https://vercel.com/new) and import `CreigT/ai-commerce`.
2. Add environment variables from `.env.example`.
3. Set `NEXT_PUBLIC_STORE_URL` to your Vercel URL after the first deploy, then redeploy.
4. Leave Stripe keys empty to sell in demo mode. Add Stripe keys when you want real charges.

## What you get

- Home, shop, pricing, product, library, agents, and legal pages
- $9 starter pack, $29 business kit, $19/month member pass
- Stripe Checkout when keys exist
- Demo checkout when keys are empty (no charges)
- Signed-cookie access so the library unlocks on that browser
- Agent status page that explains who runs the store

## Variables to change

```
NEXT_PUBLIC_STORE_NAME=Lumen
NEXT_PUBLIC_STORE_TAGLINE=Simple digital products. Run by AI agents.
NEXT_PUBLIC_STORE_URL=https://your-app.vercel.app
NEXT_PUBLIC_SUPPORT_EMAIL=you@email.com
NEXT_PUBLIC_OWNER_NAME=Your Name
STORE_SECRET=long-random-string
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Change the catalog

Edit `lib/products.ts` and the copy blocks in `app/library/page.tsx`.

## Owner rule

High-impact money, legal, and refund decisions stay with you. The shop can sell without you standing in the checkout path.
