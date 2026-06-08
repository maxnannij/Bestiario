import { Monster, ArmorType, MonsterType } from "../types";
import { Heart, Shield, Eye, Flame, Trash2, CalendarCheck, Swords, Dices, Layers, PlayCircle, HelpCircle } from "lucide-react";

interface StatBlockProps {
  key?: string;
  monster: Monster;
  onRollAction: (source: string, formula: string) => void;
  isInEncounter: boolean;
  onAddToEncounter?: () => void;
  onRemoveFromEncounter?: () => void;
}

// Simple regex parser to detect standard dice and roll them
export function parseAndRollFormula(formula: string): { count: number; sides: number; modifier: number } | null {
  const clean = formula.replace(/\s+/g, "").toLowerCase();
  const match = clean.match(/^(\d+)d(\d+)([-+]\d+)?$/);
  
  if (match) {
    const count = parseInt(match[1]);
    const sides = parseInt(match[2]);
    const modifier = match[3] ? parseInt(match[3]) : 0;
    return { count, sides, modifier };
  }
  
  // Single die syntax like 'd4' or 'd6'
  const singleMatch = clean.match(/^d(\d+)([-+]\d+)?$/);
  if (singleMatch) {
    const count = 1;
    const sides = parseInt(singleMatch[1]);
    const modifier = singleMatch[2] ? parseInt(singleMatch[2]) : 0;
    return { count, sides, modifier };
  }

  return null;
}

export default function StatBlock({ 
  monster, 
  onRollAction, 
  isInEncounter, 
  onAddToEncounter, 
  onRemoveFromEncounter 
}: StatBlockProps) {
  
  const handleRollClick = (actionName: string, descText: string) => {
    // Look for dice-like expressions in the action
    const diceRegex = /\b(\d*d\d+(?:[-+]\d+)?)\b/i;
    const match = descText.match(diceRegex);
    
    if (match) {
      onRollAction(`${monster.name} - ${actionName}`, match[1]);
    } else {
      // Default to standard d20 check if no formula found
      onRollAction(`${monster.name} - ${actionName}`, "1d20");
    }
  };

  const getArmorName = (type: ArmorType) => {
    switch (type) {
      case ArmorType.None: return "Sin armadura";
      case ArmorType.Medium: return "Armadura Media (M)";
      case ArmorType.Heavy: return "Armadura Pesada (H)";
    }
  };

  const getArmorDesc = (type: ArmorType) => {
    switch (type) {
      case ArmorType.None: return "Defensa estándar. Toma daño completo.";
      case ArmorType.Medium: return "Ignora los modificadores de daño de estadísticas, toma daño de la suma de los dados solamente.";
      case ArmorType.Heavy: return "Ignora modificadores de daño y toma la mitad de la suma de los dados (redondeado hacia arriba).";
    }
  };

  const getTypeColor = (type: MonsterType) => {
    switch (type) {
      case MonsterType.Minion: return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
      case MonsterType.Normal: return "bg-blue-500/10 border-blue-500/30 text-blue-400";
      case MonsterType.Elite: return "bg-[#c5a059]/10 border-[#c5a059]/30 text-[#c5a059]";
      case MonsterType.Leader: return "bg-red-500/10 border-red-500/30 text-red-400";
    }
  };

  return (
    <div className="relative bg-[#121214] rounded-sm p-5 md:p-6 border border-[#c5a059]/20 shadow-2xl flex flex-col justify-between overflow-hidden group/card hover:border-[#c5a059] transition-all duration-300">
      
      {/* Background Texture Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent"></div>
      
      <div>
        {/* Top Header Row of the Card */}
        <div className="flex justify-between items-start mb-4 gap-2 border-b border-[#2a2a2e] pb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif text-lg md:text-xl font-bold uppercase tracking-wider text-white">
                {monster.name}
              </h3>
              {monster.englishName && (
                <span className="text-[10px] items-center italic font-mono text-gray-500 uppercase">
                  ({monster.englishName})
                </span>
              )}
            </div>
            
            <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mt-1 flex items-center gap-1.5 flex-wrap">
              <span className="text-[#c5a059] font-bold">NIVEL {monster.level}</span>
              <span className="text-gray-600">&bull;</span>
              <span>{monster.size} ({monster.sizeEnglish})</span>
              <span className="text-gray-600">&bull;</span>
              <span className="text-gray-400">CR {monster.challengeRating}</span>
            </p>
          </div>

          {/* Quick HP Heart & Armor Badge */}
          <div className="flex items-center gap-2 shrink-0">
            {/* HP Heart */}
            <div className="flex flex-col items-center bg-[#1a1315] px-2 py-1 rounded-sm border border-red-900/40 min-w-[42px] text-center" title="Puntos de Vida (HP)">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-950/60" />
              <span className="text-xs font-mono font-black text-red-400 mt-0.5">
                {monster.hpMax ? monster.hp : "Minion"}
              </span>
            </div>

            {/* Armor Badge */}
            <div 
              className={`flex flex-col items-center px-2 py-1 rounded-sm border min-w-[42px] text-center ${
                monster.armor === ArmorType.Heavy 
                ? "bg-[#c5a059]/10 border-[#c5a059]/40 text-[#c5a059]" 
                : monster.armor === ArmorType.Medium 
                ? "bg-[#c5a059]/5 border-[#c5a059]/20 text-gray-300"
                : "bg-[#1a1a1e] border-[#2a2a2e] text-gray-500"
              }`}
              title={`Armadura: ${getArmorName(monster.armor)}\n${getArmorDesc(monster.armor)}`}
            >
              <Shield className="w-3.5 h-3.5 fill-current opacity-60" />
              <span className="text-xs font-mono font-black mt-0.5">
                {monster.armor === ArmorType.Heavy ? "H" : monster.armor === ArmorType.Medium ? "M" : "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Categories Tags */}
        <div className="flex gap-1.5 mb-4 flex-wrap">
          <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-sm border ${getTypeColor(monster.type)} font-bold`}>
            {monster.type}
          </span>
          <span className="text-[10px] bg-[#1a1a1e] border border-[#2a2a2e] text-gray-400 uppercase font-mono px-2 py-0.5 rounded-sm">
            Vel {monster.speed}
          </span>
        </div>

        {/* Group Common Trait callout box if present */}
        {monster.groupTrait && (
          <div className="mb-4 p-3 bg-[#1a1a1e] border-l-2 border-[#c5a059] rounded-r" title="Habilidad pasiva de grupo">
            <span className="text-[10px] uppercase font-mono text-[#c5a059] font-bold block mb-1">
              Habilidad de Grupo: {monster.groupTrait.name}
            </span>
            <p className="text-xs text-gray-300 italic leading-relaxed">
              {monster.groupTrait.description}
            </p>
          </div>
        )}

        {/* Special Abilities Row */}
        {monster.abilities.length > 0 && (
          <div className="mb-4 flex flex-col gap-2">
            {monster.abilities.map((ability, i) => (
              <div key={i} className="bg-[#1a1a1e] p-3 rounded-sm border border-[#2a2a2e] last:mb-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-serif font-bold text-[#c5a059] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] block shrink-0" />
                    {ability.name}
                  </span>
                  {ability.trigger && (
                    <span className="text-[9px] font-mono bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20 px-1.5 py-0.2 rounded font-medium">
                      {ability.trigger}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed pl-3">
                  {ability.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* List of Combat Actions / Attacks */}
        <div className="mt-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-500 block mb-2 border-b border-[#2a2a2e] pb-1">
            Acciones de Combate (Haga clic para Rodar)
          </span>
          <div className="flex flex-col gap-2">
            {monster.attacks.map((attack, i) => (
              <button
                key={i}
                onClick={() => handleRollClick(attack.name, attack.damageDice || "")}
                className="w-full text-left p-3 rounded-sm border border-[#2a2a2e] hover:border-[#c5a059] bg-[#09090b] hover:bg-[#1a1a1e] transition group/attack flex items-center justify-between gap-4 cursor-pointer"
                title="Presione para lanzar los dados de este ataque"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <Swords className="w-3.5 h-3.5 text-[#c5a059] opacity-70 group-hover/attack:opacity-100" />
                    <span className="text-xs font-sans font-bold text-gray-200 group-hover/attack:text-white">
                      {attack.name} {attack.isMultiAttack && `(x${attack.multiattackCount})`}
                    </span>
                    {attack.range && (
                      <span className="text-[9px] font-mono bg-blue-950 text-blue-300 border border-blue-900 px-1 py-0.2 rounded">
                        Rango: {attack.range} c.
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">
                    {attack.description}
                  </p>
                </div>

                {/* Formula pill */}
                <div className="flex items-center gap-1 px-2.5 py-1 bg-[#1a1a1e] group-hover/attack:bg-[#c5a059] border border-[#2a2a2e] group-hover/attack:border-[#c5a059] rounded-sm text-xs font-mono font-bold text-[#c5a059] group-hover/attack:text-[#0d0d0f] transition-all">
                  <span>{attack.damageDice}</span>
                  <Dices className="w-3 h-3 opacity-60" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Encounter Cart Controls */}
      {onAddToEncounter && onRemoveFromEncounter && (
        <div className="mt-5 pt-3 border-t border-[#2a2a2e] flex items-center justify-between gap-2 text-xs">
          <span className="text-[10px] font-mono text-gray-500 italic">
            Bestiario de Nimble RPG
          </span>
          {isInEncounter ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveFromEncounter();
              }}
              className="px-3 py-1.5 bg-red-950/40 text-red-400 border border-red-900/30 rounded-sm text-xs font-mono hover:bg-red-900/40 hover:text-red-200 transition-all cursor-pointer flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Quitar
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToEncounter();
              }}
              className="px-3 py-1.5 bg-[#c5a059] hover:bg-[#d4b574] text-[#0d0d0f] rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1"
            >
              <span>+ Añadir</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
