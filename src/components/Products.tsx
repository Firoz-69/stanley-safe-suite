import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, HardHat, Drill, Hammer, Shield, Ruler, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const products = [
  {
    icon: Wrench,
    title: "Hand Tools",
    description: "Premium wrenches, pliers, and hand tools engineered for precision and durability.",
    price: "From $29.99",
  },
  {
    icon: Drill,
    title: "Power Tools",
    description: "Professional-grade drills, saws, and electric tools for heavy-duty applications.",
    price: "From $149.99",
  },
  {
    icon: HardHat,
    title: "Safety Equipment",
    description: "Complete range of PPE including helmets, gloves, and protective gear.",
    price: "From $19.99",
  },
  {
    icon: Hammer,
    title: "Construction Tools",
    description: "Heavy-duty hammers, mallets, and demolition tools built to last.",
    price: "From $39.99",
  },
  {
    icon: Shield,
    title: "Safety Gear",
    description: "High-visibility clothing, safety harnesses, and fall protection systems.",
    price: "From $49.99",
  },
  {
    icon: Ruler,
    title: "Measuring Tools",
    description: "Accurate tape measures, levels, and precision measuring instruments.",
    price: "From $24.99",
  },
];

const Products = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                Premium Collection
              </span>
            </div>
          </div>
          
          <h2 className="font-['Bebas_Neue'] text-6xl md:text-7xl text-secondary mb-6 tracking-wider">
            OUR PRODUCTS
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional-grade tools and safety equipment designed for excellence
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group border-2 border-border/50 hover:border-primary bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-4 overflow-hidden relative animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <product.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-0 group-hover:translate-x-1 transition-all"
                  >
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="group border-2 border-border/50 hover:border-primary bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardHeader className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                        <product.icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative space-y-4">
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {product.description}
                      </CardDescription>
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                        <Button 
                          size="sm" 
                          className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-0"
                        >
                          Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-7 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 group"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
