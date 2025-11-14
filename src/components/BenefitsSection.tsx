import { MapPin, Users, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Explora destinos ocultos",
    description: "Descubre lugares únicos y experiencias auténticas que solo los locales conocen.",
  },
  {
    icon: Users,
    title: "Conéctate con viajeros",
    description: "Encuentra compañeros de aventura y comparte experiencias con otros exploradores.",
  },
  {
    icon: Smartphone,
    title: "Todo en una sola app",
    description: "Planifica, reserva y vive tu viaje completo desde una única plataforma.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Todo lo que necesitas para{" "}
            <span className="text-primary">viajar mejor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tuso transforma la manera en que planificas y vives tus aventuras
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card bg-card rounded-2xl p-8 text-center group fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;