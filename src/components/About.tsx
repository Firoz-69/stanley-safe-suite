import { CheckCircle2 } from "lucide-react";

const features = [
  "Industry-leading quality standards",
  "Professional-grade durability",
  "Comprehensive safety certifications",
  "Trusted by contractors worldwide",
  "Innovative tool technology",
  "Lifetime warranty on select products",
];

const About = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-primary mb-6 tracking-wider">
              ABOUT US
            </h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-lg mb-6 leading-relaxed">
              Stanley Safety has been the trusted name in professional hardware and safety equipment for over three decades. We combine traditional craftsmanship with cutting-edge technology to deliver tools that professionals rely on every day.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Our commitment to quality and safety has made us the preferred choice for contractors, builders, and DIY enthusiasts who demand excellence from their tools.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-primary/10 rounded-lg p-8 border-2 border-primary">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-secondary-foreground/5 rounded-lg p-6">
                  <div className="font-['Bebas_Neue'] text-5xl text-primary mb-2">30+</div>
                  <div className="text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="bg-secondary-foreground/5 rounded-lg p-6">
                  <div className="font-['Bebas_Neue'] text-5xl text-primary mb-2">500+</div>
                  <div className="text-sm uppercase tracking-wider">Products</div>
                </div>
                <div className="bg-secondary-foreground/5 rounded-lg p-6">
                  <div className="font-['Bebas_Neue'] text-5xl text-primary mb-2">50K+</div>
                  <div className="text-sm uppercase tracking-wider">Happy Clients</div>
                </div>
                <div className="bg-secondary-foreground/5 rounded-lg p-6">
                  <div className="font-['Bebas_Neue'] text-5xl text-primary mb-2">100%</div>
                  <div className="text-sm uppercase tracking-wider">Quality Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
