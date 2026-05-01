import { Button } from "@/components/ui/button";
import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Mesh, Points } from "three";

/* ─── 3D: Floating Torus ─── */
function FloatingTorus({
  position,
  speed,
  color,
}: { position: [number, number, number]; speed: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.6;
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });
  return (
    <Float speed={speed * 0.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[1, 0.35, 16, 60]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.55}
          roughness={0.05}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
}

/* ─── 3D: Octahedron ─── */
function FloatingOctahedron({
  position,
  speed,
  color,
}: { position: [number, number, number]; speed: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
  });
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.8}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.55}
          roughness={0.0}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

/* ─── 3D: Icosahedron ─── */
function FloatingIcosahedron({
  position,
  speed,
  color,
}: { position: [number, number, number]; speed: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5;
  });
  return (
    <Float speed={speed * 1.2} rotationIntensity={0.7} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.5}
          roughness={0.0}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

/* ─── 3D: Glowing Orb ─── */
function GlowOrb({
  position,
  scale,
  color,
}: { position: [number, number, number]; scale: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    const s = scale + Math.sin(state.clock.elapsedTime * 1.2) * 0.06;
    ref.current.scale.setScalar(s);
  });
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0}
          metalness={0.1}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

/* ─── 3D: Particle Field ─── */
function ParticleField() {
  const ref = useRef<Points>(null);
  const count = 160;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.035;
    ref.current.rotation.x = state.clock.elapsedTime * 0.018;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#FF69B4"
        size={0.07}
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── 3D: Camera Drift Group ─── */
function CameraDrift() {
  const groupRef = useRef<Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.07) * 0.04;
  });
  return (
    <group ref={groupRef}>
      <FloatingTorus position={[-5, 2.5, -5]} speed={0.5} color="#FF69B4" />
      <FloatingTorus position={[5.5, -1.5, -7]} speed={0.35} color="#FFB6D9" />
      <FloatingOctahedron position={[3.5, 3, -4]} speed={0.6} color="#FF1493" />
      <FloatingOctahedron
        position={[-4, -2.5, -6]}
        speed={0.45}
        color="#FF69B4"
      />
      <FloatingIcosahedron
        position={[0, -3.5, -3]}
        speed={0.7}
        color="#FFC0CB"
      />
      <FloatingIcosahedron
        position={[-6.5, 1, -8]}
        speed={0.4}
        color="#FF9FCC"
      />
      <GlowOrb position={[-3, 0, -2]} scale={1.1} color="#FF69B4" />
      <GlowOrb position={[4, 2, -4]} scale={0.9} color="#FFB6D9" />
      <GlowOrb position={[1, -2, -1.5]} scale={0.65} color="#FF1493" />
      <ParticleField />
      <Sparkles count={80} scale={16} size={1.4} speed={0.3} color="#FF69B4" />
    </group>
  );
}

/* ─── Full 3D Scene ─── */
function Scene3D() {
  return (
    <>
      <ambientLight intensity={1.2} color="#FFFFFF" />
      <pointLight position={[-5, 5, 3]} intensity={3} color="#FF1493" />
      <pointLight position={[6, -4, -2]} intensity={2.5} color="#FF69B4" />
      <pointLight position={[0, 0, 4]} intensity={2} color="#FFB6D9" />
      <Suspense fallback={null}>
        <CameraDrift />
      </Suspense>
    </>
  );
}

/* ─── Stats Data ─── */
const stats = [
  { num: "500+", label: "Brides" },
  { num: "10+", label: "Yrs Exp" },
  { num: "★ Celebrity", label: "Artistry" },
  { num: "#1", label: "Vadodara" },
];

/* ─── HeroSection ─── */
export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FFF0F5 35%, #FFE4EF 65%, #FFF8FC 100%)",
      }}
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 9], fov: 58 }} dpr={[1, 2]}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Atmospheric overlays — subtle on white bg */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        {/* Radial pink glow center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,105,180,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Corner blobs */}
        <div
          className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,182,217,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-40 left-16 w-56 h-56 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,105,180,0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 xl:gap-16 items-center max-w-6xl mx-auto">
          {/* ── Left: Copy ── */}
          <div className="space-y-7">
            {/* Celebrity Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,105,180,0.4)",
                boxShadow:
                  "0 0 20px rgba(255,105,180,0.2), inset 0 1px 0 rgba(255,255,255,1)",
              }}
            >
              <span
                className="text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "#FF1493" }}
              >
                ✨ Celebrity Makeup Artist
              </span>
              <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              <span
                className="text-[11px] font-semibold tracking-widest"
                style={{ color: "#B05080" }}
              >
                Vadodara
              </span>
            </motion.div>

            {/* Studio Name */}
            <motion.div
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.75 }}
            >
              <h1
                className="font-display leading-[1.0] tracking-tight"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #FF1493 0%, #FF69B4 45%, #FF1493 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 18px rgba(255,20,147,0.35))",
                  }}
                >
                  Belleza Glamorous
                </span>
              </h1>
              <h2
                className="font-display italic mt-1"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                  color: "#B05080",
                  letterSpacing: "0.04em",
                }}
              >
                Makeup Studio
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.6 }}
              className="italic text-base sm:text-lg"
              style={{ color: "#FF69B4", letterSpacing: "0.05em" }}
            >
              Bridal Makeup Artist&nbsp;&nbsp;|&nbsp;&nbsp;Makeup Artist
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm sm:text-base max-w-md leading-relaxed"
              style={{ color: "#6B2040" }}
            >
              Where artistry meets luxury — every bride transformed into a
              goddess.
              <br />
              Timeless elegance crafted for your most radiant, unforgettable
              moment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollTo("#appointment")}
                data-ocid="hero.book_button"
                className="rounded-full px-8 py-6 text-sm font-bold tracking-wide border-0 text-white transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
                  boxShadow:
                    "0 0 30px rgba(255,20,147,0.5), 0 4px 15px rgba(255,105,180,0.35)",
                }}
              >
                💄 Book Your Appointment
              </Button>
              <Button
                onClick={() => scrollTo("#gallery")}
                data-ocid="hero.gallery_button"
                variant="outline"
                className="rounded-full px-8 py-6 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  border: "1.5px solid rgba(255,105,180,0.5)",
                  color: "#FF1493",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 16px rgba(255,105,180,0.15)",
                }}
              >
                View My Work ✨
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.88 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-2"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.88 + i * 0.08 }}
                  className="text-center px-4 py-2 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,105,180,0.25)",
                    boxShadow: "0 4px 16px rgba(255,105,180,0.12)",
                  }}
                >
                  <div
                    className="text-base font-black font-display"
                    style={{
                      background: "linear-gradient(135deg, #FF1493, #FF69B4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "#B05080" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Hero Image + Celebrity Award Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.85, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-6 lg:pl-4"
          >
            {/* Decorative spinning ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div
                className="w-[320px] h-[400px] rounded-[40%] border border-primary/25 animate-spin"
                style={{ animationDuration: "18s", borderStyle: "dashed" }}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div
                className="w-[280px] h-[360px] rounded-[40%] border border-primary/15"
                style={{
                  animation: "spin 28s linear infinite reverse",
                  borderStyle: "dashed",
                }}
              />
            </div>

            {/* Hero portrait image */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div
                className="w-[240px] h-[320px] sm:w-[280px] sm:h-[360px] rounded-[32px] overflow-hidden"
                style={{
                  border: "2px solid rgba(255,105,180,0.5)",
                  boxShadow:
                    "0 0 50px rgba(255,20,147,0.3), 0 0 30px rgba(255,105,180,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
                  background: "rgba(255,240,247,0.5)",
                }}
              >
                <img
                  src="/assets/bride-red-palace.png"
                  alt="Belleza Glamorous Makeup Studio - Bridal Makeup"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Floating rating badge */}
              <motion.div
                className="absolute -bottom-5 -left-8 rounded-2xl px-4 py-2.5"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,105,180,0.4)",
                  boxShadow: "0 0 20px rgba(255,105,180,0.25)",
                }}
              >
                <div
                  className="text-[10px] font-semibold"
                  style={{ color: "#B05080" }}
                >
                  Trusted by
                </div>
                <div
                  className="text-sm font-black"
                  style={{ color: "#FF1493" }}
                >
                  50+ Celebrities
                </div>
              </motion.div>

              {/* Floating stars badge */}
              <motion.div
                className="absolute -top-4 -right-8 rounded-2xl px-4 py-2.5"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,182,217,0.4)",
                  boxShadow: "0 0 20px rgba(255,182,217,0.3)",
                }}
              >
                <div
                  className="text-sm font-black"
                  style={{ color: "#FF69B4" }}
                >
                  ⭐ 5.0
                </div>
                <div className="text-[10px]" style={{ color: "#B05080" }}>
                  Google Rated
                </div>
              </motion.div>
            </motion.div>

            {/* ── Celebrity Award Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  width: "210px",
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(255,105,180,0.45)",
                  boxShadow:
                    "0 0 40px rgba(255,20,147,0.2), 0 0 20px rgba(255,105,180,0.15), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              >
                {/* Shimmer top bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF1493, #FFB6D9, #FF69B4, #FFB6D9, #FF1493)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2.5s linear infinite",
                  }}
                />
                {/* Award image */}
                <div className="p-3 pb-1">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ height: "140px" }}
                  >
                    <img
                      src="/assets/celebrity-award.png"
                      alt="Celebrity Award - Belleza Glamorous"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                </div>
                {/* Label */}
                <div className="px-3 pb-3 text-center">
                  <div
                    className="text-[11px] font-black tracking-wide uppercase"
                    style={{
                      background: "linear-gradient(135deg, #FF1493, #FF69B4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    🏆 Certified by Celebrity Artist
                  </div>
                  <div
                    className="text-[9px] mt-0.5 font-semibold uppercase tracking-widest"
                    style={{ color: "#B05080" }}
                  >
                    Award of Excellence
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 9, 0] }}
        transition={{
          duration: 2.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        data-ocid="hero.scroll_indicator"
      >
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.3em]"
          style={{ color: "rgba(180,60,120,0.6)" }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-8 rounded-full"
          style={{
            background: "linear-gradient(to bottom, #FF69B4, transparent)",
          }}
        />
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          aria-label="Scroll down"
        >
          <title>Scroll down</title>
          <path
            d="M1 1L6 6L11 1"
            stroke="#FF69B4"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* CSS keyframes for shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
