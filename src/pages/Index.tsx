import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { SplineSection } from "@/components/SplineSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SplineSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
