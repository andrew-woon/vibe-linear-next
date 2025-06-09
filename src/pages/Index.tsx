
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VibeCoding from "@/components/VibeCoding";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <VibeCoding />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
