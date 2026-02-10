"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent mb-6"
            >
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">
                Frisch & handgemacht – jeden Tag
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
              Frisches Sushi.
              <br />
              <span className="text-primary">Asia Fusion.</span>
              <br />
              Heilbronn.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Premium Sushi & Asia Fusion in Heilbronn.
              <br className="hidden sm:block" />
              Abholung & Lieferung – täglich frisch für dich zubereitet.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/bestellen">
                <Button size="xl" className="w-full sm:w-auto">
                  <ShoppingBag className="h-5 w-5" />
                  Jetzt online bestellen
                </Button>
              </Link>
              <Link href="/speisekarte">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Speisekarte ansehen
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Jetzt geöffnet</span>
              </div>
              <div>
                <span className="text-foreground font-medium">
                  {RESTAURANT.address.street}
                </span>
              </div>
              <div>
                <a
                  href={RESTAURANT.phoneLink}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {RESTAURANT.phoneFormatted}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl scale-110" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=800&fit=crop"
                  alt="Premium Sushi von Tokio Sushi Heilbronn"
                  width={800}
                  height={800}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 512px"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:bottom-8 sm:left-0 bg-card border border-border rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🍣</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Täglich frisch
                    </p>
                    <p className="font-semibold text-foreground">
                      100% Qualität
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-4 -right-4 sm:top-8 sm:right-0 bg-card border border-border rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">4.8</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Kundenbewertung
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
