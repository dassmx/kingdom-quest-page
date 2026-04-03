import { useState } from "react";
import { Compass } from "lucide-react";
import { Users, Sparkles, ChevronRight, Globe, Swords, ArrowLeft, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import worldMapBg from "@/assets/world-map-bg.jpg";

interface WorldInfo {
  id: string;
  name: string;
  subtitle: string;
  players: string;
  status: "aberto" | "pre-inscricao" | "fechado";
  description: string;
}

const worlds: WorldInfo[] = [
  {
    id: "w1",
    name: "Valderon",
    subtitle: "O Berço dos Reinos",
    players: "~1.200",
    status: "aberto",
    description: "Um mundo equilibrado, ideal para novos comandantes provarem seu valor em batalhas estratégicas e forjarem alianças duradouras.",
  },
  {
    id: "w2",
    name: "Korvath",
    subtitle: "A Terra das Cinzas",
    players: "~800",
    status: "aberto",
    description: "Terras hostis onde apenas os mais astutos sobrevivem. Recursos são disputados com sangue e aço.",
  },
  {
    id: "w3",
    name: "Elyndor",
    subtitle: "O Véu Arcano",
    players: "~950",
    status: "aberto",
    description: "Um mundo onde a magia pulsa em cada hexágono. As artes arcanas são o diferencial entre a glória e a ruína.",
  },
  {
    id: "w4",
    name: "Nythrak",
    subtitle: "A Fronteira Sombria",
    players: "~350",
    status: "pre-inscricao",
    description: "Mundo recém-aberto. Terras virgens aguardam os primeiros conquistadores. Estabeleça seu domínio antes dos demais.",
  },
];

const mysticalUnits = [
  { name: "Magos", icon: Sparkles },
  { name: "Grifos Montados", icon: Swords },
  { name: "Golens de Pedra", icon: Swords },
];

const mysticalStructures = [
  { name: "Conclave Arcano", desc: "Treina Magos", icon: Landmark },
  { name: "Legião das Rédeas", desc: "Treina Grifos", icon: Landmark },
  { name: "Oficina de Runas", desc: "Treina Golens", icon: Landmark },
];

const statusLabel: Record<string, { text: string; className: string }> = {
  aberto: { text: "Aberto", className: "bg-green-500/20 text-green-400 border-green-500/30" },
  "pre-inscricao": { text: "Pré-inscrição", className: "bg-primary/20 text-primary border-primary/30" },
  fechado: { text: "Fechado", className: "bg-red-500/20 text-red-400 border-red-500/30" },
};

const regions = [
  { value: "norte", label: "Norte" },
  { value: "sul", label: "Sul" },
  { value: "leste", label: "Leste" },
  { value: "oeste", label: "Oeste" },
  { value: "aleatorio", label: "Aleatório" },
];

const WorldSelect = () => {
  const [selectedWorld, setSelectedWorld] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState("aleatorio");
  const navigate = useNavigate();
  const selected = worlds.find((w) => w.id === selectedWorld);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background art */}
      <img
        src={worldMapBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
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
          {/* World list */}
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

                <div className="mb-4">
                  <h2 className="font-display text-xl uppercase tracking-wider text-foreground">
                    {selected.name}
                  </h2>
                  <p className="text-sm text-muted-foreground font-body">{selected.subtitle}</p>
                </div>

                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  {selected.description}
                </p>

                {/* Units & Structures side by side */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/50 border border-border rounded-sm p-4">
                    <h4 className="font-display text-xs uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                      <Swords className="w-4 h-4 text-primary" />
                      Unidades Místicas
                    </h4>
                    <ul className="space-y-1.5">
                      {mysticalUnits.map((u) => (
                        <li key={u.name} className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                          <u.icon className="w-3 h-3 text-primary/60" />
                          {u.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/50 border border-border rounded-sm p-4">
                    <h4 className="font-display text-xs uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-primary" />
                      Estruturas de Treinamento
                    </h4>
                    <ul className="space-y-1.5">
                      {mysticalStructures.map((s) => (
                        <li key={s.name} className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                          <s.icon className="w-3 h-3 text-primary/60" />
                          <span>{s.name}</span>
                          <span className="text-muted-foreground/50">— {s.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-body">{selected.players} jogadores</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-sm border font-display uppercase tracking-wider ${statusLabel[selected.status].className}`}>
                      {statusLabel[selected.status].text}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-primary" />
                      <select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="bg-secondary border border-border rounded-sm px-2 py-1.5 text-xs font-display uppercase tracking-wider text-foreground focus:outline-none focus:border-primary/50 cursor-pointer"
                      >
                        {regions.map((r) => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </div>
                    <Button
                      onClick={() => navigate("/village")}
                      className="font-display uppercase tracking-widest text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm gap-2"
                    >
                      Entrar no Mundo
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
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
