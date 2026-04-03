/**
 * MOCK DATA — Dados fictícios para prototipação da visão da vila.
 * Cada bloco será substituído por dados reais do backend futuramente.
 */

export interface VillageData {
  id: string;
  name: string;
  x: number;
  y: number;
  points: number;
  population: number;
  maxPopulation: number;
  owner: string;
  worldId: string;
  worldName: string;
}

export interface Resources {
  wood: number;
  clay: number;
  iron: number;
  warehouseCapacity: number;
  populationUsed: number;
  populationMax: number;
}

export interface BuildingQueueItem {
  name: string;
  currentLevel: number;
  targetLevel: number;
  etaSeconds: number; // seconds remaining (mock)
}

export interface TrainingQueueItem {
  unitName: string;
  quantity: number;
  etaSeconds: number;
}

// --- MOCK: Vila ativa ---
export const mockVillage: VillageData = {
  id: "v1",
  name: "Pedra do Falcão",
  x: 412,
  y: -87,
  points: 1340,
  population: 187,
  maxPopulation: 240,
  owner: "Comandante",
  worldId: "w1",
  worldName: "Valderon",
};

// --- MOCK: Lista de vilas do jogador (preparado para múltiplas) ---
export const mockPlayerVillages: Pick<VillageData, "id" | "name" | "x" | "y" | "points">[] = [
  { id: "v1", name: "Pedra do Falcão", x: 412, y: -87, points: 1340 },
  { id: "v2", name: "Forte Cervo", x: 415, y: -84, points: 620 },
];

// --- MOCK: Recursos ---
export const mockResources: Resources = {
  wood: 4820,
  clay: 3150,
  iron: 2790,
  warehouseCapacity: 8000,
  populationUsed: 187,
  populationMax: 240,
};

// --- MOCK: Fila de construção ---
export const mockBuildingQueue: BuildingQueueItem[] = [
  { name: "Quartel", currentLevel: 3, targetLevel: 4, etaSeconds: 2340 },
  { name: "Fazenda", currentLevel: 5, targetLevel: 6, etaSeconds: 5100 },
];

// --- MOCK: Fila de treinamento ---
export const mockTrainingQueue: TrainingQueueItem[] = [
  { unitName: "Lanceiros", quantity: 15, etaSeconds: 1800 },
];
