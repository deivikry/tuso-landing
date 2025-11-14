import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Tuso</h3>
            <p className="text-accent-foreground/80 mb-6 max-w-md">
              La aplicación de turismo que transforma la manera en que descubres y vives tus aventuras.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Mail className="h-4 w-4 text-secondary-foreground" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Phone className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Funciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Descarga</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Soporte</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-12 pt-8 text-center">
          <p className="text-accent-foreground/60">
            © 2024 Tuso. Todos los derechos reservados. Hecho con cariño para viajeros.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;