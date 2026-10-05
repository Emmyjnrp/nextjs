import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg"];
export default async function page({ params }) {
  const { slug } = await params;
  console.log(slug);
  if (!images.includes(slug)) {
    notFound();
  }
  return (
    <div className="flex p-10 flex-col items-center justify-center h-screen">
      <Link
        href="/products"
        className="text-black mb-4  bg-amber-300 p-2 rounded-lg"
      >
        Back to Products
      </Link>

      <Image
        src={`/${slug}`}
        alt={slug}
        height={500}
        width={500}
        className="w-70 h-90 object-cover"
        priority
      />
    </div>
  );
}
