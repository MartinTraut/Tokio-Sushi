"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Jetzt bestellen
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Bereit für frisches
            <br />
            <span className="text-primary">Sushi?</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Bestelle jetzt online oder ruf uns an. Wir freuen uns auf deine
            Bestellung und bereiten alles frisch für dich zu.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/bestellen">
              <Button size="xl" className="w-full sm:w-auto">
                <ShoppingBag className="h-5 w-5" />
                Online bestellen
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={RESTAURANT.phoneLink}>
              <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                {RESTAURANT.phoneFormatted}
              </Button>
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Auch auf{" "}
            <a
              href={RESTAURANT.links.lieferando}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8000] font-medium hover:underline"
            >
              Lieferando
            </a>{" "}
            bestellbar
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
