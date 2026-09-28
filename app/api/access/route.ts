import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ACCESS_COOKIE, decodeAccess } from "@/lib/access";

export async function GET() {
  const token = cookies().get(ACCESS_COOKIE)?.value;
  const access = decodeAccess(token);
  return NextResponse.json({ access });
}
