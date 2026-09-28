import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getStripe } from "@/lib/stripe";
import { store } from "@/lib/config";
import {
  ACCESS_COOKIE,
  decodeAccess,
  encodeAccess,
  slugsForPurchase,
} from "@/lib/access";

export async function POST(request: Request) {
  const { sessionId, slug } = (await request.json()) as {
    sessionId?: string;
    slug?: string;
  };
  const existing = decodeAccess(cookies().get(ACCESS_COOKIE)?.value);
  let email = existing?.email || "customer";
  let slugs = existing?.slugs || [];

  if (sessionId) {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json({ error: "Stripe is not configured." }, { status: 400 });
    }
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid =
      session.payment_status === "paid" || session.status === "complete";
    if (!paid) {
      return NextResponse.json({ error: "Payment not complete." }, { status: 402 });
    }
    const purchased = session.metadata?.slug || slug || "";
    email = session.customer_email || session.metadata?.email || email;
    slugs = Array.from(new Set([...slugs, ...slugsForPurchase(purchased)]));
  } else if (slug) {
    slugs = Array.from(new Set([...slugs, ...slugsForPurchase(slug)]));
  }

  const token = encodeAccess({
    email,
    slugs,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 365,
  });
  const response = NextResponse.json({ ok: true, email, slugs });
  response.cookies.set(ACCESS_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: store.url.startsWith("https"),
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}
