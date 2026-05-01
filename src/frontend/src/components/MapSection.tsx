import { Clock, Instagram, MapPin, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const CONTACT_INFO = [
  {
    id: "address",
    icon: MapPin,
    title: "Studio Address",
    lines: ["Kagdiwada, Raopura,", "Jambubet, Vadodara,", "Gujarat – 390001"],
    color: "#FF1493",
    href: "https://maps.google.com/?q=Raopura+Vadodara+Gujarat",
  },
  {
    id: "phone",
    icon: Phone,
    title: "Phone / Call Us",
    lines: ["09408626660"],
    color: "#FF69B4",
    href: "tel:09408626660",
  },
  {
    id: "hours",
    icon: Clock,
    title: "Studio Hours",
    lines: ["Mon – Sat: 8AM – 8PM", "Sunday: By Appointment"],
    color: "#FF1493",
    href: undefined,
  },
  {
    id: "instagram",
    icon: Instagram,
    title: "Instagram",
    lines: ["@bellezaglamorous"],
    color: "#FF69B4",
    href: "https://www.instagram.com/bellezaglamorous",
  },
];

export default function MapSection() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      data-ocid="map.section"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF5F9 50%, #FFF0F5 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/4 right-10 w-80 h-80 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,105,180,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "rgba(255,105,180,0.4)",
              color: "#FF1493",
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Find Us
          </div>
          <h2 className="text-serif-display text-4xl sm:text-5xl gradient-text mb-4">
            Visit Our Studio
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-4 h-4 text-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p
            className="max-w-xl mx-auto text-lg leading-relaxed"
            style={{ color: "#6B2040" }}
          >
            Located in the heart of Vadodara — come experience our premium
            studio and meet our talented team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {CONTACT_INFO.map((item, i) => {
              const Icon = item.icon;
              const card = (
                <motion.div
                  key={item.id}
                  className="flex items-start gap-4 rounded-2xl p-5 transition-smooth"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,105,180,0.3)",
                    boxShadow: "0 4px 20px rgba(255,105,180,0.08)",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    x: 4,
                    boxShadow: "0 8px 32px rgba(255,105,180,0.18)",
                  }}
                  data-ocid={`map.contact_${item.id}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}35`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider gradient-text mb-1">
                      {item.title}
                    </div>
                    {item.lines.map((line) => (
                      <div
                        key={line}
                        className="text-sm"
                        style={{ color: "#4A1030" }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
              return item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                card
              );
            })}

            {/* Quick action buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href="tel:09408626660"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm transition-smooth hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,20,147,0.1), rgba(255,182,217,0.15))",
                  border: "1px solid rgba(255,105,180,0.4)",
                  color: "#FF1493",
                }}
                data-ocid="map.call_button"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href="https://wa.me/919408626660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm transition-smooth hover:scale-105"
                style={{
                  background: "rgba(74,222,128,0.1)",
                  border: "1px solid rgba(74,222,128,0.3)",
                  color: "#16a34a",
                }}
                data-ocid="map.whatsapp_button"
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            className="lg:col-span-3 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              border: "2px solid rgba(255,105,180,0.4)",
              boxShadow:
                "0 0 40px rgba(255,105,180,0.2), 0 20px 60px rgba(255,20,147,0.06)",
            }}
          >
            <iframe
              title="Belleza Glamorous Studio — Raopura, Vadodara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3534!2d73.18!3d22.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcef1b6fba041%3A0x0!2sRaopura%2C%20Vadodara%2C%20Gujarat%20390001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-ocid="map.iframe"
            />
          </motion.div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          className="mt-14 rounded-3xl p-8 sm:p-10 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #FF1493 0%, #FF69B4 50%, #FFB6D9 100%)",
            boxShadow:
              "0 20px 60px rgba(255,20,147,0.35), 0 0 40px rgba(255,105,180,0.2)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-serif-display text-2xl sm:text-3xl mb-3 font-bold">
            Ready for Your Transformation? ✨
          </h3>
          <p className="text-white/85 mb-6 max-w-md mx-auto text-base">
            Book your appointment today and step into your most beautiful self
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              className="bg-white font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-smooth hover:scale-105"
              style={{ color: "#FF1493" }}
              onClick={() => {
                document
                  .querySelector("#appointment")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              data-ocid="map.book_button"
            >
              Book Appointment
            </button>
            <a
              href="tel:09408626660"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/15 transition-smooth hover:scale-105"
              data-ocid="map.call_cta_button"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
