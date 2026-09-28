import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <div className="wrap section">
      <h1>Shop</h1>
      <p className="lede">Digital products. Instant access after payment.</p>
      <div className="grid" style={{ marginTop: 24 }}>
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
