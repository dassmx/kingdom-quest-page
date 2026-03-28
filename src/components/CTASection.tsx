import { motion } from "framer-motion";
import { Swords } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
          Sua <span className="text-primary text-gold-glow">Lenda</span> Começa Aqui
        </h2>
        <p className="font-body text-lg text-secondary-foreground mt-4 max-w-xl mx-auto">
          Entre no campo de batalha. Gratuito para jogar, direto no navegador.
          Sem downloads, sem Pay to Win — apenas estratégia pura.
        </p>
        <div className="mt-4 h-px w-48 mx-auto border-ornate border-t" />

        <button className="mt-10 px-10 py-5 bg-primary text-primary-foreground font-display text-xl font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:scale-105">
          <Swords className="inline w-6 h-6 mr-3 -mt-1" />
          Começar a Jogar
        </button>

        <p className="mt-4 text-sm text-muted-foreground">
          Mais de 50.000 guerreiros já estão lutando. Junte-se a eles.
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;
