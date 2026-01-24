"use client";

import { useState } from "react";

import { notFound } from "next/navigation";
import ProductDetailPhoto from "@/components/products/productDetail/hero/ProductDetailPhoto";
import ProductShortDetails from "@/components/products/productDetail/hero/ProductShortDetails";
import Tablist from "@/components/products/productDetail/tab/Tablist";
import Description from "@/components/products/productDetail/tab/Description";
import Reviews from "@/components/products/productDetail/tab/Reviews";
import QA from "@/components/products/productDetail/tab/QA";
import SimilarProducts from "@/components/products/SimilarProducts";

const products = [
  {
    name: "Walton WSI-18 Inverter AC 1.5 Ton",
    images: [
      "https://meemelectronics.com/wp-content/uploads/2025/01/AS18TZ4RMATD01AU-1024x1024.png",
      "https://static-01.daraz.com.bd/p/e0ab016ad143eed9124ba0501fac08c4.jpg",
      "https://www.estorejamuna.com/uploads/products/906/thumb/11754370521.jpg",
    ],
    price: 68900,
    originalPrice: 73900,
    rating: 4.7,
    description:
      "High performance inverter AC designed for Bangladeshi climate with fast cooling, low voltage operation and long-lasting compressor.",
  },
];

export default function ProductDetailPage({}: { params: { slug: string } }) {
  const product = products[0];

  if (!product) return notFound();

  const [tab, setTab] = useState<"desc" | "reviews" | "qa">("desc");

  return (
    <section className="pt-34 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <ProductDetailPhoto />

          <ProductShortDetails />
        </div>

        <div className="mt-20 mx-auto">
          <Tablist setTab={setTab} tab={tab}/>
          <div className="mt-10 text-neutral-600 leading-relaxed mx-auto max-w-4xl">
            {tab === "desc" && (
              <Description/>
            )}

            {tab === "reviews" && (
              <Reviews/>
            )}

            {tab === "qa" && (
             <QA/>
            )}
          </div>
        </div>
      <SimilarProducts/>
      </div>
    </section>
  );
}


