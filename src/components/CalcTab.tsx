import { Monster, Hero } from "../types";
import { ShieldAlert, Users, Swords, Trash2, Plus, Minus, Flame, RefreshCw, Trophy } from "lucide-react";

interface CalcTabProps {
  monstersList: Monster[];
  activeEncounter: { [monsterId: string]: number };
  partySize: number;
  partyLevel: number;
  onUpdatePartySize: (size: number) => void;
  onUpdatePartyLevel: (level: number) => void;
  onSetEncounterCount: (monsterId: string, count: number) => void;
  onClearEncounter: () => void;
  onLoadEncounterPreset: (monsters: { monsterId: string; count: number }[]) => void;
}

export default function CalcTab({
  monstersList,
  activeEncounter,
  partySize,
  partyLevel,
  onUpdatePartySize,
  onUpdatePartyLevel,
  onSetEncounterCount,
  onClearEncounter,
  onLoadEncounterPreset
}: CalcTabProps) {
  
  // Calculate Hero Sum: H
  const hLevel = partySize * partyLevel;

  // Calculate Monster Sum: M
  let mLevelSum = 0;
  let totalMonsterCount = 0;
  
  const activeMonstersWithCount = Object.entries(activeEncounter)
    .map(([id, count]) => {
      const monster = monstersList.find(m => m.id === id);
      return { monster, count };
    })
    .filter((item): item is { monster: Monster; count: number } => item.monster !== undefined && item.count > 0);

  activeMonstersWithCount.forEach(({ monster, count }) => {
    mLevelSum += monster.levelValue * count;
    totalMonsterCount += count;
  });

  // Calculate percentage ratio of difficulty
  const ratio = hLevel > 0 ? (mLevelSum / hLevel) : 0;

  // Calculate difficulty thresholds based on page 3 of PDF
  const getDifficultyResult = (difficultyRatio: number) => {
    if (totalMonsterCount === 0) {
      return {
        label: "Sin Criaturas",
        colorText: "text-gray-400",
        colorBg: "bg-[#121214] border-[#2a2a2e]",
        desc: "Añade monstruos al encuentro para evaluar la dificultad de combate."
      };
    }
    if (difficultyRatio < 0.5) {
      return {
        label: "Fácil (Easy)",
        colorText: "text-emerald-400",
        colorBg: "bg-emerald-950/20 border-emerald-900/40",
        desc: "Los héroes perderán muy pocos Puntos de Vida y recursos. Es genial para poner a prueba nuevas habilidades o flanquear."
      };
    } else if (difficultyRatio <= 0.85) {
      return {
        label: "Medio (Medium)",
        colorText: "text-amber-400",
        colorBg: "bg-amber-950/20 border-amber-900/40",
        desc: "Espera pérdida moderada de HP y recursos de combate. Se siente como un desafío justo."
      };
    } else if (difficultyRatio <= 1.0) {
      return {
        label: "Difícil (Hard)",
        colorText: "text-orange-400",
        colorBg: "bg-orange-950/20 border-orange-900/45",
        desc: "¡Un combate desafiante pero balanceado! Los héroes tendrán que usar recursos valiosos y planear tácticas coordinadas."
      };
    } else if (difficultyRatio <= 1.25) {
      return {
        label: "Mortal (Deadly)",
        colorText: "text-red-400",
        colorBg: "bg-red-950/20 border-red-900/45",
        desc: "Requiere excelente coordinación grupal. Es apto para jefes finales de calabozo o encuentros significativos de campaña. ¡Riesgo alto de caer a 0 HP!"
      };
    } else {
      return {
        label: "Extremadamente Mortal (Very Deadly)",
        colorText: "text-purple-400",
        colorBg: "bg-purple-950/20 border-purple-900/45",
        desc: "A menos que los héroes tengan combos altamente optimizados, tendrán que retirarse para sobrevivir. ¡El nivel total de los monstruos supera radicalmente a los héroes!"
      };
    }
  };

  const difficultyResult = getDifficultyResult(ratio);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left side: Calculator mechanics */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        
        {/* Step 1: Party configuration */}
        <div className="bg-[#121214] rounded-sm border border-[#c5a059]/20 p-5 md:p-6 shadow-2xl">
          <h2 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#c5a059]" />
            1. Configurar Héroes (Grupo de Juego)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Number of Heroes */}
            <div>
              <label className="block text-xs uppercase font-mono text-gray-400 mb-2 font-bold">
                Número de Héroes
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onUpdatePartySize(Math.max(1, partySize - 1))}
                  className="bg-[#1a1a1e] hover:bg-[#2a2a2e] border border-[#2a2a2e] hover:border-[#c5a059] rounded-sm w-11 h-11 flex items-center justify-center font-bold text-white cursor-pointer transition"
                >
                  -
                </button>
                <div className="flex-1 bg-[#09090b] border border-[#2a2a2e] rounded-sm text-center py-2">
                  <span className="font-mono text-lg font-black text-white">{partySize}</span>
                  <span className="text-[10px] text-gray-500 block uppercase font-mono tracking-wider">Héroes</span>
                </div>
                <button
                  type="button"
                  onClick={() => onUpdatePartySize(Math.min(10, partySize + 1))}
                  className="bg-[#1a1a1e] hover:bg-[#2a2a2e] border border-[#2a2a2e] hover:border-[#c5a059] rounded-sm w-11 h-11 flex items-center justify-center font-bold text-white cursor-pointer transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Average Level */}
            <div>
              <label className="block text-xs uppercase font-mono text-gray-400 mb-2 font-bold">
                Nivel Promedio del Grupo
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onUpdatePartyLevel(Math.max(1, partyLevel - 1))}
                  className="bg-[#1a1a1e] hover:bg-[#2a2a2e] border border-[#2a2a2e] hover:border-[#c5a059] rounded-sm w-11 h-11 flex items-center justify-center font-bold text-white cursor-pointer transition"
                >
                  -
                </button>
                <div className="flex-1 bg-[#09090b] border border-[#2a2a2e] rounded-sm text-center py-2">
                  <span className="font-mono text-lg font-black text-white">{partyLevel}</span>
                  <span className="text-[10px] text-gray-500 block uppercase font-mono tracking-wider">Nivel</span>
                </div>
                <button
                  type="button"
                  onClick={() => onUpdatePartyLevel(Math.min(20, partyLevel + 1))}
                  className="bg-[#1a1a1e] hover:bg-[#2a2a2e] border border-[#2a2a2e] hover:border-[#c5a059] rounded-sm w-11 h-11 flex items-center justify-center font-bold text-white cursor-pointer transition"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          <div className="mt-4 bg-[#09090b] rounded-sm p-3 border border-[#2a2a2e] flex justify-between text-xs font-mono text-gray-400">
            <span>Nivel de Desafío del Grupo (Héroes x Nivel):</span>
            <b className="text-[#c5a059]">{hLevel} puntos</b>
          </div>
        </div>

        {/* Step 2: Added monsters tracker */}
        <div className="bg-[#121214] rounded-sm border border-[#c5a059]/20 p-5 md:p-6 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
              <Swords className="w-5 h-5 text-[#c5a059]" />
              2. Criaturas Añadidas al Combate
            </h2>
            {totalMonsterCount > 0 && (
              <button
                onClick={onClearEncounter}
                className="text-xs text-red-400 hover:text-red-300 font-mono flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Vaciar Todo ({totalMonsterCount})
              </button>
            )}
          </div>

          {activeMonstersWithCount.length === 0 ? (
            <div className="text-center py-10 bg-[#09090b] border border-dashed border-[#2a2a2e] rounded-sm text-gray-400">
              <ShieldAlert className="w-8 h-8 mx-auto text-gray-600 mb-2" />
              <p className="text-xs font-mono">No hay monstruos en el simulador.</p>
              <p className="text-[11px] text-gray-500 max-w-[340px] mx-auto mt-1">
                Ve a la pestaña anterior "Ver Bestiario" y añade criaturas usando los botones "+ Añadir".
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {activeMonstersWithCount.map(({ monster, count }) => (
                <div 
                  key={monster.id}
                  className="flex items-center justify-between p-3.5 bg-[#09090b] rounded-sm border border-[#2a2a2e] gap-3"
                >
                  <div>
                    <h4 className="text-sm font-sans font-bold text-white">
                      {monster.name}
                    </h4>
                    <span className="text-[10px] font-mono uppercase text-[#c5a059]/80">
                      Nivel {monster.level} (Valor: {monster.levelValue})
                    </span>
                  </div>

                  {/* Count manipulators */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSetEncounterCount(monster.id, count - 1)}
                      className="bg-[#1a1a1e] hover:bg-red-950 text-gray-300 hover:text-white border border-[#2a2a2e] w-8 h-8 rounded-sm flex items-center justify-center font-bold cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-sm font-bold text-white w-6 text-center">
                      {count}
                    </span>
                    <button
                      onClick={() => onSetEncounterCount(monster.id, count + 1)}
                      className="bg-[#1a1a1e] hover:bg-emerald-950 text-gray-300 hover:text-white border border-[#2a2a2e] w-8 h-8 rounded-sm flex items-center justify-center font-bold cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-2 bg-[#09090b] rounded-sm p-3 border border-[#2a2a2e] flex justify-between text-xs font-mono text-gray-400">
                <span>Puntos de Nivel de Monstruos (Sumatoria M):</span>
                <b className="text-[#c5a059]">{mLevelSum.toFixed(2)} puntos</b>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Right side: Calculator difficulty results & presets */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* Difficulty Outcome Box */}
        <div className={`rounded-sm border p-5 md:p-6 shadow-2xl ${difficultyResult.colorBg}`}>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-400 block mb-1">
            Evaluación de Desafío (Page 3)
          </span>
          <h3 className={`font-serif text-2xl font-black uppercase tracking-wider ${difficultyResult.colorText}`}>
            {difficultyResult.label}
          </h3>

          <div className="flex items-baseline gap-1.5 mt-3 my-4">
            <span className="text-3xl font-mono font-black text-white">
              {(ratio * 100).toFixed(0)}%
            </span>
            <span className="text-xs text-gray-400 opacity-80 font-mono">
              de la fuerza del grupo / party level
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-sans font-light">
            {difficultyResult.desc}
          </p>

          <div className="mt-5 border-t border-[#2a2a2e]/60 pt-4 flex gap-3 text-[10px] font-mono text-gray-400">
            <div className="flex-1 text-center bg-[#09090b] rounded-sm py-1 border border-[#2a2a2e]">
              <span className="block text-gray-500 uppercase">Héroes (H)</span>
              <strong className="text-white text-sm">{hLevel}</strong>
            </div>
            <div className="flex-1 text-center bg-[#09090b] rounded-sm py-1 border border-[#2a2a2e]">
              <span className="block text-gray-500 uppercase">Monstruos (M)</span>
              <strong className="text-white text-sm">{mLevelSum.toFixed(2)}</strong>
            </div>
            <div className="flex-1 text-center bg-[#09090b] rounded-sm py-1 border border-[#2a2a2e]">
              <span className="block text-gray-500 uppercase">Relación</span>
              <strong className="text-white text-sm">{(ratio).toFixed(2)}</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
