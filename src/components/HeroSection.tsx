import { motion } from "framer-motion";
import { Shield, Swords } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Mundo medieval vasto com castelos e biomas"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <Shield className="w-5 h-5 text-primary animate-flicker" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-foreground text-gold-glow uppercase leading-tight">
            Dominus
          </h1>

          <p className="font-body text-lg md:text-xl text-secondary-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Conquiste territórios hexagonais, forme guildas implacáveis e comande
            exércitos em um mundo medieval vasto. Jogue direto no navegador —
            sem downloads, sem Pay to Win.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-display text-lg font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:scale-105">
            <Swords className="inline w-5 h-5 mr-2 -mt-0.5" />
            Jogar Agora
          </button>
          <button className="px-8 py-4 border border-primary/40 text-primary font-display text-lg font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-primary/10 hover:border-primary">
            Saiba Mais
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center gap-8 md:gap-16"
        >
          {[
            { value: "50K+", label: "Jogadores" },
            { value: "200+", label: "Guildas" },
            { value: "∞", label: "Batalhas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
