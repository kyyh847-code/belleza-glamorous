import AppointmentSection from "@/components/AppointmentSection";
import CelebritySection from "@/components/CelebritySection";
import FAQSection from "@/components/FAQSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CelebritySection />
        <WhyChooseUsSection />
        <GallerySection />
        <TestimonialsSection />
        <AppointmentSection />
        <FAQSection />
        <MapSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
