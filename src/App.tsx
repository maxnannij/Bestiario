/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import { MONSTERS_DATA_MASTER as KOBOLDS_DATA, MASTER_LOOT_POOL as KOBOLD_LOOT } from "./data/monsters";
import { ArmorType, MonsterType, Monster } from "./types";
import Splash from "./components/Splash";
import RollTray, { RollResult } from "./components/RollTray";
import StatBlock from "./components/StatBlock";
import CalcTab from "./components/CalcTab";
import { 
  BookOpen, 
  Swords, 
  Search, 
  Filter, 
  RefreshCw, 
  Coins, 
  HelpCircle, 
  Info,
  Gift,
  Plus,
  Dices,
  Layers,
  Sparkles,
  ArrowUpDown,
  ArrowUp,
  ArrowDown
} from "lucide-react";

export default function App() {
  // Navigation states
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"monsters" | "encounter" | "rules">("monsters");

  // Search & Filters states
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedArmor, setSelectedArmor] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string>("");

  // Sorting states
  const [sortField, setSortField] = useState<"name" | "level" | "hp" | "armor">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Encounter Builder states
  const [partySize, setPartySize] = useState<number>(4);
  const [partyLevel, setPartyLevel] = useState<number>(2);
  const [activeEncounterMonsters, setActiveEncounterMonsters] = useState<{ [monsterId: string]: number }>({});

  // Dice Rolling History states
  const [rollHistory, setRollHistory] = useState<RollResult[]>([]);

  // Randomloot generator states
  const [generatedLoot, setGeneratedLoot] = useState<string[]>([]);

  // Action: Add monster to active encounter
  const handleAddToEncounter = useCallback((monsterId: string) => {
    setActiveEncounterMonsters(prev => ({
      ...prev,
      [monsterId]: (prev[monsterId] || 0) + 1
    }));
  }, []);

  // Action: Remove monster from active encounter
  const handleRemoveFromEncounter = useCallback((monsterId: string) => {
    setActiveEncounterMonsters(prev => {
      const copy = { ...prev };
      if (copy[monsterId] > 1) {
        copy[monsterId]--;
      } else {
        delete copy[monsterId];
      }
      return copy;
    });
  }, []);

  // Action: Set exact amount of monster in encounter
  const handleSetEncounterCount = useCallback((monsterId: string, count: number) => {
    setActiveEncounterMonsters(prev => {
      const copy = { ...prev };
      if (count <= 0) {
        delete copy[monsterId];
      } else {
        copy[monsterId] = count;
      }
      return copy;
    });
  }, []);

  // Action: Clear entire combat active list
  const handleClearEncounter = useCallback(() => {
    setActiveEncounterMonsters({});
  }, []);

  // Action: Load suggested encounter group
  const handleLoadEncounterPreset = useCallback((presetMonsters: { monsterId: string; count: number }[]) => {
    const fresh: { [monsterId: string]: number } = {};
    presetMonsters.forEach(m => {
      fresh[m.monsterId] = m.count;
    });
    setActiveEncounterMonsters(fresh);
    setActiveTab("encounter"); // Auto shift tab to let GMs inspect the loaded chart
  }, []);

  // Action: Master roller trigger
  const triggerDiceRoll = useCallback((source: string, formula: string) => {
    const cleanFormula = formula.replace(/\s+/g, "").toLowerCase();
    
    // Parse the dice formula (like "2d8+2", "1d4+2", "5d4", "1d6", etc.)
    const diceMatch = cleanFormula.match(/^(\d+)d(\d+)([-+]\d+)?$/);
    let sides = 6;
    let count = 1;
    let modifier = 0;
    
    if (diceMatch) {
      count = parseInt(diceMatch[1]);
      sides = parseInt(diceMatch[2]);
      modifier = diceMatch[3] ? parseInt(diceMatch[3]) : 0;
    } else {
      // Look for plain 'd20' or 'd8'
      const singleMatch = cleanFormula.match(/^d(\d+)([-+]\d+)?$/);
      if (singleMatch) {
        count = 1;
        sides = parseInt(singleMatch[1]);
        modifier = singleMatch[2] ? parseInt(singleMatch[2]) : 0;
      } else {
        // Fallback standard check: roll d20
        sides = 20;
        count = 1;
        modifier = 0;
      }
    }

    const rolls: number[] = [];
    let sum = 0;
    for (let i = 0; i < count; i++) {
      const rolledValue = Math.floor(Math.random() * sides) + 1;
      rolls.push(rolledValue);
      sum += rolledValue;
    }
    const finalTotal = sum + modifier;

    const newRoll: RollResult = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date(),
      source,
      formula,
      results: rolls,
      modifier,
      total: finalTotal
    };

    setRollHistory(prev => [...prev, newRoll]);
  }, []);

  // Action: Manual random roll from the customize tray
  const handleManualDiceRoll = useCallback((sides: number, count: number, modifier: number) => {
    const rolls: number[] = [];
    let sum = 0;
    for (let i = 0; i < count; i++) {
      const rolledValue = Math.floor(Math.random() * sides) + 1;
      rolls.push(rolledValue);
      sum += rolledValue;
    }
    const finalTotal = sum + modifier;
    const formulaStr = `${count}d${sides}${modifier > 0 ? `+${modifier}` : modifier < 0 ? modifier : ""}`;

    const newRoll: RollResult = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date(),
      source: "Manual",
      formula: formulaStr,
      results: rolls,
      modifier,
      total: finalTotal
    };

    setRollHistory(prev => [...prev, newRoll]);
  }, []);

  // Action: Wipe roll log history
  const handleClearHistory = useCallback(() => {
    setRollHistory([]);
  }, []);

  // Action: Generate Random Loot Loot pile
  const generateRandomLoot = () => {
    // Pick 2-3 unique random strings from the Kobold Loot list
    const numItems = Math.floor(Math.random() * 2) + 2; // 2 o 3 items
    const shuffled = [...KOBOLD_LOOT].sort(() => 0.5 - Math.random());
    setGeneratedLoot(shuffled.slice(0, numItems));
  };

  // Helper filters logic
  const discreteLevelOptions = useMemo(() => {
    const lvls = new Set<string>();
    KOBOLDS_DATA.forEach(m => lvls.add(m.level));
    return Array.from(lvls).sort();
  }, []);

  const discreteTypeOptions = useMemo(() => {
    const types = new Set<string>();
    KOBOLDS_DATA.forEach(m => types.add(m.type));
    return Array.from(types);
  }, []);

  const discreteGroupOptions = useMemo(() => {
    const groups = new Set<string>();
    KOBOLDS_DATA.forEach(m => {
      if (m.group) groups.add(m.group);
    });
    return Array.from(groups).sort();
  }, []);

  // Filter & sort monsters list
  const filteredAndSortedMonsters = useMemo(() => {
    let result = [...KOBOLDS_DATA];

    // Filter by text search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        m => m.name.toLowerCase().includes(q) || 
             (m.englishName && m.englishName.toLowerCase().includes(q)) ||
             m.type.toLowerCase().includes(q) ||
             m.group.toLowerCase().includes(q)
      );
    }

    // Filter by Group (Raza / Especie)
    if (selectedGroup !== "") {
      result = result.filter(m => m.group === selectedGroup);
    }

    // Filter by Type
    if (selectedType !== "") {
      result = result.filter(m => m.type === selectedType);
    }

    // Filter by Armor Type / challenge
    if (selectedArmor !== "") {
      result = result.filter(m => m.armor === selectedArmor);
    }

    // Filter by Level
    if (selectedLevel !== "") {
      result = result.filter(m => m.level === selectedLevel);
    }

    // Armor weight lookup for sorting
    const ARMOR_ORDER: Record<string, number> = {
      [ArmorType.None]: 0,
      [ArmorType.Medium]: 1,
      [ArmorType.Heavy]: 2
    };

    // Sort by chosen field and order
    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === "name") {
        comparison = a.name.localeCompare(b.name, "es", { sensitivity: "base" });
      } else if (sortField === "level") {
        comparison = a.levelValue - b.levelValue;
        if (comparison === 0) {
          comparison = a.name.localeCompare(b.name, "es", { sensitivity: "base" });
        }
      } else if (sortField === "hp") {
        const hpA = a.hpMax ?? (typeof a.hp === 'number' ? a.hp : 1);
        const hpB = b.hpMax ?? (typeof b.hp === 'number' ? b.hp : 1);
        comparison = hpA - hpB;
        if (comparison === 0) {
          comparison = a.name.localeCompare(b.name, "es", { sensitivity: "base" });
        }
      } else if (sortField === "armor") {
        const armorA = ARMOR_ORDER[a.armor] ?? 0;
        const armorB = ARMOR_ORDER[b.armor] ?? 0;
        comparison = armorA - armorB;
        if (comparison === 0) {
          comparison = a.name.localeCompare(b.name, "es", { sensitivity: "base" });
        }
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [searchQuery, selectedGroup, selectedType, selectedArmor, selectedLevel, sortField, sortOrder]);

  // Master reset for filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedType("");
    setSelectedArmor("");
    setSelectedLevel("");
    setSelectedGroup("");
    setSortField("name");
    setSortOrder("asc");
  };

  // Trigger splash enter screen action
  if (showSplash) {
    return <Splash onEnter={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-[#d1d1d1] flex flex-col font-sans pb-[90px]">
      
      {/* Upper Navigation Banner */}
      <header className="sticky top-0 z-30 bg-[#09090b]/95 backdrop-blur-md border-b border-[#2a2a2e] shadow-xl px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand Emblem */}
        <div 
          onClick={() => setShowSplash(true)} 
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-sm bg-[#c5a059] border border-[#c5a059]/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Swords className="w-5 h-5 text-[#0d0d0f]" />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-wider text-white flex items-center gap-1 uppercase">
              Bestiario de Monstruos
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a059] block leading-tight">
              Sistema de Rol Nimble &middot; MVP Funcional
            </span>
          </div>
        </div>

        {/* Action tabs buttons */}
        <nav className="flex items-center bg-[#121214] p-1 rounded-sm border border-[#2a2a2e] shrink-0">
          <button
            onClick={() => setActiveTab("monsters")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === "monsters" 
              ? "bg-[#c5a059] text-[#0d0d0f] shadow-md" 
              : "text-gray-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Bestiario
          </button>
          
          <button
            onClick={() => setActiveTab("encounter")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === "encounter" 
              ? "bg-[#c5a059] text-[#0d0d0f] shadow-md" 
              : "text-gray-400 hover:text-white"
            }`}
          >
            <Swords className="w-4 h-4" />
            Encuentros
            {Object.keys(activeEncounterMonsters).length > 0 && (
              <span className="w-2 h-2 bg-[#0d0d0f] rounded-full inline-block animate-ping" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("rules")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === "rules" 
              ? "bg-[#c5a059] text-[#0d0d0f] shadow-md" 
              : "text-gray-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Botín y Reglas
          </button>
        </nav>
      </header>

      {/* Main Workspace Frame Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        
        {/* TAB 1: THE BESTIARY / MONSTER ARCHIVE INDEX */}
        {activeTab === "monsters" && (
          <div className="flex flex-col gap-6">
            
            {/* Quick Informational Notice Banner */}
            <div className="bg-[#121214] border-l-2 border-[#c5a059] rounded-r p-4 flex gap-3 text-xs text-gray-400">
              <Info className="w-5 h-5 shrink-0 text-[#c5a059] mt-0.5" />
              <div>
                <strong className="text-white block font-serif uppercase tracking-wider">Manual de Criaturas Completo</strong>
                Cargados directamente los Kobolds, Goblins, No Muertos (Esqueletos y Zombis) y Orcos del Bestiario. El orden de las criaturas es alfabético. Prueba haciendo clic sobre el daño de cualquier ataque para tirar dados interactivos de forma automática.
              </div>
            </div>

            {/* Filter Search controls bar */}
            <div className="bg-[#121214] rounded-sm border border-[#2a2a2e] p-5 md:p-6 shadow-2xl flex flex-col gap-4">
              
              <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
                
                {/* Search Bar text */}
                <div className="relative w-full lg:max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4.5 h-4.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar criatura por nombre, tipo o raza..."
                    className="w-full bg-[#09090b] text-white pl-10 pr-4 py-2.5 rounded-sm border border-[#2a2a2e] focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] focus:outline-none placeholder-gray-600 text-xs font-mono"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono hover:text-[#c5a059] text-gray-500 cursor-pointer"
                    >
                      CLEAR
                    </button>
                  )}
                </div>

                {/* Reset Filters Quick Button */}
                <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 px-4 py-2.5 bg-[#1a1a1e] hover:bg-[#c5a059]/10 border border-[#2a2a2e] rounded-sm text-xs font-mono text-[#c5a059] cursor-pointer transition ml-auto shrink-0"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Reestablecer Filtros
                  </button>
                </div>

              </div>

              {/* Advanced select dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-[#2a2a2e] pt-4">

                {/* Filter list for MonsterGroup */}
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#c5a059] mb-1.5 font-bold">
                    Filtrar por Raza / Especie
                  </label>
                  <select
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    className="w-full bg-[#09090b] text-[#c5a059] cursor-pointer p-2.5 rounded-sm border border-[#c5a059]/30 text-xs font-mono uppercase focus:ring-1 focus:ring-[#c5a059] focus:border-[#c5a059] focus:outline-none"
                  >
                    <option value="">TODAS LAS RAZAS</option>
                    {discreteGroupOptions.map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Filter list for MonsterType */}
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1.5 font-bold">
                    Filtrar por Tipo de Criatura / Rol
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-[#09090b] text-white cursor-pointer p-2.5 rounded-sm border border-[#2a2a2e] text-xs font-mono uppercase focus:ring-1 focus:ring-[#c5a059] focus:border-[#c5a059] focus:outline-none"
                  >
                    <option value="">TODOS ({KOBOLDS_DATA.length})</option>
                    {discreteTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter list for levels */}
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1.5 font-bold">
                    Filtrar por Nivel de Amenaza
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full bg-[#09090b] text-white cursor-pointer p-2.5 rounded-sm border border-[#2a2a2e] text-xs font-mono focus:ring-1 focus:ring-[#c5a059] focus:border-[#c5a059] focus:outline-none"
                  >
                    <option value="">TODOS LOS NIVELES</option>
                    {discreteLevelOptions.map((lvl) => (
                      <option key={lvl} value={lvl}>
                        Nivel {lvl}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter list for Armor Type */}
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1.5 font-bold">
                    Filtrar por Armadura (Desafío)
                  </label>
                  <select
                    value={selectedArmor}
                    onChange={(e) => setSelectedArmor(e.target.value)}
                    className="w-full bg-[#09090b] text-white cursor-pointer p-2.5 rounded-sm border border-[#2a2a2e] text-xs font-mono uppercase focus:ring-1 focus:ring-[#c5a059] focus:border-[#c5a059] focus:outline-none"
                  >
                    <option value="">CUALQUIER ARMADURA</option>
                    <option value={ArmorType.None}>Sin Armadura (Ligera)</option>
                    <option value={ArmorType.Medium}>Armadura Media (M)</option>
                    <option value={ArmorType.Heavy}>Armadura Pesada (H)</option>
                  </select>
                </div>

              </div>

              {/* Dynamic sorting criteria controls */}
              <div className="flex flex-col gap-3 border-t border-[#2a2a2e] pt-5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block">
                  Ordenar Compendio de Criaturas
                </span>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Sorting metric selectors */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { field: "name" as const, label: "Nombre" },
                      { field: "level" as const, label: "Nivel / Peligro" },
                      { field: "hp" as const, label: "Puntos de Vida" },
                      { field: "armor" as const, label: "Armadura" }
                    ].map((opt) => {
                      const isActive = sortField === opt.field;
                      return (
                        <button
                          key={opt.field}
                          onClick={() => {
                            if (isActive) {
                              // Toggle order if active field is clicked
                              setSortOrder(prev => prev === "asc" ? "desc" : "asc");
                            } else {
                              setSortField(opt.field);
                              setSortOrder("asc");
                            }
                          }}
                          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-sm border text-xs font-mono transition cursor-pointer select-none ${
                            isActive 
                              ? "bg-[#c5a059]/10 border-[#c5a059] text-[#c5a059] font-bold" 
                              : "bg-[#09090b] border-[#2a2a2e] text-gray-400 hover:border-gray-600 hover:text-white"
                          }`}
                        >
                          {opt.label}
                          {isActive ? (
                            sortOrder === "asc" ? (
                              <ArrowUp className="w-3.5 h-3.5 shrink-0 text-[#c5a059]" />
                            ) : (
                              <ArrowDown className="w-3.5 h-3.5 shrink-0 text-[#c5a059]" />
                            )
                          ) : (
                            <ArrowUpDown className="w-3.5 h-3.5 shrink-0 text-gray-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Order direction manual switcher */}
                  <div className="flex bg-[#09090b] border border-[#2a2a2e] p-0.5 rounded-sm shrink-0 self-start lg:self-center">
                    <button
                      onClick={() => setSortOrder("asc")}
                      className={`px-3 py-1.5 text-[10px] uppercase font-mono transition cursor-pointer font-bold rounded-l-xs ${
                        sortOrder === "asc"
                          ? "bg-[#c5a059] text-[#0d0d0f]"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Menor a Mayor
                    </button>
                    <button
                      onClick={() => setSortOrder("desc")}
                      className={`px-3 py-1.5 text-[10px] uppercase font-mono transition cursor-pointer font-bold rounded-r-xs border-l border-[#2a2a2e] ${
                        sortOrder === "desc"
                          ? "bg-[#c5a059] text-[#0d0d0f]"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Mayor a Menor
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Results Grid count banner */}
            <div className="flex justify-between items-center border-b border-[#2a2a2e] pb-2">
              <span className="text-xs font-mono text-gray-400 uppercase">
                Mostrando <b className="text-[#c5a059] font-black">{filteredAndSortedMonsters.length}</b> de {KOBOLDS_DATA.length} criaturas ordenadas por <span className="text-white font-bold">{sortField === "name" ? "Nombre" : sortField === "level" ? "Nivel" : sortField === "hp" ? "Vida (HP)" : "Armadura"}</span> (<span className="text-white font-bold">{sortOrder === "asc" ? "menor a mayor" : "mayor a menor"}</span>)
              </span>
              {filteredAndSortedMonsters.length === 0 && (
                <span className="text-xs font-mono text-red-400">Sin coincidencias</span>
              )}
            </div>

            {/* Cards Matrix Render Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedMonsters.map((monster) => (
                <StatBlock
                  key={monster.id}
                  monster={monster}
                  onRollAction={triggerDiceRoll}
                  isInEncounter={(activeEncounterMonsters[monster.id] || 0) > 0}
                  onAddToEncounter={() => handleAddToEncounter(monster.id)}
                  onRemoveFromEncounter={() => handleRemoveFromEncounter(monster.id)}
                />
              ))}

              {filteredAndSortedMonsters.length === 0 && (
                <div className="col-span-full py-16 bg-[#121214]/60 border border-dashed border-[#2a2a2e] rounded-sm text-center text-gray-500">
                  <Search className="w-10 h-10 text-gray-600 mx-auto mb-2.5" />
                  <p className="text-sm font-bold">No se encontraron criaturas coincidentes</p>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto mt-1">Prueba a escribir otra palabra de búsqueda o reestablece los filtros a su estado inicial.</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: ENCOUNTER MATHEMATICS CALCULATOR */}
        {activeTab === "encounter" && (
          <CalcTab
            monstersList={KOBOLDS_DATA}
            activeEncounter={activeEncounterMonsters}
            partySize={partySize}
            partyLevel={partyLevel}
            onUpdatePartySize={setPartySize}
            onUpdatePartyLevel={setPartyLevel}
            onSetEncounterCount={handleSetEncounterCount}
            onClearEncounter={handleClearEncounter}
            onLoadEncounterPreset={handleLoadEncounterPreset}
          />
        )}

        {/* TAB 3: CUSTOM SYSTEM RULES & LOOT GENERATOR */}
        {activeTab === "rules" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Loot roller */}
            <div className="lg:col-span-6 bg-[#121214] rounded-sm border border-[#c5a059]/20 p-6 md:p-8 flex flex-col justify-between shadow-2xl">
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-[#c5a059]/10 border border-[#c5a059]/20 rounded-sm">
                    <Coins className="w-5 h-5 text-[#c5a059]" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold uppercase tracking-wider text-white">
                      Generador de Botín de Aventuras
                    </h2>
                    <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-gray-500">
                      Material interactivo del compendio (pág. 10)
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                  Los monstruos del compendio acumulan toda clase de baratijas inservibles, sándwiches robados, amuletos profanados y gemas en bruto. Genera un botín aleatorio en un abrir y cerrar de ojos para premiar a tus jugadores una vez terminada la batalla:
                </p>

                {/* Animated Loot Cards results block */}
                {generatedLoot.length > 0 && (
                  <motion.div 
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-[#09090b] border border-[#2a2a2e] rounded-sm p-5 mb-6 flex flex-col gap-3"
                  >
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#c5a059] font-black border-b border-[#2a2a2e] pb-1.5">
                      ¡Botín Encontrado en las Alforjas!
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {generatedLoot.map((item, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="text-[#c5a059] font-mono select-none mt-0.5">✦</span>
                          <span className="font-sans font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              <button
                type="button"
                onClick={generateRandomLoot}
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d8b571] border border-[#c5a059]/20 text-[#0d0d0f] rounded-sm text-xs font-mono font-bold uppercase tracking-wider shadow-lg cursor-pointer flex items-center justify-center gap-2 group transition-all"
              >
                <Gift className="w-4 h-4" />
                Saquear Cuerpos de Criaturas
              </button>
            </div>

            {/* Right Column: Key Rules Overview */}
            <div className="lg:col-span-6 bg-[#121214] rounded-sm border border-[#2a2a2e] p-6 md:p-8 shadow-2xl flex flex-col gap-5">
              
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#c5a059]/10 border border-[#c5a059]/20 rounded-sm">
                  <HelpCircle className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold uppercase tracking-wider text-white">
                    Reglas Esenciales de Combate
                  </h2>
                  <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-gray-500">
                    Normas generales de criaturas (pág. 2)
                  </span>
                </div>
              </div>

              {/* Rules Cards List Accordion */}
              <div className="flex flex-col gap-3 text-xs leading-relaxed text-gray-300">
                <div className="bg-[#09090b] p-3.5 rounded-sm border border-[#2a2a2e]">
                  <strong className="text-[#c5a059] font-serif uppercase tracking-wider text-xs block mb-1">
                    🛡️ Mecánica de Armaduras
                  </strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li><b className="text-gray-300">Media (M)</b>: Ignora modificadores de estadísticas. El daño es la suma exacta de los dados.</li>
                    <li><b className="text-gray-300">Pesada (H)</b>: Ignora modificadores y reduce a la mitad el total (redondeado hacia arriba).</li>
                  </ul>
                </div>

                <div className="bg-[#09090b] p-3.5 rounded-sm border border-[#2a2a2e]">
                  <strong className="text-[#c5a059] font-serif uppercase tracking-wider text-xs block mb-1">
                    👥 Flunkies, Esbirros &amp; Minions
                  </strong>
                  <p className="text-gray-400 text-[11px]">
                    Los minions son fáciles de eliminar pero letales si sobrepasan en número. No tienen puntos de golpe (HP) para rastrear: cualquier ataque exitoso les quita la vida. Sus ataques colectivos combinan el daño para agilizar el turno del director de juego.
                  </p>
                </div>

                <div className="bg-[#09090b] p-3.5 rounded-sm border border-[#2a2a2e]">
                  <strong className="text-[#c5a059] font-serif uppercase tracking-wider text-xs block mb-1">
                    👥 Habilidades Singulares de Grupos
                  </strong>
                  <p className="text-gray-400 text-[11px]">
                    Cada grupo de monstruos posee un rasgo grupal característico que define sus tácticas predilectas: los Kobolds ejecutan ataques gratis con ¡Nooooo!, los Goblins se reposicionan con Escurridizo, los Esqueletos se protegen con Fragmentación, los Zombis resisten golpes fatales con Fuerza de la Tumba, y los Orcos arrollan con su Carga Implacable.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Floating Dice Drawer Controller */}
      <RollTray
        history={rollHistory}
        onClearHistory={handleClearHistory}
        onManualRoll={handleManualDiceRoll}
      />
    </div>
  );
}
