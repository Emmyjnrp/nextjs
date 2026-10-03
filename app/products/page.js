import React from "react";
import Image from "next/image";
import image1 from "@/public/a.jpg";
import image2 from "@/public/b.jpg";
import image3 from "@/public/c.jpg";
import image4 from "@/public/d.jpg";
import Link from "next/link";
export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 mt-7 md:grid-cols-4 lg:grid-cols-4 gap-8">
      <Link href="/products/1" className="h-60 overflow-hidden relative ">
        <Image
          src={image1}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw,50vw"
          className="w-70 h-90 object-cover"
          priority
        />
      </Link>
      <Link href="/products/2" className="h-60 overflow-hidden relative ">
        <Image
          src={image2}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw,50vw"
          className="w-70 h-90 object-cover"
          priority
          placeholder="blur"
        />
      </Link>
      <Link href="/products/3" className="h-60 overflow-hidden relative ">
        <Image
          src={image3}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw,50vw"
          className="w-70 h-90 object-cover"
          placeholder="blur"
          loading="lazy"
        />
      </Link>
      <Link href="/products/4" className="h-60 overflow-hidden relative ">
        <Image
          src={image4}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw,50vw"
          className="w-70 h-90 object-cover"
          placeholder="blur"
          loading="lazy"
        />
      </Link>
    </div>
  );
  {
    /* it is compulsory to add your alt */
  }
  {
    /* whenever you are rendering your image source using their plain url, you must provide the height and width unless you use fill property */
  }
}
