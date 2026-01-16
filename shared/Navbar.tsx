"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { HiOutlineHome, HiHome } from "react-icons/hi";
import { FiInfo, FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { BsBoxSeam, BsBoxSeamFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import { FaCircleExclamation } from "react-icons/fa6";
import logo from "@/public/mizan.png";
import ProfileImage from "./ProfileImage";
import MobileBottomNav from "./MobileBottomNav";
const Navbar = () => {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  if (pathname.startsWith("/auth")) {
    return null;
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <div className="fixed top-1 lg:top-6 z-50 w-full px-4">
        <div className="mx-auto max-w-7xl">
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between rounded-full border border-neutral-100 dark:border-white/10 lg:py-0 pt-3 pb-2  bg-white/60 px-4 backdrop-blur-xl shadow-lg dark:bg-black/50"
          >
            <div className="flex items-center gap-1">
              <Image
                src={logo}
                alt="Mizan Electronics"
                width={48}
                height={48}
              />
              <span className=" font-extrabold tracking-wide bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                MIZAN ELECTRONICS
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 px-5">
              <NavItem
                href="/"
                icon={pathname === "/" ? <HiHome /> : <HiOutlineHome />}
                label="Home"
                active={pathname === "/"}
              />
              <NavItem
                href="/products"
                icon={
                  pathname === "/products" ? <BsBoxSeamFill /> : <BsBoxSeam />
                }
                label="Products"
                active={pathname === "/products"}
              />
              <NavItem
                href="/about"
                icon={
                  pathname === "/about" ? <FaCircleExclamation /> : <FiInfo />
                }
                label="About"
                active={pathname === "/about"}
              />
              <NavItem
                href="/contact"
                icon={pathname === "/contact" ? <FaPhoneAlt /> : <FiPhone />}
                label="Contact"
                active={pathname === "/contact"}
              />
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDark(!dark)}
                className="rounded-full bg-white/60 p-2 backdrop-blur transition hover:bg-white/80 dark:bg-white/10"
              >
                {dark ? (
                  <Sun size={20} className="cursor-pointer" />
                ) : (
                  <Moon size={20} className="cursor-pointer" />
                )}
              </button>

              <ProfileImage />
            </div>
          </motion.header>
        </div>
      </div>

      <MobileBottomNav />
    </>
  );
};

export default Navbar;

const NavItem = ({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => (
  <Link
    href={href}
    className={`group flex flex-col items-center gap-0.5 rounded-xl px-4 py-2 transition
        ${
          active
            ? "font-extrabold tracking-wide"
            : "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
        }
      `}
  >
    <span
      className={`text-[22px] transition ${active ? "text-indigo-500" : ""}`}
    >
      {icon}
    </span>

    <span
      className={`text-[11px] opacity-80 ${
        active
          ? "bg-linear-to-r from-indigo-800 via-purple-800 to-pink-800 bg-clip-text text-transparent"
          : ""
      }`}
    >
      {label}
    </span>
  </Link>
);
