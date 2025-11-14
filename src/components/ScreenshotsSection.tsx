import tusoAppScreens from "@/assets/tuso-app-screens.png";

const ScreenshotsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Una experiencia diseñada para ti
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Interfaz intuitiva y funciones poderosas que hacen que viajar sea más fácil que nunca
          </p>
        </div>
        
        <div className="flex justify-center slide-in-left">
          <div className="relative max-w-4xl">
            <div className="absolute -inset-8 bg-gradient-to-r from-tuso-white/20 to-tuso-white/10 rounded-3xl blur-3xl"></div>
            <img 
              src={tusoAppScreens}
              alt="Tuso App Screenshots - Splash, Registro de negocio y Home con paisajes"
              className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">
              Acceso Rápido
            </h3>
            <p className="text-secondary-foreground/80">
              Login y registro simplificados para comenzar tu aventura al instante
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">
              Descubrimiento
            </h3>
            <p className="text-secondary-foreground/80">
              Explora destinos únicos con recomendaciones personalizadas
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">
              Gestión Personal
            </h3>
            <p className="text-secondary-foreground/80">
              Administra tus viajes, favoritos y conexiones desde tu perfil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;