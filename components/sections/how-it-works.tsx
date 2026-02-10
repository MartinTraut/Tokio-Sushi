"use client";

import { motion } from "framer-motion";
import { MousePointer2, ChefHat, Bike } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: MousePointer2,
    number: "01",
    title: "Online bestellen",
    description:
      "Wähle deine Lieblingsgerichte aus unserer Speisekarte und bestelle bequem online oder per Telefon.",
  },
  {
    icon: ChefHat,
    number: "02",
    title: "Frisch zubereitet",
    description:
      "Unsere Sushi-Meister bereiten deine Bestellung mit frischen Zutaten und viel Liebe zum Detail zu.",
  },
  {
    icon: Bike,
    number: "03",
    title: "Abholung & Lieferung",
    description:
      "Hol deine Bestellung ab oder lass sie dir schnell und warm nach Hause liefern.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="So funktioniert's"
          title="In 3 Schritten zu deinem Sushi"
          description="Einfacher geht's nicht – von der Bestellung bis zum Genuss."
        />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
