import { useState } from "react";
import { Shield, Users, Sparkles, Leaf, Mountain, Skull, ChevronRight, Globe, Swords, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface WorldInfo {
  id: string;
  name: string;
  subtitle: string;
  players: string;
  status: "online" | "novo" | "cheio";
  features: string[];
  biomes: string[];
  mysticalUnits: string[];
  description: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado" | "Veterano";
}

const worlds: WorldInfo[] = [
  {
    id: "w1",
    name: "Valderon",
    subtitle: "O Berço dos Reinos",
    players: "~1.200 jogadores",
    status: "online",
    features: ["Guildas ativas", "Eventos semanais", "Comércio entre reinos"],
    biomes: ["Campos verdejantes", "Florestas densas", "Montanhas geladas"],
    mysticalUnits: ["Grifos Montados", "Golems de Pedra", "Fênix de Guerra"],
    description: "Um mundo equilibrado, ideal para novos comandantes provarem seu valor em batalhas estratégicas e forjarem alianças duradouras.",
    difficulty: "Iniciante",
  },
  {
    id: "w2",
    name: "Korvath",
    subtitle: "A Terra das Cinzas",
    players: "~800 jogadores",
    status: "online",
    features: ["PvP intenso", "Recursos escassos", "Cercos frequentes"],
    biomes: ["Desertos áridos", "Pântanos sombrios", "Planícies vulcânicas"],
    mysticalUnits: ["Wyrms de Lava", "Espectros das Cinzas", "Basiliscos Blindados"],
    description: "Terras hostis onde apenas os mais astutos sobrevivem. Recursos são disputados com sangue e aço.",
    difficulty: "Avançado",
  },
  {
    id: "w3",
    name: "Elyndor",
    subtitle: "O Véu Arcano",
    players: "~950 jogadores",
    status: "online",
    features: ["Artes arcanas potentes", "Relíquias místicas", "Diplomacia profunda"],
    biomes: ["Florestas élficas", "Rios cristalinos", "Colinas encantadas"],
    mysticalUnits: ["Treants Anciãos", "Dragões Prateados", "Hidras Arcanas"],
    description: "Um mundo onde a magia pulsa em cada hexágono. As artes arcanas são o diferencial entre a glória e a ruína.",
    difficulty: "Intermediário",
  },
  {
    id: "w4",
    name: "Nythrak",
    subtitle: "A Fronteira Sombria",
    players: "~350 jogadores",
    status: "novo",
    features: ["Mapa inexplorado", "Criaturas inéditas", "Corrida territorial"],
    biomes: ["Tundra perpétua", "Cavernas profundas", "Florestas petrificadas"],
    mysticalUnits: ["Quimeras Sombrias", "Colossos de Gelo", "Manticoras Selvagens"],
    description: "Mundo recém-aberto. Terras virgens aguardam os primeiros conquistadores. Estabeleça seu domínio antes dos demais.",
    difficulty: "Veterano",
  },
];

const difficultyColor: Record<string, string> = {
  Iniciante: "text-green-400",
  Intermediário: "text-primary",
  Avançado: "text-accent",
  Veterano: "text-red-400",
};

const statusLabel: Record<string, { text: string; className: string }> = {
  online: { text: "Online", className: "bg-green-500/20 text-green-400 border-green-500/30" },
  novo: { text: "Novo", className: "bg-primary/20 text-primary border-primary/30" },
  cheio: { text: "Lotado", className: "bg-red-500/20 text-red-400 border-red-500/30" },
};

const WorldSelect = () => {
  const [selectedWorld, setSelectedWorld] = useState<string | null>(null);
  const selected = worlds.find((w) => w.id === selectedWorld);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(43_80%_55%_/_0.04)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <Link
          to="/auth"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 font-body text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Globe className="w-7 h-7 text-primary" />
            <h1 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-foreground">
              Escolha Seu Mundo
            </h1>
          </div>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Cada mundo possui suas próprias regras, criaturas e desafios. Escolha sabiamente onde erguer seu domínio.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* World list */}
          <div className="lg:col-span-2 space-y-3">
            {worlds.map((world) => {
              const status = statusLabel[world.status];
              return (
                <button
                  key={world.id}
                  onClick={() => setSelectedWorld(world.id)}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-200 group ${
                    selectedWorld === world.id
                      ? "bg-card border-primary/50 shadow-[0_0_20px_hsl(43_80%_55%_/_0.1)]"
                      : "bg-card/50 border-border hover:border-primary/30 hover:bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-display text-sm uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                        {world.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-body">{world.subtitle}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-sm border font-display uppercase tracking-wider ${status.className}`}>
                      {status.text}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="w-3.5 h-3.5" />
                      <span className="text-xs font-body">{world.players}</span>
                    </div>
                    <span className={`text-xs font-display uppercase tracking-wider ${difficultyColor[world.difficulty]}`}>
                      {world.difficulty}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* World details */}
          <div className="lg:col-span-3">
            {selected ? (
              <div className="bg-card border border-border rounded-sm p-6 relative">
                <div className="absolute top-0 left-4 right-4 h-px border-ornate" />

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-display text-xl uppercase tracking-wider text-foreground">
                      {selected.name}
                    </h2>
                    <p className="text-sm text-muted-foreground font-body">{selected.subtitle}</p>
                  </div>
                  <span className={`text-sm font-display uppercase tracking-wider ${difficultyColor[selected.difficulty]}`}>
                    {selected.difficulty}
                  </span>
                </div>

                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  {selected.description}
                </p>

                {/* Info grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/50 border border-border rounded-sm p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <h4 className="font-display text-xs uppercase tracking-wider text-foreground">
                        Unidades Místicas
                      </h4>
                    </div>
                    <ul className="space-y-1">
                      {selected.mysticalUnits.map((unit) => (
                        <li key={unit} className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                          <Swords className="w-3 h-3 text-primary/60" />
                          {unit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/50 border border-border rounded-sm p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-4 h-4 text-primary" />
                      <h4 className="font-display text-xs uppercase tracking-wider text-foreground">
                        Biomas Presentes
                      </h4>
                    </div>
                    <ul className="space-y-1">
                      {selected.biomes.map((biome) => (
                        <li key={biome} className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                          <Mountain className="w-3 h-3 text-primary/60" />
                          {biome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-secondary/50 border border-border rounded-sm p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <h4 className="font-display text-xs uppercase tracking-wider text-foreground">
                      Características
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] px-2.5 py-1 bg-background border border-border rounded-sm text-muted-foreground font-body"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Player count & enter */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-body">{selected.players}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-sm border font-display uppercase tracking-wider ${statusLabel[selected.status].className}`}>
                      {statusLabel[selected.status].text}
                    </span>
                  </div>
                  <Button className="font-display uppercase tracking-widest text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm gap-2">
                    Entrar no Mundo
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="absolute bottom-0 left-4 right-4 h-px border-ornate" />
              </div>
            ) : (
              <div className="bg-card/30 border border-border/50 rounded-sm p-12 flex flex-col items-center justify-center min-h-[400px]">
                <Globe className="w-12 h-12 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground font-body text-sm text-center">
                  Selecione um mundo para ver seus detalhes
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};

export default WorldSelect;
