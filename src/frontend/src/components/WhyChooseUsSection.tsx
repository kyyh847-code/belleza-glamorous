import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Clock,
  Gem,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserCheck,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

const STATS = [
  { num: 500, suffix: "+", label: "Happy Brides" },
  { num: 10, suffix: "+", label: "Years Experience" },
  { num: 50, suffix: "+", label: "Celebrity Events" },
  { num: 100, suffix: "%", label: "Client Satisfaction" },
];

const FEATURES = [
  {
    id: 1,
    icon: Trophy,
    title: "Expert Artistry",
    desc: "Trained in latest international makeup techniques and continuously updated with global trends.",
    color: "#FF1493",
  },
  {
    id: 2,
    icon: Gem,
    title: "Premium Products",
    desc: "Only internationally-certified luxury makeup brands — MAC, Charlotte Tilbury, Huda Beauty, and more.",
    color: "#FF69B4",
  },
  {
    id: 3,
    icon: Star,
    title: "Celebrity Experience",
    desc: "Worked with Bollywood stars, TV personalities and celebrated figures — bringing that star quality to every bride.",
    color: "#FF1493",
  },
  {
    id: 4,
    icon: UserCheck,
    title: "Personalized Look",
    desc: "Custom makeup tailored to your unique features, skin tone, outfit, and personal style.",
    color: "#FF69B4",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Hygiene Standards",
    desc: "Highest sanitization protocols with disposable applicators and thoroughly cleaned tools for every client.",
    color: "#FF1493",
  },
  {
    id: 6,
    icon: Clock,
    title: "Timely Service",
    desc: "Always on time, always flawless. We respect your schedule on your most important day.",
    color: "#FF69B4",
  },
];

function AnimatedCounter({
  target,
  suffix,
}: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function FloatingIcosahedron() {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.18;
      ref.current.rotation.z = s.clock.elapsedTime * 0.12;
    }
  });
  return (
    <Float speed={1.2} floatIntensity={1.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#FF69B4"
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      data-ocid="why-choose-us.section"
      style={{
        background:
          "linear-gradient(180deg, #FFFAF0 0%, #FFF5F9 50%, #FFFFFF 100%)",
      }}
    >
      {/* 3D background */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-30 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <pointLight position={[2, 2, 2]} intensity={2} color="#FF69B4" />
            <FloatingIcosahedron />
          </Suspense>
        </Canvas>
      </div>
      <div
        className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.3) 0%, transparent 70%)",
          transform: "translate(-50%,-50%)",
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
            <Sparkles className="w-3.5 h-3.5" /> Why Belleza
          </div>
          <h2 className="text-serif-display text-4xl sm:text-5xl lg:text-6xl gradient-text mb-4">
            Why Choose Us?
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
            Experience the difference that passion, expertise, and premium
            artistry can make for your most cherished moments
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-ocid="why-choose-us.stats"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center rounded-3xl py-8 px-4"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1.5px solid rgba(255,105,180,0.35)",
                boxShadow: "0 8px 32px rgba(255,105,180,0.12)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 16px 48px rgba(255,105,180,0.25), 0 0 0 1px rgba(255,20,147,0.3)",
              }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-serif-display gradient-text">
                <AnimatedCounter target={stat.num} suffix={stat.suffix} />
              </div>
              <div
                className="text-sm mt-2 font-medium"
                style={{ color: "#6B2040" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="why-choose-us.list"
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className="group rounded-3xl p-7 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,105,180,0.3)",
                  boxShadow:
                    "0 8px 32px rgba(255,105,180,0.08), inset 0 1px 0 rgba(255,255,255,1)",
                }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 20px 60px rgba(255,105,180,0.22), 0 0 0 1px rgba(255,20,147,0.35)",
                }}
                data-ocid={`why-choose-us.item.${i + 1}`}
              >
                <motion.div
                  className="rounded-2xl flex items-center justify-center mb-5 w-[52px] h-[52px]"
                  style={{
                    background: `${feature.color}18`,
                    border: `1px solid ${feature.color}40`,
                  }}
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </motion.div>
                <h3
                  className="text-serif-display text-lg font-bold mb-2"
                  style={{ color: "#2D0020" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B2040" }}
                >
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
