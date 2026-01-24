"use client";

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";

const questions = [
  {
    q: "Does this AC work on low voltage?",
    a: "Yes. It operates reliably between 140V and 260V without requiring an external stabilizer.",
  },
  {
    q: "Is installation included with the product?",
    a: "Installation is not included. Charges depend on the authorized service provider.",
  },
  {
    q: "Is this suitable for Bangladeshi weather?",
    a: "Yes. It is designed for tropical climates and performs well in high heat and humidity.",
  },
  {
    q: "What type of warranty is provided?",
    a: "Official brand warranty is provided on the compressor and essential parts.",
  },
];

const QA = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [question, setQuestion] = useState("");

  return (
    <div className="max-w-4xl space-y-10">
      <div className="space-y-2">
        {questions.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-white border shadow-sm"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-semibold text-neutral-900">
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={`transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="px-5 pb-4 text-sm text-neutral-600 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white border p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Ask a Question
        </h3>

        <div className="mt-4 flex gap-3">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Write your question about this product"
            className="flex-1 rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            className="flex cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition"
          >
            <Send size={16} />
            Submit
          </button>
        </div>

        <p className="mt-2 text-xs text-neutral-500">
          Questions are answered by our support team within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default QA;
