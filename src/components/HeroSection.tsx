import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tusoHeroMockup from "@/assets/tuso-hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-tuso-gray to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-tuso-red/20 to-tuso-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-tuso-teal/20 to-tuso-red/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in space-y-8">
            {/* Logo */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-accent">
                Tuso
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Descubre destinos únicos{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                en un solo lugar
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              La app de turismo que integra todas las funciones que necesitas para vivir experiencias únicas e inolvidables.
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="hero-button text-lg px-8 py-6 rounded-full font-semibold group">
                Descargar App
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="beta" 
                className="text-lg px-8 py-6 rounded-full font-semibold group relative"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></span>
                <span className="relative flex items-center">
                  Prueba Beta
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">GRATIS</span>
                </span>
              </Button>
            </div>
          </div>
          
          {/* Mockup */}
          <div className="slide-in-right flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
              <img 
                src={tusoHeroMockup} 
                alt="Tuso App - Pantalla de inicio con logo y explorador"
                className="relative w-80 lg:w-96 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;