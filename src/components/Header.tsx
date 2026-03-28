import { Shield } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Regras", href: "#regras" },
  { label: "Suporte", href: "#suporte" },
  { label: "Discord", href: "#discord" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-12">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <span className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
            Dominus
          </span>
        </div>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
