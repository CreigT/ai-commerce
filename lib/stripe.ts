import Stripe from "stripe";
import { store } from "./config";

export function getStripe() {
  if (!store.stripeSecret) return null;
  return new Stripe(store.stripeSecret, { apiVersion: "2024-06-20" });
}
