import { ChevronDown, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FAQS = [
  {
    id: 1,
    q: "How far in advance should I book?",
    a: "We recommend booking 2-3 months in advance for bridal makeup, especially for peak wedding seasons (October–February). For party makeup, 1-2 weeks notice is usually sufficient.",
  },
  {
    id: 2,
    q: "Do you offer trial sessions?",
    a: "Yes, we highly recommend a bridal trial 1-2 weeks before your wedding day. This allows us to perfect your look, test product compatibility with your skin, and make any adjustments for your big day.",
  },
  {
    id: 3,
    q: "What makeup brands do you use?",
    a: "We use only premium international brands like MAC, NARS, Charlotte Tilbury, Huda Beauty, Armani Beauty, and other luxury cosmetics to ensure the best, long-lasting results.",
  },
  {
    id: 4,
    q: "How long does bridal makeup take?",
    a: "Full bridal makeup typically takes 2-3 hours. We recommend scheduling enough time so you're relaxed and stress-free on your big day. Party makeup usually takes 1-1.5 hours.",
  },
  {
    id: 5,
    q: "Do you travel to venues?",
    a: "Yes, we provide on-location services for weddings, pre-wedding shoots, and events throughout Vadodara and surrounding areas. Travel charges may apply based on distance.",
  },
  {
    id: 6,
    q: "What is your pricing?",
    a: "Our pricing starts at ₹2,500 for bridal makeup. Packages are available for complete wedding day coverage including trial, ceremony, and reception. Contact us for a customized quote.",
  },
  {
    id: 7,
    q: "Do you also do hair styling?",
    a: "Yes! We offer complete bridal packages including expert hair styling using the latest techniques and premium hair products, from elegant updos to intricate braids.",
  },
  {
    id: 8,
    q: "Can you create the exact look I want?",
    a: "Absolutely! We work closely with you to understand your vision, preferences, and outfit details to create a personalized look that perfectly complements your features and style.",
  },
  {
    id: 9,
    q: "Is skin prep included?",
    a: "Yes, we include thorough skin preparation including cleansing, toning, priming, and moisturizing before applying makeup for the best results and longest wear.",
  },
  {
    id: 10,
    q: "Do you have any celebrity collaborations?",
    a: "Yes! Our studio has had the privilege of working with celebrated Bollywood personalities and receiving recognition from industry celebrities — a testament to our expertise and artistry.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: { faq: (typeof FAQS)[number]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        background: isOpen ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: isOpen
          ? "1.5px solid rgba(255,20,147,0.4)"
          : "1px solid rgba(255,105,180,0.3)",
        boxShadow: isOpen
          ? "0 8px 40px rgba(255,20,147,0.15), -3px 0 0 #FF1493"
          : "0 4px 20px rgba(255,105,180,0.08)",
        transition: "all 0.3s ease",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-smooth hover:bg-primary/5"
        onClick={onToggle}
        aria-expanded={isOpen}
        data-ocid={`faq.toggle.${faq.id}`}
      >
        <span
          className="font-semibold text-sm sm:text-base pr-4"
          style={{ color: isOpen ? "#FF1493" : "#2D0020" }}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <div
                className="h-px mb-4"
                style={{ background: "rgba(255,105,180,0.2)" }}
              />
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4A1030" }}
              >
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section
      id="faq"
      className="relative py-28 overflow-hidden"
      data-ocid="faq.section"
      style={{
        background:
          "linear-gradient(180deg, #FFF0F5 0%, #FFF8FC 50%, #FFF0F5 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.25) 0%, transparent 70%)",
          transform: "translate(-50%,-50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
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
            <Sparkles className="w-3.5 h-3.5" /> FAQ
          </div>
          <h2 className="text-serif-display text-4xl sm:text-5xl gradient-text mb-4">
            Frequently Asked Questions
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
            Everything you need to know before booking your beauty experience
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3" data-ocid="faq.list">
          {FAQS.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm mb-5" style={{ color: "#6B2040" }}>
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/919408626660"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-smooth"
            style={{
              background: "linear-gradient(135deg, #FF1493, #FF69B4)",
              boxShadow: "0 0 24px rgba(255,20,147,0.4)",
            }}
            data-ocid="faq.whatsapp_button"
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
