import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex bg-black text-white flex-col items-center justify-center h-screen">
      <p>404 | page not found</p>
      <p>Please check the URL and try again.</p>
      <Link href="/" className="hover:underline mt-4">
        Go back to Home
      </Link>
    </div>
  );
}
