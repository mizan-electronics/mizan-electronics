import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { notFound } from "next/navigation";

const ProductDetailPhoto = () => {
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
  const product = products[0];

  if (!product) return notFound();
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {product.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`relative h-20 w-20 cursor-pointer  rounded-xl p-0.5 transition
                             ${
                               activeImg === i
                                 ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
                                 : "opacity-70 hover:opacity-100"
                             }`}
          >
            <div className="relative  h-full w-full rounded-[10px] bg-white overflow-hidden">
              <Image src={img} alt="" fill className="object-contain p-2" />
            </div>
          </button>
        ))}
      </div>

      <motion.div
        key={activeImg}
        initial={{ opacity: 0.6, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex-1    rounded-3xl bg-white shadow-xl"
      >
        <Image
          src={product.images[activeImg]}
          alt={product.name}
          fill
          className="object-contain p-8"
        />
      </motion.div>
    </div>
  );
};

export default ProductDetailPhoto;
