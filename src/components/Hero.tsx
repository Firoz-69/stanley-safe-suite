import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tools.jpg";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60"></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in space-y-8">
            <div className="inline-block">
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6 animate-slide-in-left">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                  Industry Leading Tools Since 1990
                </span>
              </div>
            </div>
            
            <h1 
              className="font-['Bebas_Neue'] text-7xl md:text-8xl lg:text-[10rem] text-primary mb-6 tracking-wider leading-none animate-float"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              STANLEY<br/>SAFETY
            </h1>
            
            <div className="space-y-4 animate-slide-in-right">
              <p className="text-3xl md:text-4xl text-primary-foreground font-bold">
                Professional Hardware & Safety Solutions
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Trusted by professionals worldwide. We provide premium quality tools and safety equipment that set industry standards.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-scale-up">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 transition-all hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 group"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/50 bg-background/10 backdrop-blur-md text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold text-lg px-10 py-7 transition-all hover:scale-110 hover:shadow-2xl group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl">
              {[
                { value: "30+", label: "Years" },
                { value: "500+", label: "Products" },
                { value: "50K+", label: "Clients" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-background/10 backdrop-blur-md border border-primary/20 hover:border-primary/50 hover:bg-background/20 transition-all hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-['Bebas_Neue'] text-4xl text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
