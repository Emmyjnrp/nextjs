import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="flex gap-4 shadow-2xl p-4 ">
        <Link href="/" className="hover:underline me-auto">
          Home
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
      </nav>
    </div>
  );
}
