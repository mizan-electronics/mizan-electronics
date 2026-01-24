"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, X } from "lucide-react";

const reviews = [
  {
    name: "Rahim Hossain",
    location: "Dhaka",
    rating: 5,
    photo: "https://i.pravatar.cc/100?img=12",
    text:
      "Cooling performance is excellent even during peak summer. Electricity bill has reduced noticeably.",
  },
  {
    name: "Tanvir Ahmed",
    location: "Chattogram",
    rating: 4,
    photo: "https://i.pravatar.cc/100?img=32",
    text:
      "Very low noise and stable cooling. Works fine without stabilizer.",
  },
  {
    name: "Sabbir Khan",
    location: "Rajshahi",
    rating: 5,
    photo: "https://i.pravatar.cc/100?img=45",
    text:
      "Installation was smooth and cooling is very fast.",
  },
  {
    name: "Nafisa Rahman",
    location: "Dhaka",
    rating: 5,
    photo: "https://i.pravatar.cc/100?img=22",
    text:
      "Comfortable cooling and looks premium.",
  },
  {
    name: "Imran Hasan",
    location: "Sylhet",
    rating: 4,
    photo: "https://i.pravatar.cc/100?img=56",
    text:
      "Good performance for the price range.",
  },
  {
    name: "Arif Mahmud",
    location: "Khulna",
    rating: 5,
    photo: "https://i.pravatar.cc/100?img=60",
    text:
      "Very satisfied with energy efficiency.",
  },
];

const Reviews = () => {
  const [open, setOpen] = useState(false);
  const visibleReviews = reviews.slice(0, 5);

  return (
    <>
      <div className="space-y-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-5xl font-extrabold text-neutral-900">4.7</span>
          <div className="mt-2 flex text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="fill-yellow-500" />
            ))}
          </div>
          <p className="mt-1 text-sm text-neutral-500">
            Based on {reviews.length} verified reviews
          </p>
        </div>

        <div className="grid gap-3">
          {visibleReviews.map((review, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={review.photo}
                  alt={review.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {review.location}
                  </p>
                </div>
                <div className="flex text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-500" />
                  ))}
                </div>
              </div>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {reviews.length > 5 && (
          <button
            onClick={() => setOpen(true)}
            className="mx-auto block bg-neutral-800 cursor-pointer text-white rounded-full border px-6 py-2 text-sm font-semibold  shadow-sm transition hover:bg-black"
          >
            View all reviews
          </button>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute cursor-pointer right-4 top-4 text-neutral-500 hover:text-black"
            >
              <X size={18} />
            </button>

            <h3 className="mb-6 text-xl font-semibold text-neutral-900">
              Customer Reviews
            </h3>

            <div className="max-h-[60vh] space-y-2 overflow-y-auto pr-2">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-5"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.photo}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900">
                        {review.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {review.location}
                      </p>
                    </div>
                    <div className="flex text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
