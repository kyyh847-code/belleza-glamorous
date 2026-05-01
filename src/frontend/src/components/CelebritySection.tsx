import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Award, Sparkles, Star, Users } from "lucide-react";
import { motion } from "motion/react";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

const BADGES = [
  { icon: Award, label: "Celebrity Certified Artist", color: "#FF1493" },
  { icon: Sparkles, label: "Bollywood Collaborations", color: "#FF69B4" },
  { icon: Star, label: "Award-Winning Artistry", color: "#FF1493" },
  { icon: Users, label: "500+ Happy Brides", color: "#FF69B4" },
];

function RotatingOctahedron() {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.5;
      ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.3) * 0.4;
    }
  });
  return (
    <Float speed={2} floatIntensity={2}>
      <mesh ref={ref}>
        <octahedronGeometry args={[1.8, 0]} />
        <meshStandardMaterial
          color="#FF1493"
          transparent
          opacity={0.35}
          metalness={0.9}
          roughness={0.05}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function CelebritySection() {
  return (
    <section
      id="celebrities"
      className="relative py-28 overflow-hidden"
      data-ocid="celebrities.section"
      style={{
        background:
          "linear-gradient(135deg, #FFF0F5 0%, #FFE4EF 40%, #FFF5F9 70%, #FFFAF0 100%)",
      }}
    >
      {/* 3D canvas */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} color="#FFE4EF" />
            <pointLight position={[3, 3, 3]} intensity={3} color="#FF1493" />
            <RotatingOctahedron />
          </Suspense>
        </Canvas>
      </div>

      {/* Glow blobs */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,105,180,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-1/3 w-64 h-64 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,20,147,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest"
              style={{
                borderColor: "rgba(255,105,180,0.4)",
                color: "#FF1493",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" /> Celebrity Collaborations
            </div>

            <div>
              <h2
                className="text-serif-display text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
                style={{
                  background:
                    "linear-gradient(135deg, #FF1493 0%, #FF69B4 50%, #FFB6D9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 10px rgba(255,20,147,0.2))",
                }}
              >
                Trusted by Stars,
                <br />
                Beloved by Brides
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#6B2040" }}
              >
                Our award-winning artist has had the privilege of working
                alongside Bollywood celebrities and renowned personalities. This
                recognition speaks to the exceptional skill and artistry that
                every bride deserves on their special day.
              </p>
            </div>

            {/* Achievement badges */}
            <div
              className="grid grid-cols-2 gap-4"
              data-ocid="celebrities.badges"
            >
              {BADGES.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    className="flex items-center gap-3 rounded-2xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.75)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,105,180,0.3)",
                      boxShadow: "0 4px 20px rgba(255,105,180,0.08)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 24px rgba(255,105,180,0.3)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${badge.color}18`,
                        border: `1px solid ${badge.color}40`,
                      }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: badge.color }}
                      />
                    </div>
                    <span
                      className="text-xs font-semibold leading-tight"
                      style={{ color: "#4A1030" }}
                    >
                      {badge.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#appointment"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-smooth text-base text-white"
              style={{
                background: "linear-gradient(135deg, #FF1493, #FF69B4)",
                boxShadow:
                  "0 0 30px rgba(255,20,147,0.4), 0 4px 20px rgba(255,105,180,0.3)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 50px rgba(255,20,147,0.6), 0 4px 24px rgba(255,105,180,0.4)",
              }}
              data-ocid="celebrities.book_button"
            >
              <Star className="w-4 h-4" /> Book Celebrity-Grade Makeup
            </motion.a>
          </motion.div>

          {/* Right: Award image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(255,105,180,0.4) 0%, transparent 70%)",
                }}
              />

              {/* Frame */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  border: "2px solid rgba(255,105,180,0.5)",
                  boxShadow:
                    "0 0 60px rgba(255,105,180,0.35), 0 20px 60px rgba(255,20,147,0.15), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              >
                <img
                  src="/assets/celebrity-award.png"
                  alt="Celebrity Award Ceremony — Belleza Glamorous Studio"
                  className="w-full max-w-md object-cover rounded-3xl"
                  style={{
                    filter: "brightness(1.05) contrast(1.05) saturate(1.1)",
                  }}
                />

                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,105,180,0.05) 100%)",
                  }}
                />
              </div>

              {/* Award badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 text-center"
                style={{
                  background: "linear-gradient(135deg, #FF1493, #FF69B4)",
                  boxShadow: "0 8px 30px rgba(255,20,147,0.5)",
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-xl font-bold text-white text-serif-display">
                  ✨
                </div>
                <div className="text-xs text-white/90 font-semibold mt-0.5 whitespace-nowrap">
                  Award Winning
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
