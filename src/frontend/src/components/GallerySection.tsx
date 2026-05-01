import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const GALLERY = [
  {
    id: 1,
    src: "/assets/bride-red-palace.png",
    alt: "Bridal Makeup — Bride in Red Lehenga at Palace",
    label: "Bridal Makeup",
    category: "Bridal",
  },
  {
    id: 2,
    src: "/assets/bride-pink-bokeh.png",
    alt: "Bridal Makeup — Bride in Pink Lehenga with Bokeh",
    label: "Bridal Look",
    category: "Bridal",
  },
  {
    id: 3,
    src: "/assets/bride-white-back.png",
    alt: "Bridal Makeup — Bride in White Lehenga",
    label: "Elegant Bridal",
    category: "Bridal",
  },
  {
    id: 4,
    src: "/assets/bride-pink-lehenga.png",
    alt: "Bridal Makeup — Bride in Pink Lehenga",
    label: "Pink Bridal",
    category: "Bridal",
  },
  {
    id: 5,
    src: "/assets/celebrity-award.png",
    alt: "Celebrity Work — Award Ceremony",
    label: "Celebrity Work",
    category: "Celebrity",
  },
  {
    id: 6,
    src: "/assets/bride-green-pink.png",
    alt: "Bridal Makeup — Bride in Green Pink Lehenga",
    label: "Fusion Bridal",
    category: "Bridal",
  },
  {
    id: 7,
    src: "/assets/bride-pink-anarkali.png",
    alt: "Bridal Makeup — Bride in Pink Anarkali",
    label: "Anarkali Glam",
    category: "Bridal",
  },
  {
    id: 8,
    src: "/assets/hair-bow.png",
    alt: "Hair Styling — Elegant Bow Style",
    label: "Hair Styling",
    category: "Hair",
  },
  {
    id: 9,
    src: "/assets/bride-red-heavy.png",
    alt: "Bridal Makeup — Heavy Bridal Red Lehenga",
    label: "Heavy Bridal",
    category: "Bridal",
  },
  {
    id: 10,
    src: "/assets/hair-flowers.png",
    alt: "Hair Styling — Floral Hair Art",
    label: "Floral Hair",
    category: "Hair",
  },
];

const CATS = ["All", "Bridal", "Celebrity", "Hair"];

export default function GallerySection() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof GALLERY)[number] | null>(
    null,
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const filtered =
    active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", update);
    update();
    return () => {
      emblaApi.off("select", update);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="gallery"
      className="relative py-28 overflow-hidden"
      data-ocid="gallery.section"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF0F5 40%, #FFF5F9 70%, #FFFFFF 100%)",
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,105,180,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
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
            <Sparkles className="w-3.5 h-3.5" /> Portfolio
          </div>
          <h2
            className="text-serif-display text-4xl sm:text-5xl lg:text-6xl mb-4"
            style={{
              background:
                "linear-gradient(135deg, #FF1493 0%, #FF69B4 50%, #FFB6D9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255,20,147,0.2))",
            }}
          >
            Our Work Gallery
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-4 h-4 text-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B2040" }}>
            A curated showcase of our finest work — each look tells a story of
            beauty and transformation
          </p>
        </motion.div>

        {/* Filter */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          data-ocid="gallery.filter_tabs"
        >
          {CATS.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-smooth"
              style={
                active === cat
                  ? {
                      background: "linear-gradient(135deg, #FF1493, #FF69B4)",
                      color: "white",
                      boxShadow: "0 0 20px rgba(255,20,147,0.4)",
                    }
                  : {
                      background: "rgba(255,255,255,0.85)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,105,180,0.3)",
                      color: "#FF1493",
                    }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-ocid={`gallery.filter.${cat.toLowerCase()}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Embla Carousel */}
        <div className="relative" data-ocid="gallery.carousel">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-4">
              {filtered.map((img, i) => (
                <motion.div
                  key={`${img.id}-${active}`}
                  className="flex-none w-[280px] sm:w-[320px] md:w-[360px] relative rounded-2xl overflow-hidden group cursor-pointer"
                  style={{
                    border: "1px solid rgba(255,105,180,0.3)",
                    boxShadow: "0 8px 32px rgba(255,105,180,0.1)",
                    background: "#FFF5F9",
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 12px 48px rgba(255,105,180,0.25)",
                  }}
                  onClick={() => setLightbox(img)}
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth flex flex-col items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,20,147,0.5), rgba(255,105,180,0.65))",
                      }}
                    >
                      <span className="text-white text-lg font-bold text-serif-display mb-2">
                        View
                      </span>
                      <span
                        className="text-xs px-3 py-1 rounded-full font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.3)",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.5)",
                        }}
                      >
                        {img.label}
                      </span>
                    </div>
                  </div>
                  {/* Label bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(255,240,247,0.95) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "#FF1493" }}
                    >
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous"
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-smooth disabled:opacity-30"
            style={{
              background: "linear-gradient(135deg, #FF1493, #FF69B4)",
              boxShadow: "0 0 20px rgba(255,20,147,0.4)",
            }}
            data-ocid="gallery.pagination_prev"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next"
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-smooth disabled:opacity-30"
            style={{
              background: "linear-gradient(135deg, #FF1493, #FF69B4)",
              boxShadow: "0 0 20px rgba(255,20,147,0.4)",
            }}
            data-ocid="gallery.pagination_next"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Grid below carousel */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8"
          data-ocid="gallery.grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {GALLERY.map((img, i) => (
            <motion.div
              key={img.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              style={{
                border: "1px solid rgba(255,105,180,0.25)",
                boxShadow: "0 4px 16px rgba(255,105,180,0.08)",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 24px rgba(255,20,147,0.35)",
              }}
              onClick={() => setLightbox(img)}
              data-ocid={`gallery.thumb.${i + 1}`}
            >
              <div className="aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-2"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255,20,147,0.55), transparent)",
                  }}
                >
                  <span className="text-[10px] text-white font-semibold">
                    {img.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(255,240,247,0.92)",
            backdropFilter: "blur(20px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          data-ocid="gallery.dialog"
        >
          <motion.div
            className="relative max-w-lg w-full"
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                border: "2px solid rgba(255,105,180,0.5)",
                boxShadow:
                  "0 0 60px rgba(255,20,147,0.35), 0 20px 60px rgba(255,105,180,0.2)",
              }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto object-cover max-h-[80vh]"
              />
            </div>
            <div className="mt-3 text-center">
              <span
                className="text-sm font-semibold"
                style={{ color: "#FF1493" }}
              >
                {lightbox.label}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg transition-smooth hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #FF1493, #FF69B4)",
                boxShadow: "0 4px 20px rgba(255,20,147,0.5)",
              }}
              data-ocid="gallery.close_button"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
