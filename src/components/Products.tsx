import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, HardHat, Drill, Hammer, Shield, Ruler } from "lucide-react";

const products = [
  {
    icon: Wrench,
    title: "Hand Tools",
    description: "Premium wrenches, pliers, and hand tools engineered for precision and durability.",
  },
  {
    icon: Drill,
    title: "Power Tools",
    description: "Professional-grade drills, saws, and electric tools for heavy-duty applications.",
  },
  {
    icon: HardHat,
    title: "Safety Equipment",
    description: "Complete range of PPE including helmets, gloves, and protective gear.",
  },
  {
    icon: Hammer,
    title: "Construction Tools",
    description: "Heavy-duty hammers, mallets, and demolition tools built to last.",
  },
  {
    icon: Shield,
    title: "Safety Gear",
    description: "High-visibility clothing, safety harnesses, and fall protection systems.",
  },
  {
    icon: Ruler,
    title: "Measuring Tools",
    description: "Accurate tape measures, levels, and precision measuring instruments.",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-secondary mb-4 tracking-wider">
            OUR PRODUCTS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of professional-grade tools and safety equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-in-left group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow transition-all">
                  <product.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
