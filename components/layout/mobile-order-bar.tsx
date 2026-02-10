"use client";

import Link from "next/link";
import { Phone, ShoppingBag } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";

export function MobileOrderBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border safe-area-inset-bottom">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={RESTAURANT.phoneLink}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-xl text-sm font-semibold active:scale-95 transition-transform"
        >
          <Phone className="h-5 w-5" />
          <span>Anrufen</span>
        </a>
        <Link
          href="/bestellen"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold active:scale-95 transition-transform shadow-lg shadow-primary/25"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Bestellen</span>
        </Link>
      </div>
    </div>
  );
}
