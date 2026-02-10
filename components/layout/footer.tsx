import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { RESTAURANT, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo-full.png"
                alt="Tokio Sushi Asia Fusion"
                width={160}
                height={70}
                className={cn(
                  "h-16 w-auto object-contain transition-all duration-300",
                  "drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]",
                  "group-hover:drop-shadow-[0_4px_12px_rgba(196,30,58,0.3)]"
                )}
              />
            </Link>
            <p className="mt-5 text-sm text-white/50 leading-relaxed">
              {RESTAURANT.tagline}
              <br />
              Premium Sushi & Asia Fusion in Heilbronn.
            </p>
            <a
              href={RESTAURANT.links.lieferando}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-[#FF8000] text-white rounded-lg text-sm font-medium hover:bg-[#e67300] transition-colors"
            >
              <span>Lieferando</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Öffnungszeiten
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 text-primary/70 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white/80">{RESTAURANT.openingHours.weekdays.days}</p>
                  <p className="text-white/50">{RESTAURANT.openingHours.weekdays.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 text-primary/70 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white/80">{RESTAURANT.openingHours.weekend.days}</p>
                  <p className="text-white/50">{RESTAURANT.openingHours.weekend.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                <Clock className="h-4 w-4 mt-0.5 text-amber-500/70 flex-shrink-0" />
                <div>
                  <p className="font-medium text-amber-500/90">{RESTAURANT.openingHours.closed.name}</p>
                  <p className="text-white/50">{RESTAURANT.openingHours.closed.day}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${RESTAURANT.address.googleMapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/50 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 text-primary/70 flex-shrink-0" />
                  <span>
                    {RESTAURANT.address.street}<br />
                    {RESTAURANT.address.zip} {RESTAURANT.address.city}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT.phoneLink}
                  className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary/70 flex-shrink-0" />
                  <span className="font-medium">{RESTAURANT.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${RESTAURANT.email}`}
                  className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary/70 flex-shrink-0" />
                  <span>{RESTAURANT.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>&copy; {currentYear} {RESTAURANT.name}. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-5">
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
