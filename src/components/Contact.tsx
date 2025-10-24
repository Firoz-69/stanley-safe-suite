import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Mon-Fri: 8AM - 6PM"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@stanleysafety.com", "support@stanleysafety.com"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Hardware Avenue", "Industrial District, NY 10001"],
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                Let's Connect
              </span>
            </div>
          </div>
          
          <h2 className="font-['Bebas_Neue'] text-6xl md:text-7xl text-secondary mb-6 tracking-wider">
            GET IN TOUCH
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to our team today and discover how we can support your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group flex items-start gap-6 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <info.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary/20 animate-scale-up">
              <h3 className="text-2xl font-bold text-secondary mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-primary">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-primary">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div className="p-10 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 transition-all duration-500 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Full Name
                </label>
                <Input 
                  placeholder="John Doe" 
                  className="h-14 bg-background/50 border-2 border-border/50 focus:border-primary text-lg rounded-xl transition-all duration-300 hover:border-primary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="h-14 bg-background/50 border-2 border-border/50 focus:border-primary text-lg rounded-xl transition-all duration-300 hover:border-primary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Subject
                </label>
                <Input 
                  placeholder="How can we help?" 
                  className="h-14 bg-background/50 border-2 border-border/50 focus:border-primary text-lg rounded-xl transition-all duration-300 hover:border-primary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your needs..." 
                  rows={6}
                  className="bg-background/50 border-2 border-border/50 focus:border-primary text-lg rounded-xl resize-none transition-all duration-300 hover:border-primary/50"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold text-lg py-7 rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
