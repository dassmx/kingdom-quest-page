import { motion } from "framer-motion";
import { Sword, Castle, Users, Map, ShieldOff, Hexagon } from "lucide-react";
import unitDwarf from "@/assets/unit-dwarf.png";
import unitElf from "@/assets/unit-elf.png";
import unitMage from "@/assets/unit-mage.png";
import unitKing from "@/assets/unit-king.png";
import unitBallista from "@/assets/unit-ballista.png";
import unitGriffin from "@/assets/unit-griffin.png";

const features = [
  {
    icon: Sword,
    title: "Combate Tático",
    description: "Comande anões guerreiros, arqueiros elfos e magos humanos em batalhas estratégicas onde cada unidade faz a diferença.",
    image: unitDwarf,
    imageAlt: "Anão guerreiro com machado de batalha",
  },
  {
    icon: Castle,
    title: "Construa seu Domínio",
    description: "Erga fortalezas, desenvolva cidades e fortifique suas muralhas. Seu território é sua força.",
    image: unitKing,
    imageAlt: "Rei em armadura ornamentada",
  },
  {
    icon: Users,
    title: "Guildas & Diplomacia",
    description: "Forme guildas poderosas que podem liderar mundos inteiros pela diplomacia ou pela força das armas.",
    image: unitElf,
    imageAlt: "Arqueiro elfo com arco longo",
  },
  {
    icon: Hexagon,
    title: "Mundo Hexagonal",
    description: "Explore um mapa continental em tiles hexagonais com biomas que influenciam diretamente a movimentação das suas tropas.",
    image: unitBallista,
    imageAlt: "Balista reforçada de cerco",
  },
  {
    icon: Map,
    title: "Biomas Estratégicos",
    description: "Florestas, montanhas, desertos e pântanos — cada bioma altera o campo de batalha e exige táticas diferentes.",
    image: unitMage,
    imageAlt: "Mago humano com cajado arcano",
  },
  {
    icon: ShieldOff,
    title: "Zero Pay to Win",
    description: "Vitória se conquista com estratégia e aliados, não com a carteira. Dominus é justo para todos os jogadores.",
    image: unitGriffin,
    imageAlt: "Grifo majestoso montado por cavaleiro",
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
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)] flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <feature.icon className="w-10 h-10 text-primary group-hover:animate-flicker" />
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
              </div>
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
