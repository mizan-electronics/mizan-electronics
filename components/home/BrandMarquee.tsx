"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { memo, useMemo } from "react";

const brands = [
  { name: "Walton", logo: "/brands/walton.png" },
  { name: "Gree", logo: "/brands/gree.webp" },
  { name: "Singer", logo: "/brands/singer.png" },
  { name: "LG", logo: "/brands/lg.png" },
  { name: "General", logo: "/brands/general.webp" },
  { name: "Hitachi", logo: "/brands/hitachi.jpg" },
  { name: "Panasonic", logo: "/brands/panasonic.png" },
  { name: "Haier", logo: "/brands/haier.png" },
];

function BrandMarquee() {
  const marqueeBrands = useMemo(() => [...brands, ...brands], []);
  const x = useMotionValue(0);

  return (
    <section className="relative  pb-20 overflow-hidden">
   <motion.div
        className="absolute -z-10 left-[20%] bottom-[-35%] h-130 w-130 rounded-full bg-[#e18b94]/20 blur-[160px]"
        animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white dark:from-black to-transparent" />

      <div className="relative rounded-3xl py-10">
        <motion.div
          className="flex gap-14 px-10"
          style={{ x }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeBrands.map((brand, i) => {
            const scale = useTransform(x, [-600, 0, 600], [0.9, 1.15, 0.9]);
            const opacity = useTransform(x, [-600, 0, 600], [0.6, 1, 0.6]);

            return (
              <motion.div
                key={i}
                style={{ scale, opacity }}
                className="flex items-center justify-center"
              >
                <div
                  className="
                    flex items-center justify-center
                    w-40 h-22.5
                    rounded-2xl
                    bg-white dark:bg-black/40
                    shadow-[0_12px_40px_-20px_rgba(0,0,0,0.35)]
                  "
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={70}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(BrandMarquee);
