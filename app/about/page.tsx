"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Quote, Snowflake, Wrench, ShieldCheck, Headphones } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="relative pt-34 pb-24 overflow-hidden">
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

      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Mizan Electronics
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Premium AC Solutions — Cutting-Edge Technology. Trusted Expertise. Family-Driven Service.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-96 w-full">
            <Image
              src="/about/store-front.jpg"
              alt="Mizan Electronics Showroom"
              fill
              className="object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p>
              At <strong>Mizan Electronics</strong>, we’ve been helping homes and businesses stay cool,
              comfortable, and confident with top-tier air conditioning systems since our beginning.
            </p>
            <p>
              We focus on premium inverter AC solutions, expert consultation, and long-term customer
              satisfaction backed by transparent service and support.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="relative h-80 w-80 mx-auto lg:mx-0">
            <Image
              src="/about/owner.jpg"
              alt="Managing Director"
              fill
              className="object-cover rounded-full shadow-xl"
            />
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mr. Mizanur Rahman
            </h3>
            <p className="text-sm text-neutral-500">Founder & Managing Director</p>
            <div className="relative">
              <Quote className="absolute -left-8 -top-4 h-8 w-8 text-indigo-500/40" />
              <blockquote className="text-lg italic text-neutral-800 dark:text-neutral-200">
                Our mission is to deliver comfort with honesty, quality, and long-term trust.
                Every solution we provide is built around real customer needs.
              </blockquote>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center space-y-4">
          <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Complete AC solutions designed for efficiency, durability, and long-term comfort.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={<Snowflake />} title="Premium Inverter ACs" />
          <ServiceCard icon={<Wrench />} title="Professional Installation" />
          <ServiceCard icon={<ShieldCheck />} title="Warranty & Reliability" />
          <ServiceCard icon={<Headphones />} title="After-Sales Support" />
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Quality products, transparent service, expert guidance, and long-term customer trust.
          </p>
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
