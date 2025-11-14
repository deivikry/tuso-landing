import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-tuso-gray to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 text-center relative">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Stars decoration */}
          <div className="flex justify-center space-x-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-6 w-6 text-primary fill-current"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          
          {/* Main CTA text */}
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            Sé de los primeros en vivir{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              la experiencia Tuso
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Únete a la revolución del turismo inteligente y descubre un mundo de posibilidades esperándote quieres empezar siendo un promotor?
          </p>
          
          {/* CTA Button */}
          <div className="space-y-6">
            <Button className="hero-button text-xl px-12 py-8 rounded-full font-semibold group">
              Registrarme Ahora
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ✨ Acceso temprano • Sin costo • Experiencias únicas
            </p>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="slide-in-left">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">aun no sabemos</div>
              <p className="text-muted-foreground">Usuarios registrados</p>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">aun no sabemos</div>
              <p className="text-muted-foreground">Destinos únicos</p>
            </div>
            
            <div className="slide-in-right">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">aun no sabemos</div>
              <p className="text-muted-foreground">Valoración promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;