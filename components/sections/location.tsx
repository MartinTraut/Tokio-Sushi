"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/constants";

export function LocationSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Standort"
          title="Besuche uns in Heilbronn"
          description="Mitten in der Innenstadt – komm vorbei und genieße frisches Sushi vor Ort."
        />

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden border border-border"
          >
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${RESTAURANT.address.googleMapsQuery}&zoom=16`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tokio Sushi Standort"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    Adresse
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {RESTAURANT.address.street}
                    <br />
                    {RESTAURANT.address.zip} {RESTAURANT.address.city}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${RESTAURANT.address.googleMapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline"
                  >
                    <Navigation className="h-4 w-4" />
                    Route planen
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    Telefon
                  </h3>
                  <a
                    href={RESTAURANT.phoneLink}
                    className="mt-1 text-2xl font-bold text-primary hover:underline"
                  >
                    {RESTAURANT.phoneFormatted}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Für Bestellungen & Reservierungen
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg">
                    Öffnungszeiten
                  </h3>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {RESTAURANT.openingHours.weekdays.days}
                      </span>
                      <span className="text-foreground font-medium">
                        {RESTAURANT.openingHours.weekdays.hours}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {RESTAURANT.openingHours.weekend.days}
                      </span>
                      <span className="text-foreground font-medium">
                        {RESTAURANT.openingHours.weekend.hours}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-500 font-medium">
                          {RESTAURANT.openingHours.closed.name}
                        </span>
                        <span className="text-amber-500 font-medium">
                          {RESTAURANT.openingHours.closed.day}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
