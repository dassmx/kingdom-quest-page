import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  TreePine,
  Mountain,
  Gem,
  Users,
  Warehouse,
  Hammer,
  Swords,
  Map,
  ScrollText,
  ChevronDown,
  Clock,
  ArrowUpRight,
  Landmark,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import villageBg from "@/assets/village-bg.jpg";
import {
  mockVillage,
  mockPlayerVillages,
  mockResources,
  mockBuildingQueue,
  mockTrainingQueue,
} from "@/data/villageMocks";

// --- Helpers ---
function formatEta(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function resourcePercent(current: number, max: number) {
  return Math.min(100, Math.round((current / max) * 100));
}

// --- Quick-access shortcuts ---
const shortcuts = [
  { label: "Construções", icon: Landmark, href: "#" },
  { label: "Mapa", icon: Map, href: "#" },
  { label: "Tropas", icon: Swords, href: "#" },
  { label: "Relatórios", icon: ScrollText, href: "#" },
];

const VillageOverview = () => {
  const [activeVillage, setActiveVillage] = useState(mockVillage.id);
  const [villageMenuOpen, setVillageMenuOpen] = useState(false);
  const village = mockVillage;
  const resources = mockResources;
  const buildQueue = mockBuildingQueue;
  const trainQueue = mockTrainingQueue;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <img
        src={villageBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />

      {/* Top ornament */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* ===== AUTHENTICATED HEADER ===== */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-12">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Dominus
            </span>
          </div>

          {/* Nav shortcuts (desktop) */}
          <nav className="hidden md:flex items-center gap-5">
            {shortcuts.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.label}
              </a>
            ))}
          </nav>

          {/* World badge */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <span className="hidden sm:inline">{village.worldName}</span>
            <Link
              to="/worlds"
              className="text-primary hover:text-primary/80 transition-colors font-display uppercase tracking-wider text-[10px]"
            >
              Trocar
            </Link>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-6 space-y-6">

        {/* --- VILLAGE IDENTITY BAR --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            {/* Village selector */}
            <div className="relative">
              <button
                onClick={() => setVillageMenuOpen(!villageMenuOpen)}
                className="flex items-center gap-2 group"
              >
                <h1 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                  {village.name}
                </h1>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${villageMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown: outras vilas */}
              {villageMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-sm shadow-lg min-w-[200px] z-20">
                  {mockPlayerVillages.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => { setActiveVillage(v.id); setVillageMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 font-body text-sm hover:bg-secondary transition-colors flex items-center justify-between ${
                        v.id === activeVillage ? "text-primary" : "text-foreground"
                      }`}
                    >
                      <span>{v.name}</span>
                      <span className="text-xs text-muted-foreground">{v.points} pts</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Coordinates & points */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
              <span className="bg-secondary px-2 py-0.5 rounded-sm border border-border">
                {village.x} | {village.y}
              </span>
              <span>{village.points} pontos</span>
            </div>
          </div>

          {/* Population */}
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
            <Users className="w-4 h-4 text-primary/70" />
            <span>
              {resources.populationUsed} / {resources.populationMax}
            </span>
            <span className="text-xs">população</span>
          </div>
        </motion.section>

        {/* Ornamental divider */}
        <div className="h-px border-ornate" />

        {/* --- RESOURCES BAR --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Reservas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Madeira", value: resources.wood, icon: TreePine, color: "text-green-400" },
              { label: "Argila", value: resources.clay, icon: Mountain, color: "text-amber-500" },
              { label: "Ferro", value: resources.iron, icon: Gem, color: "text-slate-300" },
              { label: "Armazém", value: resources.warehouseCapacity, icon: Warehouse, color: "text-primary", isCapacity: true },
            ].map((res) => (
              <div
                key={res.label}
                className="bg-card/70 border border-border rounded-sm p-3 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <res.icon className={`w-4 h-4 ${res.color}`} />
                    <span className="font-display text-[11px] uppercase tracking-wider text-foreground">
                      {res.label}
                    </span>
                  </div>
                  <span className="font-body text-sm text-foreground font-semibold">
                    {res.value.toLocaleString("pt-BR")}
                  </span>
                </div>
                {!res.isCapacity && (
                  <Progress
                    value={resourcePercent(res.value, resources.warehouseCapacity)}
                    className="h-1.5 bg-secondary"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- OPERATIONAL CORE: Construction + Training --- */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Construction Queue */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-card/70 border border-border rounded-sm p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Hammer className="w-4 h-4 text-primary/70" />
                Fila de Construção
              </h2>
              <span className="text-[10px] text-muted-foreground font-body">
                {buildQueue.length}/2 vagas
              </span>
            </div>

            {buildQueue.length > 0 ? (
              <div className="space-y-3">
                {buildQueue.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-2 ${
                      i < buildQueue.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <div>
                      <span className="font-body text-sm text-foreground">{item.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        Nv. {item.currentLevel} → {item.targetLevel}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-body">
                      <Clock className="w-3 h-3" />
                      {formatEta(item.etaSeconds)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground font-body italic">
                Nenhuma construção em andamento.
              </p>
            )}
          </motion.section>

          {/* Training Queue */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-card/70 border border-border rounded-sm p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Swords className="w-4 h-4 text-primary/70" />
                Fila de Treinamento
              </h2>
            </div>

            {trainQueue.length > 0 ? (
              <div className="space-y-3">
                {trainQueue.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-2 ${
                      i < trainQueue.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <div>
                      <span className="font-body text-sm text-foreground">{item.unitName}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        ×{item.quantity}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-body">
                      <Clock className="w-3 h-3" />
                      {formatEta(item.etaSeconds)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground font-body italic">
                Nenhuma tropa sendo treinada.
              </p>
            )}
          </motion.section>
        </div>

        {/* --- QUICK ACCESS --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h2 className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Acesso Rápido
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {shortcuts.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="bg-card/50 border border-border rounded-sm p-4 flex items-center gap-3 hover:border-primary/40 hover:bg-card transition-all group"
              >
                <s.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                <span className="font-display text-xs uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                  {s.label}
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};

export default VillageOverview;
