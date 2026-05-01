"use client";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Celebrities", href: "#celebrities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 shadow-luxury" : "bg-transparent py-5"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,105,180,0.15)",
            }
          : {}
      }
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNav("#home")}
          whileHover={{ scale: 1.02 }}
          data-ocid="navbar.logo"
        >
          <Sparkles className="w-5 h-5 text-primary" />
          <div>
            <div className="text-serif-display text-xl gradient-text leading-tight">
              Belleza Glamorous
            </div>
            <div
              className="text-xs tracking-widest uppercase font-body"
              style={{ color: "#B05080" }}
            >
              Makeup Studio
            </div>
          </div>
        </motion.div>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          data-ocid="navbar.nav"
        >
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm font-medium transition-smooth rounded-full hover:bg-primary/10"
              style={{ color: "#4A1030" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.3 }}
              whileHover={{ scale: 1.05, color: "#FF1493" }}
              data-ocid={`navbar.link.${i + 1}`}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => handleNav("#appointment")}
            className="text-white font-semibold px-6 py-2 rounded-full border-0 hover:scale-105 transition-smooth"
            style={{
              background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
              boxShadow:
                "0 0 20px rgba(255,20,147,0.4), 0 4px 12px rgba(255,105,180,0.3)",
            }}
            data-ocid="navbar.book_button"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-smooth"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="navbar.hamburger_button"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6" style={{ color: "#4A1030" }} />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t shadow-luxury"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(24px)",
              borderColor: "rgba(255,105,180,0.2)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium rounded-xl hover:bg-primary/10 transition-smooth"
                  style={{ color: "#4A1030" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  data-ocid={`navbar.mobile.link.${i + 1}`}
                >
                  {link.label}
                </motion.button>
              ))}
              <Button
                onClick={() => handleNav("#appointment")}
                className="mt-2 text-white font-semibold rounded-full border-0"
                style={{
                  background:
                    "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
                }}
                data-ocid="navbar.mobile.book_button"
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
