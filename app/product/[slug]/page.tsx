import { notFound } from "next/navigation";
import { getProduct, formatPrice, products } from "@/lib/products";
import { CheckoutForm } from "./checkout-form";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  return { title: product?.name || "Product" };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <div className="wrap section">
      <p className="badge">{product.badge}</p>
      <h1>{product.name}</h1>
      <p className="price">{formatPrice(product)}</p>
      <p className="lede">{product.description}</p>
      <ul className="clean">
        {product.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div style={{ marginTop: 24 }}>
        <CheckoutForm slug={product.slug} />
      </div>
    </div>
  );
}
