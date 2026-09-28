import Link from "next/link";
import { cookies } from "next/headers";
import { ACCESS_COOKIE, decodeAccess } from "@/lib/access";
import { getProduct, products } from "@/lib/products";

export const dynamic = "force-dynamic";
export const metadata = { title: "Library" };

const files: Record<string, { title: string; body: string }[]> = {
  "starter-pack": [
    {
      title: "20 product prompts",
      body: "Write a one-sentence offer for busy parents. Name a $9 digital download someone can finish in an afternoon. List 5 objections and a calm answer for each.",
    },
    {
      title: "Pricing worksheet",
      body: "Price floor = time to deliver + tools. Price target = value of one saved hour × hours saved. Never start above $29 until 10 customers say the first product helped.",
    },
  ],
  "business-kit": [
    {
      title: "Landing page outline",
      body: "Promise. Who it is for. What they get. Price. Guarantee. One button. FAQ in plain words.",
    },
    {
      title: "Launch emails",
      body: "1) It is live. 2) Who it helps. 3) Last day. Keep each email under 150 words.",
    },
  ],
  "member-pass": [
    {
      title: "September agent report",
      body: "Traffic is quiet. Next action: publish one useful page, not five. Feature the $9 pack first.",
    },
  ],
};

export default function LibraryPage() {
  const access = decodeAccess(cookies().get(ACCESS_COOKIE)?.value);
  const unlocked = products.filter((product) => access?.slugs.includes(product.slug));

  if (!access || unlocked.length === 0) {
    return (
      <div className="wrap section">
        <h1>Library</h1>
        <p className="lede">This shelf is locked until you buy a product.</p>
        <p className="notice">
          After checkout, access is stored on this browser. Use the same device
          to read your files.
        </p>
        <div className="row">
          <Link className="btn" href="/pricing">
            See prices
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap section">
      <h1>Your library</h1>
      <p className="muted">Signed in as {access.email}</p>
      {unlocked.map((product) => (
        <section key={product.slug} className="section" style={{ paddingTop: 24 }}>
          <h2>{getProduct(product.slug)?.name}</h2>
          <div className="grid">
            {(files[product.slug] || []).map((file) => (
              <article className="card" key={file.title}>
                <h3>{file.title}</h3>
                <p>{file.body}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
