import { useState } from "react";
import { Shield, Users, Sparkles, ChevronRight, Globe, Swords, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import worldMapBg from "@/assets/world-map-bg.jpg";

interface WorldInfo {
  id: string;
  name: string;
  subtitle: string;
  players: string;
  status: "aberto" | "pre-inscricao" | "fechado";
  description: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado" | "Veterano";
}

const worlds: WorldInfo[] = [
  {
    id: "w1",
    name: "Valderon",
    subtitle: "O Berço dos Reinos",
    players: "~1.200",
    status: "aberto",
    description: "Um mundo equilibrado, ideal para novos comandantes provarem seu valor em batalhas estratégicas e forjarem alianças duradouras.",
    difficulty: "Iniciante",
  },
  {
    id: "w2",
    name: "Korvath",
    subtitle: "A Terra das Cinzas",
    players: "~800",
    status: "aberto",
    description: "Terras hostis onde apenas os mais astutos sobrevivem. Recursos são disputados com sangue e aço.",
    difficulty: "Avançado",
  },
  {
    id: "w3",
    name: "Elyndor",
    subtitle: "O Véu Arcano",
    players: "~950",
    status: "aberto",
    description: "Um mundo onde a magia pulsa em cada hexágono. As artes arcanas são o diferencial entre a glória e a ruína.",
    difficulty: "Intermediário",
  },
  {
    id: "w4",
    name: "Nythrak",
    subtitle: "A Fronteira Sombria",
    players: "~350",
    status: "pre-inscricao",
    description: "Mundo recém-aberto. Terras virgens aguardam os primeiros conquistadores. Estabeleça seu domínio antes dos demais.",
    difficulty: "Veterano",
  },
];

const mysticalContent = [
  {
    structure: "Conclave Arcano",
    structureDesc: "Antiga academia de artes ocultas",
    unit: "Magos",
    unitDesc: "Conjuradores de feitiços devastadores em área. Lentos, mas letais à distância.",
    icon: Sparkles,
  },
  {
    structure: "Legião das Rédeas",
    structureDesc: "Estábulo de criaturas aladas",
    unit: "Grifos Montados",
    unitDesc: "Unidades de apoio rápido e escolta. Ignoram penalidades de terreno ao se deslocar.",
    icon: Shield,
  },
  {
    structure: "Oficina de Runas",
    structureDesc: "Oficina de construtos encantados",
    unit: "Golens de Pedra",
    unitDesc: "Construtos colossais de defesa. Resistentes, mas extremamente lentos.",
    icon: Swords,
  },
];

const difficultyColor: Record<string, string> = {
  Iniciante: "text-green-400",
  Intermediário: "text-primary",
  Avançado: "text-accent",
  Veterano: "text-red-400",
};

const statusLabel: Record<string, { text: string; className: string }> = {
  aberto: { text: "Aberto", className: "bg-green-500/20 text-green-400 border-green-500/30" },
  "pre-inscricao": { text: "Pré-inscrição", className: "bg-primary/20 text-primary border-primary/30" },
  fechado: { text: "Fechado", className: "bg-red-500/20 text-red-400 border-red-500/30" },
};

const WorldSelect = () => {
  const [selectedWorld, setSelectedWorld] = useState<string | null>(null);
  const selected = worlds.find((w) => w.id === selectedWorld);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background art */}
      <div className="absolute inset-0">
        <img
          src={worldMapBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

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
            Cada mundo possui suas próprias regras e desafios. Todos os biomas estão presentes em cada mundo.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* World list — compact */}
          <div className="lg:col-span-2 space-y-2">
            {worlds.map((world) => {
              const status = statusLabel[world.status];
              return (
                <button
                  key={world.id}
                  onClick={() => setSelectedWorld(world.id)}
                  className={`w-full text-left px-4 py-3 rounded-sm border transition-all duration-200 group flex items-center justify-between ${
                    selectedWorld === world.id
                      ? "bg-card border-primary/50 shadow-[0_0_20px_hsl(43_80%_55%_/_0.1)]"
                      : "bg-card/50 border-border hover:border-primary/30 hover:bg-card"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-sm uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                      {world.name}
                    </h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-sm border font-display uppercase tracking-wider ${status.className}`}>
                      {status.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-xs font-body">{world.players}</span>
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

                <div className="flex items-center justify-between mb-4">
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

                {/* Mystical units & structures */}
                <div className="mb-6">
                  <h4 className="font-display text-xs uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Unidades & Estruturas Místicas
                  </h4>
                  <div className="grid gap-3">
                    {mysticalContent.map((item) => (
                      <div
                        key={item.unit}
                        className="bg-secondary/50 border border-border rounded-sm p-3 flex items-start gap-3"
                      >
                        <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-display text-xs uppercase tracking-wider text-foreground">
                              {item.unit}
                            </span>
                            <span className="text-[10px] text-muted-foreground font-body">
                              treinados no
                            </span>
                            <span className="font-display text-[11px] uppercase tracking-wider text-primary">
                              {item.structure}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground/80 font-body mt-1">
                            {item.unitDesc}
                          </p>
                          <p className="text-[10px] text-muted-foreground/50 font-body mt-0.5 italic">
                            {item.structureDesc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Player count & enter */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-body">{selected.players} jogadores</span>
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
              <div className="bg-card/30 border border-border/50 rounded-sm p-12 flex flex-col items-center justify-center min-h-[300px]">
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
