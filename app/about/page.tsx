"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Snowflake,
  Wrench,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="absolute -z-10 left-[-30%] top-[5%] h-130 w-130 rounded-full bg-indigo-500/20 blur-[160px]"
        animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -z-10 right-[-25%] bottom-[0%] h-130 w-130 rounded-full bg-pink-500/20 blur-[160px]"
        animate={{ x: [0, -120, 0], y: [0, 80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative h-screen w-full">
        <video
          src="/about/ac.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About MIZAN ELECTRONICS
            </h1>
            <p className="mt-4 text-lg text-neutral-200 max-w-2xl mx-auto">
              A family-led AC specialist brand built on trust, expertise, and
              long-term service.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-24 pb-24">
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-100 w-full">
            <Image
              src="https://dynamic.brandcrowd.com/template/preview/design/1371c9b4-ef5f-4920-942f-a0e8f5ae90df/bf8c6aa2-3b7a-42f6-a237-ac6de260dfcd?v=4&designTemplateVersion=1&logoTemplateVersion=1&size=design-preview-wide-2x&layout=auto-1-1"
              alt="MIZAN ELECTRONICS Showroom"
              fill
              className="object-cover  shadow rounded-2xl"
            />
          </div>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p>
              <strong>MIZAN ELECTRONICS</strong> was founded with a commitment
              to deliver dependable, energy-efficient air conditioning solutions
              with honesty and care.
            </p>
            <p>
              From a single showroom to a trusted local name, our journey has
              always focused on quality products, skilled installation, and
              long-term customer relationships.
            </p>
          </div>
        </div>

        <div className="mt-28 text-center space-y-3">
          <h2 className="text-3xl font-extrabold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Present Leadership
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Continuing the legacy with modern operations, digital growth, and
            hands-on service excellence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl  dark:bg-neutral-900 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]"
          >
            <div className="relative mx-auto mb-6 h-82 w-65">
              <Image
                src="https://i.ibb.co.com/CshBXb8z/Adobe-Express-file.png"
                alt="Mostofa Fatin"
                fill
                className="object-cover  shadow rounded-full"
              />
            </div>
            <h4 className="text-2xl font-bold text-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mostofa Fatin
            </h4>
            <p className="mt-1 text-center font-bold dark:text-neutral-800">
              Online Operations & Digital Platforms
            </p>
            <p className="mt-4 text-center dark:text-neutral-300">
              Leads all online platforms, digital product presentation, customer
              engagement, and brand growth initiatives across web and social
              channels.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl dark:bg-neutral-900 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]"
          >
            <div className="relative mx-auto mb-6 h-82 w-65">
              <Image
                src="/about/zahid - Copy.jpg"
                alt="Zahidul Islam"
                fill
                className="object-cover  shadow rounded-full"
              />
            </div>

            <h4 className="text-2xl font-bold text-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zahidul Islam
            </h4>

            <p className="mt-1 text-center font-bold dark:text-neutral-800">
              Offline Operations & Staff Management
            </p>

            <p className="mt-4 text-center dark:text-neutral-300">
              Oversees showroom activities, installation teams, technical staff,
              and ensures smooth offline service delivery with strict quality
              control.
            </p>
          </motion.div>
        </div>

        <div className="mt-28 text-center space-y-4">
          <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            What We Offer
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={<Snowflake />} title="Premium Inverter ACs" />
          <ServiceCard icon={<Wrench />} title="Expert Installation" />
          <ServiceCard icon={<ShieldCheck />} title="Warranty & Reliability" />
          <ServiceCard icon={<Headphones />} title="Dedicated Support" />
        </div>

        <div className="mt-16 flex justify-center">
          <motion.a
            href="/products"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg"
          >
            Explore Products
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/50 backdrop-blur-xl p-6 shadow-[0_14px_40px_-22px_rgba(0,0,0,0.35)] text-center"
    >
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
        {title}
      </h4>
    </motion.div>
  );
}
