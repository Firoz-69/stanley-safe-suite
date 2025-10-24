import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-secondary mb-4 tracking-wider">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">Mon-Fri: 8AM - 6PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Email</h3>
                <p className="text-muted-foreground">info@stanleysafety.com</p>
                <p className="text-muted-foreground">support@stanleysafety.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Location</h3>
                <p className="text-muted-foreground">123 Hardware Avenue</p>
                <p className="text-muted-foreground">Industrial District, NY 10001</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <Input 
                placeholder="Your Name" 
                className="bg-card border-2 border-border focus:border-primary"
                required
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-card border-2 border-border focus:border-primary"
                required
              />
            </div>
            <div>
              <Input 
                placeholder="Subject" 
                className="bg-card border-2 border-border focus:border-primary"
                required
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                rows={6}
                className="bg-card border-2 border-border focus:border-primary resize-none"
                required
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 transition-all hover:scale-105"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
