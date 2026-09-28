import Link from "next/link";
import { products, formatPrice } from "@/lib/products";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <div className="wrap section">
      <h1>Pricing</h1>
      <p className="lede">
        Start at $9. Upgrade only if the first pack helped. Membership is
        optional.
      </p>
      <div className="grid" style={{ marginTop: 24 }}>
        {products.map((product) => (
          <article className="card" key={product.slug}>
            <div className="badge">{product.badge}</div>
            <h3>{product.name}</h3>
            <p className="price">{formatPrice(product)}</p>
            <p className="muted">{product.description}</p>
            <ul className="clean">
              {product.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn" href={`/product/${product.slug}`}>
              Choose {product.name}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
