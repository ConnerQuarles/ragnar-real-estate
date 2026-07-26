import { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RagnarMark from "../ui/RagnarMark";
import { CallOrTextButton } from "../ui/CTAButton";
import { NAV_PRIMARY, NAV_FORECLOSURE_GROUP, NAV_PROBATE_GROUP } from "../../lib/constants";

function TabLink({ label, path }: { label: string; path: string }) {
  return (
    <RouterNavLink
      to={path}
      className={({ isActive }) =>
        `nowrap-tab text-base font-medium transition-colors duration-200 ${
          isActive ? "text-gold-600" : "text-fog-100 hover:text-ink"
        }`
      }
    >
      {label}
    </RouterNavLink>
  );
}

/** Same color treatment as the other tabs — just a slightly heavier weight
 * so it reads as its own path, not another item in a list. Points at the
 * fair-offer page. */
function SellTabLink() {
  return (
    <RouterNavLink
      to="/fair-offer"
      className={({ isActive }) =>
        `nowrap-tab text-base font-semibold transition-colors duration-200 ${
          isActive ? "text-gold-600" : "text-fog-100 hover:text-ink"
        }`
      }
    >
      I want to sell my home
    </RouterNavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/80 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12 2xl:px-16">
        <Link to="/" className="shrink-0">
          <RagnarMark className="h-14 sm:h-16" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-3 2xl:flex" aria-label="Primary">
          {NAV_PRIMARY.map((link) => (
            <TabLink key={link.path} {...link} />
          ))}

          <span className="h-5 w-px bg-ink/15" />

          <div className="flex items-center gap-2.5">
            {NAV_FORECLOSURE_GROUP.map((link, i) => (
              <span key={link.path} className="flex items-center gap-2.5">
                {i > 0 && <span className="h-4 w-px bg-ink/10" />}
                <TabLink {...link} />
              </span>
            ))}
          </div>

          <span className="mx-1 h-6 w-px bg-gold-500/40" />

          <div className="flex items-center gap-2.5">
            {NAV_PROBATE_GROUP.map((link, i) => (
              <span key={link.path} className="flex items-center gap-2.5">
                {i > 0 && <span className="h-4 w-px bg-ink/10" />}
                <TabLink {...link} />
              </span>
            ))}
          </div>

          <span className="mx-1 h-6 w-px bg-gold-500/40" />

          <SellTabLink />
        </nav>

        <div className="hidden 2xl:block">
          <CallOrTextButton />
        </div>

        {/* Mobile/tablet toggle */}
        <button
          type="button"
          className="2xl:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="2xl:hidden border-t border-ink/5 bg-paper/95 px-6 py-5">
          <nav className="flex flex-col gap-4" aria-label="Primary mobile">
            {NAV_PRIMARY.map((link) => (
              <TabLink key={link.path} {...link} />
            ))}
            <p className="mt-2 text-xs uppercase tracking-wider text-fog">Foreclosure</p>
            {NAV_FORECLOSURE_GROUP.map((link) => (
              <TabLink key={link.path} {...link} />
            ))}
            <p className="mt-2 text-xs uppercase tracking-wider text-fog">Probate</p>
            {NAV_PROBATE_GROUP.map((link) => (
              <TabLink key={link.path} {...link} />
            ))}
            <span className="mt-2 h-px w-full bg-ink/10" />
            <SellTabLink />
            <CallOrTextButton className="mt-2 w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}
