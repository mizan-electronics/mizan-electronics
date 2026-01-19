import { motion } from "motion/react";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

const SortDropdown = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string) => void;
}) => (
  <div className="relative cursor-pointer">
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="appearance-none rounded-full border cursor-pointer  border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 px-5 py-2 pr-10 text-sm shadow"
    >
      <option>Popular</option>
      <option>Price Low</option>
      <option>Price High</option>
      <option>Rating</option>
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
  </div>
);

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.35)]"
  >
    <div className="relative h-44 w-full">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
      />
    </div>

    <div className="p-5">
      <h3 className="text-sm font-semibold line-clamp-2">
        {product.name}
      </h3>
      <p className="text-xs text-neutral-500">{product.brand}</p>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-bold text-indigo-600">
          ৳ {product.price.toLocaleString()}
        </span>
        <span className="flex items-center gap-1 text-xs text-amber-500">
          <Star size={14} className="fill-amber-500" />
          {product.rating}
        </span>
      </div>
    </div>
  </motion.div>
);


const ITEMS_PER_PAGE = 12;
type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  brand: string;
};



const productsData: Product[] = [
  {
    id: 1,
    name: "Walton WSI-18 Inverter AC 1.5 Ton",
    image:
      "https://meemelectronics.com/wp-content/uploads/2025/01/AS18TZ4RMATD01AU-1024x1024.png",
    price: 68900,
    rating: 4.7,
    brand: "Walton",
  },
  {
    id: 2,
    name: "Gree GS-18 Fairy Split Inverter AC",
    image:
      "https://www.estorejamuna.com/uploads/products/909/thumb/11755584095.jpg",
    price: 74500,
    rating: 4.8,
    brand: "Gree",
  },
  {
    id: 3,
    name: "Samsung AR18 Digital Inverter AC",
    image:
      "https://brandbazaarbd.com/image/cache/catalog/Hisense/h1.5-1000x1000.jpg.webp",
    price: 89900,
    rating: 4.9,
    brand: "Samsung",
  },
  {
    id: 4,
    name: "LG DualCool Inverter AC 1.5 Ton",
    image:
      "https://static-01.daraz.com.bd/p/e0ab016ad143eed9124ba0501fac08c4.jpg",
    price: 92500,
    rating: 4.8,
    brand: "LG",
  },
  {
    id: 5,
    name: "Haier CleanCool Inverter AC",
    image:
      "https://giftall.s3.amazonaws.com/uploads/images/product/product_6283c50961ef2_1131287993.jpg",
    price: 70900,
    rating: 4.6,
    brand: "Haier",
  },
  {
    id: 6,
    name: "Singer EcoCool Inverter AC 1.5 Ton",
    image:
      "https://ministerbd.com/media/catalog/product/cache/4ca62bf5a19099a80c75eced13b95361/1/_/1.5_ton_inv_m18k410gwcp_wht--600x600_1_.jpg",
    price: 69500,
    rating: 4.5,
    brand: "Singer",
  },
  {
    id: 7,
    name: "Panasonic Aero Series Inverter AC",
    image: "https://ponnobd.com/public/uploads/products/photos/24L90LVLGT.webp",
    price: 96000,
    rating: 4.8,
    brand: "Panasonic",
  },
  {
    id: 8,
    name: "Hitachi Kashikoi Inverter AC",
    image:
      "https://www.householdz.com/images/products/singer-air-conditioner-sas12l90lvlgt.jpg",
    price: 98500,
    rating: 4.9,
    brand: "Hitachi",
  },
  {
    id: 9,
    name: "General ASGG Split Inverter AC",
    image:
      "https://iconicmnl.com/wp-content/uploads/2022/09/TCL-FreshIN-Series-air-conditioner.jpg",
    price: 104000,
    rating: 4.9,
    brand: "General",
  },
  {
    id: 10,
    name: "Sharp PlasmaCluster Inverter AC",
    image:
      "https://www.estorejamuna.com/uploads/products/909/thumb/11755584095.jpg",
    price: 87900,
    rating: 4.7,
    brand: "Sharp",
  },
  {
    id: 11,
    name: "Walton WSI-12 Smart Inverter AC",
    image:
      "https://www.estorejamuna.com/uploads/products/906/thumb/11754370521.jpg",
    price: 62900,
    rating: 4.6,
    brand: "Walton",
  },
  {
    id: 12,
    name: "Samsung WindFree Inverter AC",
    image:
      "https://cdn.othoba.com/images/thumbs/0654002_vision-15-ton-split-type-ac-non-inverter-bec-3d-elite.jpeg",
    price: 109900,
    rating: 4.9,
    brand: "Samsung",
  },
  {
    id: 13,
    name: "LG AI Smart Dual Inverter AC",
    image:
      "https://www.estorejamuna.com/uploads/products/822/thumb/11755519683.jpg",
    price: 102500,
    rating: 4.8,
    brand: "LG",
  },
  {
    id: 14,
    name: "Haier TurboCool Inverter AC",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/1/QS/HT/JR/43332590/daikin-1-5-ton-3-star-non-inverter-split-ac-500x500.jpg",
    price: 72000,
    rating: 4.6,
    brand: "Haier",
  },
  {
    id: 15,
    name: "Singer SmartCool Pro Inverter AC",
    image: "https://m.media-amazon.com/images/I/81OAMDVERhL.jpg",
    price: 71500,
    rating: 4.5,
    brand: "Singer",
  },
  {
    id: 16,
    name: "Panasonic Nanoe-X Inverter AC",
    image:
      "https://www.estorejamuna.com/uploads/products/822/thumb/11755519683.jpg",
    price: 105000,
    rating: 4.9,
    brand: "Panasonic",
  },
  {
    id: 17,
    name: "Hitachi AirHome Inverter AC",
    image:
      "https://www.estorejamuna.com/uploads/products/906/thumb/11754370521.jpg",
    price: 94500,
    rating: 4.8,
    brand: "Hitachi",
  },
  {
    id: 18,
    name: "General CoolPlus Inverter AC",
    image:
      "https://www.estorejamuna.com/uploads/products/455/thumb/11737522346.jpg",
    price: 99900,
    rating: 4.8,
    brand: "General",
  },
  {
    id: 19,
    name: "Sharp Eco Inverter AC 1.5 Ton",
    image:
      "https://iconicmnl.com/wp-content/uploads/2022/09/TCL-FreshIN-Series-air-conditioner.jpg",
    price: 85000,
    rating: 4.7,
    brand: "Sharp",
  },
  {
    id: 20,
    name: "Gree GS-12 Pular Inverter AC",
    image:
      "https://www.estorejamuna.com/uploads/products/455/thumb/11737522346.jpg",
    price: 66500,
    rating: 4.7,
    brand: "Gree",
  },
];


const AllProductsList = () => {
  const [sort, setSort] = useState("Popular");
  const [page, setPage] = useState(1);

  const sortedProducts = useMemo(() => {
    const data = [...productsData];
    if (sort === "Price Low") data.sort((a, b) => a.price - b.price);
    if (sort === "Price High") data.sort((a, b) => b.price - a.price);
    if (sort === "Rating") data.sort((a, b) => b.rating - a.rating);
    return data;
  }, [sort]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const visible = sortedProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Air Conditioners
        </h2>
        <SortDropdown value={sort} setValue={setSort} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`h-10 cursor-pointer w-10 rounded-full text-sm font-semibold ${
              page === i + 1
                ? "bg-indigo-500 text-white"
                : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 shadow"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllProductsList;
