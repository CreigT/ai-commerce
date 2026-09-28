import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { store } from "@/lib/config";

export default function HomePage() {
  return (
    <div className="wrap">
      <section className="hero">
        <p className="badge">A simple store for everyone</p>
        <h1>Buy useful digital products. Agents keep the shop open.</h1>
        <p className="lede">
          {store.tagline} Clear pages. Fair prices. No account maze. You only
          add your name, keys, and deploy.
        </p>
        <div className="row">
          <Link className="btn" href="/shop">
            Browse the shop
          </Link>
          <Link className="btn ghost" href="/pricing">
            See prices
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>How it works</h2>
        <div className="grid">
          <article className="card">
            <div className="badge">1</div>
            <h3>Pick a product</h3>
            <p className="muted">
              Three offers. One small start, one complete kit, one monthly pass.
            </p>
          </article>
          <article className="card">
            <div className="badge">2</div>
            <h3>Pay once or monthly</h3>
            <p className="muted">
              Stripe handles cards. If keys are missing, demo mode still lets you
              walk the path.
            </p>
          </article>
          <article className="card">
            <div className="badge">3</div>
            <h3>Open the library</h3>
            <p className="muted">
              Access is saved in a signed cookie. Come back on this browser and
              your files are waiting.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Products</h2>
        <p className="muted">Reasonable paywalls. No $499 “genius” course.</p>
        <div className="grid" style={{ marginTop: 18 }}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
