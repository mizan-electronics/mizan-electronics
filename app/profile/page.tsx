"use client";

import { JSX, useState } from "react";
import { motion } from "motion/react";
import {
  User,
  Package,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { ProfileDetails } from "@/components/profile/ProfileDetails";

const TABS = ["Profile", "Orders"] as const;
const ORDER_TABS = ["Ongoing", "Previous", "Cancelled"] as const;

export default function ProfilePage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Profile");
  const [orderTab, setOrderTab] =
    useState<(typeof ORDER_TABS)[number]>("Ongoing");

  return (
    <section className="pt-30 pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-10 text-3xl font-extrabold tracking-wide bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Account
        </h1>

        <div className="mb-4 flex gap-4">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`cursor-pointer flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold transition
                ${
                  tab === t
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-white text-neutral-700 hover:bg-neutral-100"
                }
              `}
            >
              {t === "Profile" ? <User size={16} /> : <Package size={16} />}
              {t}
            </button>
          ))}
        </div>

        {tab === "Profile" && <ProfileDetails />}
        {tab === "Orders" && (
          <>
            <div className="mb-8 flex gap-3">
              {ORDER_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setOrderTab(t)}
                  className={`cursor-pointer rounded-full px-5 py-1.5 text-xs font-semibold transition
                    ${
                      orderTab === t
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-neutral-600 hover:bg-neutral-100"
                    }
                  `}
                >
                  {t}
                </button>
              ))}
            </div>

            <Orders type={orderTab} />
          </>
        )}
      </div>
    </section>
  );
}





const orders = {
  Ongoing: [
    {
      id: "#ORD-1023",
      date: "Jan 22, 2026",
      total: "৳ 74,500",
      status: "Processing",
    },
  ],
  Previous: [
    {
      id: "#ORD-0911",
      date: "Dec 12, 2025",
      total: "৳ 68,900",
      status: "Delivered",
    },
  ],
  Cancelled: [
    {
      id: "#ORD-0834",
      date: "Nov 5, 2025",
      total: "৳ 92,500",
      status: "Cancelled",
    },
  ],
};

function Orders({ type }: { type: keyof typeof orders }) {
  return (
    <div className="space-y-4">
      {orders[type].map((o) => (
        <motion.div
          key={o.id}
          whileHover={{ y: -4 }}
          className="cursor-pointer rounded-xl bg-white p-5 shadow transition"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Package className="text-indigo-500" size={20} />
              <div>
                <p className="font-semibold">{o.id}</p>
                <p className="text-xs text-neutral-500">{o.date}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold text-indigo-600">{o.total}</p>
              <OrderStatus status={o.status} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function OrderStatus({ status }: { status: string }) {
  const map: Record<string, JSX.Element> = {
    Processing: (
      <span className="flex items-center gap-1 text-xs text-yellow-600">
        <Clock size={14} /> Processing
      </span>
    ),
    Delivered: (
      <span className="flex items-center gap-1 text-xs text-green-600">
        <CheckCircle size={14} /> Delivered
      </span>
    ),
    Cancelled: (
      <span className="flex items-center gap-1 text-xs text-red-600">
        <XCircle size={14} /> Cancelled
      </span>
    ),
  };

  return map[status];
}
