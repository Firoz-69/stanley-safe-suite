import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tools.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-['Bebas_Neue'] text-7xl md:text-8xl lg:text-9xl text-primary mb-6 tracking-wider">
            STANLEY SAFETY
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground mb-4 font-semibold">
            Professional Hardware & Safety Solutions
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Trusted by professionals worldwide. We provide premium quality tools and safety equipment that set industry standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 transition-all hover:scale-105 animate-glow"
            >
              View Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
