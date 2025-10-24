import { CheckCircle2, Award, Users, Target, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  { icon: Award, text: "Industry-leading quality standards" },
  { icon: Target, text: "Professional-grade durability" },
  { icon: CheckCircle2, text: "Comprehensive safety certifications" },
  { icon: Users, text: "Trusted by contractors worldwide" },
  { icon: TrendingUp, text: "Innovative tool technology" },
  { icon: CheckCircle2, text: "Lifetime warranty on select products" },
];

const stats = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Products" },
  { value: 50, suffix: "K+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Quality Guaranteed" },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="font-['Bebas_Neue'] text-6xl text-primary">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-8">
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                  Our Story
                </span>
              </div>
            </div>

            <h2 className="font-['Bebas_Neue'] text-6xl md:text-7xl text-primary mb-8 tracking-wider leading-tight">
              BUILDING EXCELLENCE<br/>SINCE 1990
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-transparent mb-10"></div>
            
            <p className="text-xl mb-6 leading-relaxed text-secondary-foreground/90">
              Stanley Safety has been the trusted name in professional hardware and safety equipment for over three decades. We combine traditional craftsmanship with cutting-edge technology to deliver tools that professionals rely on every day.
            </p>
            <p className="text-lg mb-10 leading-relaxed text-secondary-foreground/80">
              Our commitment to quality and safety has made us the preferred choice for contractors, builders, and DIY enthusiasts who demand excellence from their tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-4 p-4 rounded-xl bg-background/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:bg-background/10 transition-all duration-300 animate-slide-in-left hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-base leading-relaxed pt-1.5">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-up">
            <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-1 backdrop-blur-sm border border-primary/30">
              <div className="bg-secondary/90 backdrop-blur-md rounded-3xl p-10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="group text-center p-8 rounded-2xl bg-gradient-to-br from-background/10 to-background/5 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-background/20 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/20"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                      <div className="text-sm uppercase tracking-widest mt-3 text-secondary-foreground/80 group-hover:text-primary transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
