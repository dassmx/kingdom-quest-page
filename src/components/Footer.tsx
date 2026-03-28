import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Reinos de Ferro & Fogo
          </span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground font-body">
          <a href="#" className="hover:text-primary transition-colors">Termos</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Suporte</a>
          <a href="#" className="hover:text-primary transition-colors">Discord</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
