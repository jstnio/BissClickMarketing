import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = [
  { href: "/", label: "nav.home" },
  { href: "/services", label: "nav.services" },
  { href: "/portfolio", label: "nav.portfolio" },
  { href: "/about", label: "nav.about" },
  { href: "/chat", label: "nav.chat" },
  { href: "/contact", label: "nav.contact" }
];

export function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-primary cursor-pointer">BissClick</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    location === link.href
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {t(link.label)}
                </span>
              </Link>
            ))}
            <LanguageSwitcher />
            <Button asChild>
              <Link href="/contact">
                <span>{t('nav.getStarted')}</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    location === link.href
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.label)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}