import React, { useEffect, useState } from "react";
import { Mail, Twitter, Instagram, Github, Users } from "lucide-react";
import { motion } from "framer-motion";

// ComingSoon.jsx
// A very catchy, responsive, Tailwind-based Coming Soon component
// Uses framer-motion for smooth entrance animations and a live countdown timer.

export default function ComingSoon({ launchDate = "2025-09-15T00:00:00Z" }) {
  const target = new Date(launchDate).getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    document.title = "Coming Soon | RecoSys";
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // optional for smooth scroll
    });
  }, []);

  function getTimeLeft() {
    const now = Date.now();
    const delta = Math.max(0, target - now);
    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((delta / (1000 * 60)) % 60);
    const seconds = Math.floor((delta / 1000) % 60);
    return { days, hours, minutes, seconds, finished: delta <= 0 };
  }

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, [launchDate]);

  function format(num) {
    return String(num).padStart(2, "0");
  }

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    // placeholder: integrate with your API / mail service
    setSubscribed(true);
    console.log("subscribe request for:", email);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6">
      <div className="relative max-w-4xl w-full">
        {/* Decorative floating shapes */}
        <div className="pointer-events-none absolute -top-10 -left-10 opacity-30 transform rotate-12">
          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#ff7a18" />
                <stop offset="1" stopColor="#ffb347" />
              </linearGradient>
            </defs>
            <circle cx="110" cy="110" r="110" fill="url(#g1)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-orange-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left hero */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.h1
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-orange-600"
              >
                Something amazing is coming
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-gray-700 max-w-md"
              >
                We’re crafting a delightful experience for you. Join the early
                list to get updates, exclusive access, and launch perks.
              </motion.p>

              <div className="mt-8">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <CountdownBox label="Days" value={timeLeft.days} />
                  <CountdownBox label="Hours" value={timeLeft.hours} />
                  <CountdownBox label="Minutes" value={timeLeft.minutes} />
                  <CountdownBox label="Seconds" value={timeLeft.seconds} />
                </div>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="mt-8 flex flex-col sm:flex-row items-stretch gap-3"
              >
                <div className="flex-1 min-w-0">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-orange-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md"
                >
                  <Mail size={16} />
                  {subscribed ? "You're in!" : "Notify me"}
                </button>
              </form>

              <div className="mt-6 flex items-center gap-4 text-gray-600">
                <Users size={18} />
                <span className="text-sm">Join 3,421 early supporters</span>
              </div>

              <motion.div
                className="mt-6 flex gap-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <SocialIcon label="Twitter" icon={<Twitter size={18} />} />
                <SocialIcon label="Instagram" icon={<Instagram size={18} />} />
                <SocialIcon label="Github" icon={<Github size={18} />} />
              </motion.div>
            </div>

            {/* Right hero image */}
            <div className="relative h-64 md:h-auto md:min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
                alt="Hero pattern"
                className="object-cover w-full h-full"
              />

              <div className="absolute left-4 bottom-4 bg-white/70 backdrop-blur rounded-xl p-4 border border-orange-50 shadow">
                <div className="text-sm font-medium text-gray-700">
                  Sneak Peek
                </div>
                <div className="text-xs text-gray-500">
                  Design previews, early offers & beta
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Prefer a private launch? Reply and tell us how we can help.
        </div>
      </div>
    </div>
  );
}

function CountdownBox({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl px-3 py-2 shadow-sm border border-orange-50">
      <div className="text-2xl font-bold text-orange-600">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function SocialIcon({ label, icon }) {
  return (
    <button
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-orange-100 bg-white/90 shadow-sm hover:scale-105 transition-transform"
    >
      {icon}
    </button>
  );
}
