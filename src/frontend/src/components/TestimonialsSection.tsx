import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Quote, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Vadodara",
    text: "Belleza made me look like a Bollywood heroine on my wedding day! The bridal makeup was absolutely flawless and everyone was complimenting me all day long. Best decision I ever made!",
    rating: 5,
    initials: "PS",
    color: "#FF1493",
  },
  {
    id: 2,
    name: "Neha Patel",
    location: "Surat",
    text: "I was so nervous about my engagement makeup but the artist made me feel so comfortable and the result was beyond my expectations. Highly recommend to every bride!",
    rating: 5,
    initials: "NP",
    color: "#FF69B4",
  },
  {
    id: 3,
    name: "Anjali Desai",
    location: "Baroda",
    text: "The pre-wedding shoot makeup was stunning! My photos look like magazine covers. The attention to detail is absolutely incredible. Worth every rupee!",
    rating: 5,
    initials: "AD",
    color: "#FF1493",
  },
  {
    id: 4,
    name: "Pooja Mehta",
    location: "Ahmedabad",
    text: "Worth every rupee! The bridal look lasted all day and night without touching up. Professional service with a beautiful, elegant outcome. I felt like a queen!",
    rating: 5,
    initials: "PM",
    color: "#FF69B4",
  },
  {
    id: 5,
    name: "Kavya Joshi",
    location: "Rajkot",
    text: "I've been to many makeup artists but Belleza Glamorous is in a different league. The work is celebrity-level quality! Absolutely transformed my entire look.",
    rating: 5,
    initials: "KJ",
    color: "#FF1493",
  },
  {
    id: 6,
    name: "Divya Agarwal",
    location: "Mumbai",
    text: "Trusted this studio for my sister's wedding and we were blown away. The artist is truly talented and passionate about her craft. Cannot recommend enough!",
    rating: 5,
    initials: "DA",
    color: "#FF69B4",
  },
];

function FloatingTorusKnot() {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.z = s.clock.elapsedTime * 0.4;
      ref.current.rotation.y = s.clock.elapsedTime * 0.25;
    }
  });
  return (
    <Float speed={2} floatIntensity={1.5}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.9, 0.28, 100, 16]} />
        <meshStandardMaterial
          color="#FF69B4"
          transparent
          opacity={0.4}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 overflow-hidden"
      data-ocid="testimonials.section"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF5F9 50%, #FFFFFF 100%)",
      }}
    >
      {/* 3D bg */}
      <div className="absolute right-8 top-8 w-72 h-72 z-0 opacity-50 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} color="#FFF0F5" />
            <pointLight position={[2, 2, 2]} intensity={2} color="#FF1493" />
            <FloatingTorusKnot />
          </Suspense>
        </Canvas>
      </div>

      {/* Blobs */}
      <div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.28) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-20 w-80 h-80 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,105,180,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
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
            <Sparkles className="w-3.5 h-3.5" /> Client Love
          </div>
          <h2 className="text-serif-display text-4xl sm:text-5xl lg:text-6xl gradient-text mb-4">
            What Our Clients Say
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
            Real words from real brides and clients who experienced the Belleza
            transformation
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="testimonials.list"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              className="group rounded-3xl p-7"
              style={{
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,105,180,0.3)",
                boxShadow:
                  "0 8px 32px rgba(255,105,180,0.1), inset 0 1px 0 rgba(255,255,255,1)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 20px 60px rgba(255,105,180,0.22), 0 0 0 1px rgba(255,20,147,0.3)",
              }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${t.color}15`,
                  border: `1px solid ${t.color}30`,
                }}
              >
                <Quote className="w-5 h-5" style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span
                    key={`star-${t.id}-${si}`}
                    className="text-base"
                    style={{ color: "#FF69B4" }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed mb-6 italic"
                style={{ color: "#4A1030" }}
              >
                "{t.text}"
              </p>

              {/* Client */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(255,105,180,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm text-white"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}bb)`,
                    boxShadow: `0 4px 12px ${t.color}40`,
                  }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "#2D0020" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "#B05080" }}>
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating badge */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div
            className="inline-flex items-center gap-5 rounded-2xl px-8 py-5"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1.5px solid rgba(255,105,180,0.4)",
              boxShadow: "0 8px 40px rgba(255,105,180,0.15)",
            }}
          >
            <div className="text-4xl">⭐</div>
            <div>
              <div className="text-2xl font-bold gradient-text text-serif-display">
                5.0 / 5.0
              </div>
              <div className="text-xs" style={{ color: "#6B2040" }}>
                Based on 200+ Reviews from Happy Clients
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
