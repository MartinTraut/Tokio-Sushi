"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { MENU_ITEMS } from "@/lib/constants";

const popularItems = MENU_ITEMS.filter((item) => item.popular).slice(0, 6);

export function BestsellersSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Unsere Bestseller"
          title="Das lieben unsere Gäste"
          description="Entdecke die beliebtesten Gerichte unserer Speisekarte – frisch zubereitet mit besten Zutaten."
        />

        {/* Products Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Popular Badge */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                <Star className="h-3 w-3 fill-current" />
                <span>Beliebt</span>
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={`https://images.unsplash.com/photo-${
                    [
                      "1579871494447-9811cf80d66c",
                      "1617196034796-73dfa7b1fd56",
                      "1553621042-f6e147245754",
                      "1611143669185-af224c5e3252",
                      "1580822184713-fc5400e7fe10",
                      "1559410545-0bdcd187e0a6",
                    ][index % 6]
                  }?w=600&h=600&fit=crop`}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {item.price.toFixed(2).replace(".", ",")} €
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/speisekarte">
            <Button size="lg" variant="outline">
              Komplette Speisekarte
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
