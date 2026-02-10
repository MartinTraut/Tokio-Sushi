"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  className?: string;
}

export function FoodCard({
  name,
  description,
  price,
  image,
  popular = false,
  className,
}: FoodCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
          <Star className="h-3 w-3 fill-current" />
          <span>Beliebt</span>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {price.toFixed(2).replace(".", ",")} €
          </span>
        </div>
      </div>
    </motion.div>
  );
}
