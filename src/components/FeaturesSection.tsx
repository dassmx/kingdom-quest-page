import { motion } from "framer-motion";
import { Sword, Castle, Users, Crown, Map, Flame } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "Combate Tático",
    description: "Comande tropas em batalhas épicas com sistema de combate estratégico em tempo real.",
  },
  {
    icon: Castle,
    title: "Construa seu Reino",
    description: "Erga fortalezas, desenvolva cidades e fortifique suas muralhas contra invasores.",
  },
  {
    icon: Users,
    title: "Alianças & Traições",
    description: "Forme alianças poderosas ou traia seus aliados — a política medieval é impiedosa.",
  },
  {
    icon: Crown,
    title: "Ascenda ao Trono",
    description: "Dispute o título de Rei Supremo em eventos sazonais com milhares de jogadores.",
  },
  {
    icon: Map,
    title: "Mundo Vasto",
    description: "Explore um mapa continental com biomas únicos, masmorras e territórios ocultos.",
  },
  {
    icon: Flame,
    title: "Cercos Épicos",
    description: "Lidere cercos a castelos inimigos com máquinas de guerra e estratégias devastadoras.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
            Forje seu <span className="text-primary">Legado</span>
          </h2>
          <div className="mt-4 h-px w-48 mx-auto border-ornate border-t" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)]"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:animate-flicker" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
