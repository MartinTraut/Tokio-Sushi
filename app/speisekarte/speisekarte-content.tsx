"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sushiImages = [
  "1579871494447-9811cf80d66c",
  "1617196034796-73dfa7b1fd56",
  "1553621042-f6e147245754",
  "1611143669185-af224c5e3252",
  "1580822184713-fc5400e7fe10",
  "1559410545-0bdcd187e0a6",
  "1583623025817-d180a2221d0a",
  "1562802378-063ec186a863",
];

export function SpeisekarteContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Unsere <span className="text-primary">Speisekarte</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Frisches Sushi, handgemacht mit Liebe und den besten Zutaten.
              Entdecke unsere vielfältige Auswahl.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 sm:top-20 z-40 py-4 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-muted-foreground mr-2 flex-shrink-0">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium hidden sm:inline">
                Filter:
              </span>
            </div>
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0",
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted"
              )}
            >
              Alle
            </button>
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-muted"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          {activeCategory !== "all" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground">
                {
                  MENU_CATEGORIES.find((c) => c.id === activeCategory)?.name
                }
              </h2>
              <p className="text-muted-foreground">
                {
                  MENU_CATEGORIES.find((c) => c.id === activeCategory)
                    ?.description
                }
              </p>
            </motion.div>
          )}

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Beliebt</span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        sushiImages[index % sushiImages.length]
                      }?w=400&h=400&fit=crop`}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-primary whitespace-nowrap">
                        {item.price.toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Keine Gerichte in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Appetit bekommen?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Bestelle jetzt online oder ruf uns an für Abholung und Lieferung.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bestellen">
              <Button size="lg" className="w-full sm:w-auto">
                <ShoppingBag className="h-5 w-5" />
                Jetzt bestellen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
