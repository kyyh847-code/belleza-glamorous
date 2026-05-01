import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Camera, Crown, Heart, Scissors, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh } from "three";

const SERVICES = [
  {
    id: 1,
    title: "Bridal Makeup",
    description:
      "Transform your wedding day with flawless bridal artistry. Every detail perfected for your most magical moment.",
    icon: Crown,
    price: "₹2,500 onwards",
    color: "#FF1493",
  },
  {
    id: 2,
    title: "Party Makeup",
    description:
      "Glamorous looks for every celebration — vibrant, bold, and designed to turn heads all night long.",
    icon: Sparkles,
    price: "₹1,500 onwards",
    color: "#FF69B4",
  },
  {
    id: 3,
    title: "Engagement Makeup",
    description:
      "Picture-perfect looks for your special engagement — dewy, glowing and beautifully photo-ready.",
    icon: Heart,
    price: "₹2,000 onwards",
    color: "#FF1493",
  },
  {
    id: 4,
    title: "Pre-Wedding Shoot",
    description:
      "Stunning makeup for your photoshoot memories — editorial-level artistry for every frame.",
    icon: Camera,
    price: "₹1,800 onwards",
    color: "#FF69B4",
  },
  {
    id: 5,
    title: "Reception Makeup",
    description:
      "Bold, beautiful reception looks that steal the show. Make your final wedding event unforgettable.",
    icon: Star,
    price: "₹2,200 onwards",
    color: "#FF1493",
  },
  {
    id: 6,
    title: "Hair Styling",
    description:
      "Complete bridal looks with expert hair artistry — from classic braids to modern updos.",
    icon: Scissors,
    price: "₹1,200 onwards",
    color: "#FF69B4",
  },
];

function FloatingTorus({
  radius,
  speed,
  color,
}: { radius: number; speed: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * speed;
      ref.current.rotation.y = s.clock.elapsedTime * speed * 0.7;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={0.6}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, 0.05, 16, 80]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      data-ocid="services.section"
    >
      {/* Light background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FFF5F9 50%, #FFF0F5 100%)",
        }}
      />
      {/* 3D rings */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[2, 2, 2]} intensity={2} color="#FF1493" />
          <FloatingTorus radius={2.5} speed={0.25} color="#FF69B4" />
          <FloatingTorus radius={4} speed={0.15} color="#FFB6D9" />
          <FloatingTorus radius={1.5} speed={0.4} color="#FF1493" />
        </Canvas>
      </div>
      {/* Center pink glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.3) 0%, rgba(255,105,180,0.1) 50%, transparent 70%)",
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
            <Sparkles className="w-3.5 h-3.5" /> Our Expertise
          </div>
          <h2 className="text-serif-display text-4xl sm:text-5xl lg:text-6xl gradient-text mb-4">
            Our Premium Services
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
            Every look crafted with precision, passion, and premium artistry for
            your most cherished moments
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          data-ocid="services.list"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group relative rounded-3xl p-7 cursor-pointer transition-smooth"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,105,180,0.3)",
                  boxShadow:
                    "0 8px 32px rgba(255,105,180,0.1), inset 0 1px 0 rgba(255,255,255,1)",
                }}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 60px rgba(255,105,180,0.28), 0 0 0 1px rgba(255,20,147,0.4)",
                }}
                data-ocid={`services.item.${i + 1}`}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}22 0%, ${service.color}44 100%)`,
                    border: `1px solid ${service.color}55`,
                  }}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="w-7 h-7" style={{ color: service.color }} />
                </motion.div>

                <h3
                  className="text-serif-display text-xl font-bold mb-2"
                  style={{ color: "#2D0020" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#6B2040" }}
                >
                  {service.description}
                </p>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(255,105,180,0.15)" }}
                >
                  <span className="gradient-text font-bold text-base">
                    {service.price}
                  </span>
                  <motion.span
                    className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-smooth"
                    style={{ color: "#FF1493" }}
                    initial={false}
                  >
                    Book Now →
                  </motion.span>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                  style={{ boxShadow: "inset 0 0 40px rgba(255,105,180,0.06)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full hover:scale-105 transition-smooth text-base"
            style={{
              background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
              boxShadow:
                "0 0 30px rgba(255,20,147,0.4), 0 4px 20px rgba(255,105,180,0.3)",
            }}
            data-ocid="services.book_button"
          >
            <Sparkles className="w-4 h-4" /> Book Your Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
