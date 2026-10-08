import React from "react";
import Link from "next/link";

export default function Navbar() {
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
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/students" className="hover:underline">
          Students
        </Link>
      </nav>
    </div>
  );
}
