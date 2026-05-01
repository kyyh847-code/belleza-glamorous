import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Book Appointment", href: "#appointment" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LIST = [
  "Bridal Makeup",
  "Party Makeup",
  "Engagement Makeup",
  "Pre-Wedding Shoot",
  "Reception Makeup",
  "Hair Styling",
];

const PARTICLE_COUNT = 18;

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background:
          "linear-gradient(135deg, #FFF0F5 0%, #FFE4EF 30%, #FFF5F9 60%, #FFF0F5 80%, #FFFAF0 100%)",
        borderTop: "1px solid rgba(255,105,180,0.2)",
      }}
      data-ocid="footer.section"
    >
      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: PARTICLE_COUNT }, (_, i) => i).map((i) => (
          <motion.div
            key={`particle-footer-${i}`}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 4 : 3,
              height: i % 3 === 0 ? 4 : 3,
              background: i % 2 === 0 ? "#FF69B4" : "#FF1493",
              left: `${(i * 37 + 5) % 100}%`,
              top: `${(i * 53 + 10) % 100}%`,
              opacity: 0.3,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,105,180,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,20,147,0.15), rgba(255,182,217,0.25))",
                  border: "1px solid rgba(255,105,180,0.35)",
                }}
              >
                <Sparkles className="w-5 h-5" style={{ color: "#FF1493" }} />
              </div>
              <div>
                <div className="text-serif-display text-xl gradient-text font-bold">
                  Belleza Glamorous
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#B05080" }}
                >
                  Makeup Studio
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#6B2040" }}>
              Premium bridal and professional makeup artistry in the heart of
              Vadodara. Trusted by 500+ brides and 50+ celebrities.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bellezaglamorous"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background: "rgba(231,75,118,0.15)",
                  border: "1px solid rgba(231,75,118,0.35)",
                }}
                data-ocid="footer.instagram_link"
              >
                <FaInstagram className="w-4 h-4" style={{ color: "#E91E8C" }} />
              </a>
              <a
                href="https://wa.me/919408626660"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background: "rgba(74,222,128,0.12)",
                  border: "1px solid rgba(74,222,128,0.28)",
                }}
                data-ocid="footer.whatsapp_link"
              >
                <FaWhatsapp className="w-4 h-4 text-green-500" />
              </a>
              <a
                href="tel:09408626660"
                aria-label="Phone"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background: "rgba(255,20,147,0.12)",
                  border: "1px solid rgba(255,20,147,0.3)",
                }}
                data-ocid="footer.phone_link"
              >
                <FaPhone className="w-3.5 h-3.5" style={{ color: "#FF1493" }} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background: "rgba(59,89,152,0.12)",
                  border: "1px solid rgba(59,89,152,0.28)",
                }}
                data-ocid="footer.facebook_link"
              >
                <FaFacebook className="w-4 h-4 text-blue-500" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold gradient-text uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LIST.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-sm transition-smooth hover:text-primary text-left"
                    style={{ color: "#6B2040" }}
                    data-ocid={`footer.service.${s.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold gradient-text uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-smooth hover:text-primary text-left"
                    style={{ color: "#6B2040" }}
                    data-ocid={`footer.nav.${link.label.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold gradient-text uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm" style={{ color: "#6B2040" }}>
              <p className="leading-relaxed">
                Kagdiwada, Raopura,
                <br />
                Jambubet, Vadodara,
                <br />
                Gujarat – 390001
              </p>
              <p>
                <a
                  href="tel:09408626660"
                  className="transition-smooth hover:text-primary font-semibold"
                  style={{ color: "#FF1493" }}
                >
                  09408626660
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/919408626660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-smooth hover:text-primary"
                >
                  WhatsApp Us
                </a>
              </p>
              <p className="text-xs" style={{ color: "#B05080" }}>
                Mon–Sat: 8AM – 8PM
                <br />
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,105,180,0.4), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "#B05080" }}
        >
          <span>
            © {year} Belleza Glamorous Makeup Studio. All rights reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={`https://kavya=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth hover:text-primary font-semibold"
              style={{ color: "#FF69B4" }}
            >
            Designed BY Kavya Chaudhary
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
