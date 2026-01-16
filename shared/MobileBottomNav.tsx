"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiOutlineHome,
} from "react-icons/hi";
import { BsBoxSeam, BsBoxSeamFill } from "react-icons/bs";
import { FiInfo, FiPhone } from "react-icons/fi";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-1 left-0 right-0 z-50 md:hidden">
      <div className="mx-auto w-ull px-2 ">
        <div className="flex  justify-between rounded-full bg-white/90 border dark:border-neutral-200 border-neutral-100 px-6 w-full pt-3 pb-1 shadow-xl backdrop-blur-xl dark:bg-black/90">
          <Item
            href="/"
            label="Home"
            active={pathname === "/"}
            icon={<HiOutlineHome />}
            iconActive={<HiHome />}
          />
          <Item
            href="/products"
            label="Products"
            active={pathname === "/products"}
            icon={<BsBoxSeam />}
            iconActive={<BsBoxSeamFill />}
          />
          <Item
            href="/about"
            label="About"
            active={pathname === "/about"}
            icon={<FiInfo />}
            iconActive={<FaCircleExclamation />}
          />
          <Item
            href="/contact"
            label="Contact"
            active={pathname === "/contact"}
            icon={<FiPhone />}
            iconActive={<FaPhoneAlt />}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;

const Item = ({
  href,
  label,
  icon,
  iconActive,
  active,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  active: boolean;
}) => (
  <Link
    href={href}
    className={`flex flex-1 flex-col items-center gap-1 transition ${
      active
        ? "font-semibold text-black dark:text-white"
        : "text-gray-600 dark:text-gray-400"
    }`}
  >
    <span className="text-2xl">{active ? iconActive : icon}</span>
    <span className="text-[11px]">{label}</span>
  </Link>
);
