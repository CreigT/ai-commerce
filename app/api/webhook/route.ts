import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { store } from "@/lib/config";

export async function POST(request: Request) {
  const stripe = getStripe();
  if (!stripe || !store.webhookSecret) {
    return NextResponse.json({ received: true, demo: true });
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  try {
    stripe.webhooks.constructEvent(body, signature, store.webhookSecret);
    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid webhook" },
      { status: 400 }
    );
  }
}
