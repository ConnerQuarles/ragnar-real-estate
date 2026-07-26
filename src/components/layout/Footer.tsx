import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import RagnarMark from "../ui/RagnarMark";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, SERVICE_AREA, FOOTER_LINKS } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/5 bg-paper-soft/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <RagnarMark className="h-12" />
            <p className="mt-3 max-w-xs text-sm text-fog">
              Helping Connecticut homeowners move forward with a fair, simple offer — on their timeline, with dignity.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a href={PHONE_TEL} className="flex items-center gap-2 text-fog-100 hover:text-gold-600 transition-colors">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-fog-100 hover:text-gold-600 transition-colors">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <p className="flex items-center gap-2 text-fog-100">
              <MapPin className="h-4 w-4" /> Serving all of {SERVICE_AREA}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className="text-fog hover:text-ink transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-ink/5 pt-6 text-center text-xs text-fog">
          © {new Date().getFullYear()} Ragnar Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
