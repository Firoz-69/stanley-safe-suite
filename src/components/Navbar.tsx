import { useState } from "react";
import { Home, Package, Users, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b-2 border-primary/30 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-20">
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  {/* Home */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center px-6 py-2 text-base font-bold transition-all cursor-pointer text-primary hover:scale-110"
                      )}
                      onClick={() => scrollToSection("hero")}
                    >
                      <Home className="mr-2 h-5 w-5" />
                      <span className="relative">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Products with Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "group h-12 px-6 text-base font-bold text-primary transition-all hover:scale-110 inline-flex items-center"
                      )}
                    >
                      <Package className="mr-2 h-5 w-5" />
                      <span className="relative">
                        Products
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] bg-gradient-to-br from-background via-primary/10 to-background/95 backdrop-blur-md border-2 border-primary/30 shadow-2xl">
                        <div className="grid grid-cols-2 gap-6 p-8">
                          <div className="space-y-6 flex flex-col justify-center pr-4">
                            <div>
                              <h3 className="font-['Bebas_Neue'] text-4xl text-primary tracking-widest mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                                PRODUCT RANGE
                              </h3>
                              <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                            </div>
                            <div className="space-y-4">
                              <div
                                className="group cursor-pointer transition-all hover:translate-x-2 duration-300 p-4 rounded-lg hover:bg-primary/10 border-l-4 border-transparent hover:border-primary"
                                onClick={() => scrollToSection("products")}
                              >
                                <p className="text-gray-600 font-bold text-xl mb-1 relative inline-block">
                                  Head Protection
                                </p>
                                <p className="text-gray-500 text-sm">
                                  Hard hats, helmets & safety gear
                                </p>
                              </div>
                              <div
                                className="group cursor-pointer transition-all hover:translate-x-2 duration-300 p-4 rounded-lg hover:bg-primary/10 border-l-4 border-transparent hover:border-primary"
                                onClick={() => scrollToSection("products")}
                              >
                                <p className="text-gray-600 font-bold text-xl mb-1 relative inline-block">
                                  Body Protection
                                </p>
                                <p className="text-gray-500 text-sm">
                                  Vests, harnesses & full coverage
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 shadow-[0_0_30px_rgba(234,179,8,0.2)] group h-[280px]">
                              <img
                                src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8c8?w=500&h=400&fit=crop"
                                alt="Safety Products"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
                              <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-primary font-bold text-lg drop-shadow-lg">
                                  Premium Safety Equipment
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* About Us with Hover Card */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "h-12 px-6 text-base font-bold text-primary transition-all hover:scale-110 inline-flex items-center"
                      )}
                    >
                      <Users className="mr-2 h-5 w-5" />
                      <span className="relative group">
                        About Us
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] bg-gradient-to-br from-background via-primary/10 to-background/95 backdrop-blur-md border-2 border-primary/30 shadow-2xl">
                        <div className="grid grid-cols-2 gap-8 p-10">
                          <div className="space-y-4 flex flex-col justify-center">
                            <h3 className="font-['Bebas_Neue'] text-4xl text-primary tracking-widest mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                              Building Excellence
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent"></div>

                            <p className="text-base text-gray-700 leading-relaxed">
                              Stanley Safety has been the trusted name in
                              professional hardware and safety equipment for
                              over three decades.
                            </p>
                            <p className="text-base text-gray-600 leading-relaxed">
                              We combine traditional craftsmanship with
                              cutting-edge technology to deliver tools that
                              professionals rely on every day.
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Our commitment to quality and safety has made us
                              the preferred choice for contractors, builders,
                              and DIY enthusiasts worldwide.
                            </p>
                            <Button
                              onClick={() => scrollToSection("about")}
                              className="mt-6 bg-primary hover:bg-primary/90 text-secondary font-bold border-2 border-primary hover:scale-105 transition-all w-fit"
                            >
                              Learn More About Us
                            </Button>
                          </div>
                          <div className="relative overflow-hidden rounded-xl border-4 border-primary/30 shadow-2xl group h-[350px]">
                            <img
                              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=400&fit=crop"
                              alt="About Stanley Safety"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-6 left-6 right-6 text-center">
                                <p className="text-primary font-['Bebas_Neue'] text-2xl tracking-wider">
                                  30+ Years of Excellence
                                </p>
                                <p className="text-primary/80 text-sm mt-2">
                                  Trusted by professionals worldwide
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-black hover:text-black hover:bg-black/20"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-gradient-to-br from-primary via-yellow-500 to-primary md:hidden"
          style={{ top: "80px" }}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="w-full flex items-center space-x-3 p-4 rounded-lg bg-black/10 hover:bg-black text-black hover:text-primary transition-all border-2 border-black/20 hover:border-black font-bold"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </button>

            <div className="space-y-2">
              <div className="text-black font-bold text-lg px-4 flex items-center space-x-2">
                <Package className="h-5 w-5" />
                <span>Products</span>
              </div>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full p-4 rounded-lg bg-black/10 hover:bg-black text-left text-black hover:text-primary transition-all border-2 border-black/20 hover:border-black ml-4 mr-4"
                style={{ width: "calc(100% - 2rem)" }}
              >
                <div className="font-bold">Head Protection</div>
                <p className="text-sm text-black/80 hover:text-primary/90 mt-1">
                  Hard hats, helmets, and head safety equipment
                </p>
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full p-4 rounded-lg bg-black/10 hover:bg-black text-left text-black hover:text-primary transition-all border-2 border-black/20 hover:border-black ml-4 mr-4"
                style={{ width: "calc(100% - 2rem)" }}
              >
                <div className="font-bold">Body Protection</div>
                <p className="text-sm text-black/80 hover:text-primary/90 mt-1">
                  Safety vests, harnesses, and full body protection
                </p>
              </button>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="w-full flex items-center space-x-3 p-4 rounded-lg bg-black/10 hover:bg-black text-black hover:text-primary transition-all border-2 border-black/20 hover:border-black font-bold"
            >
              <Users className="h-5 w-5" />
              <span>About Us</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
