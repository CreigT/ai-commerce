import Link from "next/link";
import { store } from "@/lib/config";

export function Footer() {
  return (
    <footer className="wrap footer">
      <div>
        © {new Date().getFullYear()} {store.name}. {store.ownerName}.
      </div>
      <div className="footer-links">
        <Link href="/legal">Legal</Link>
        <a href={`mailto:${store.supportEmail}`}>{store.supportEmail}</a>
      </div>
    </footer>
  );
}
