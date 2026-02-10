"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { NAV_ITEMS, RESTAURANT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-white/[0.05]"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 z-10 group">
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Image
                src="/logo-icon.png"
                alt="Tokio Sushi"
                width={64}
                height={64}
                className={cn(
                  "h-12 w-12 sm:h-14 sm:w-14 object-contain transition-all duration-300",
                  "drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]",
                  "group-hover:drop-shadow-[0_4px_20px_rgba(196,30,58,0.5)]"
                )}
                priority
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-wide text-white">
                  TOKIO
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-wide text-primary">
                  SUSHI
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.25em] text-white/50 uppercase">
                Asia Fusion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-[13px] font-medium text-white/70 hover:text-white transition-colors"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-3/4 hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={RESTAURANT.phoneLink}
              className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{RESTAURANT.phoneFormatted}</span>
            </a>
            <Link
              href="/bestellen"
              className="flex items-center gap-2 px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-[13px] font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Bestellen</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Menü"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <nav className="px-4 py-5 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/80 hover:text-primary transition-colors py-3 px-3 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.04 }}
                className="pt-4 mt-3 border-t border-white/10 space-y-3"
              >
                <a
                  href={RESTAURANT.phoneLink}
                  className="flex items-center gap-3 text-base font-medium text-white/70 hover:text-primary transition-colors py-2 px-3"
                >
                  <Phone className="h-5 w-5" />
                  <span>{RESTAURANT.phoneFormatted}</span>
                </a>
                <Link
                  href="/bestellen"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-primary text-white rounded-xl text-base font-semibold"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Jetzt bestellen</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
