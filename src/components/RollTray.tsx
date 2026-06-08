import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dices, Trash2, ShieldAlert, ArrowUpCircle, ChevronDown, ChevronUp } from "lucide-react";

export interface RollResult {
  id: string;
  timestamp: Date;
  source: string;
  formula: string;
  results: number[];
  modifier: number;
  total: number;
}

interface RollTrayProps {
  history: RollResult[];
  onClearHistory: () => void;
  onManualRoll: (sides: number, count: number, modifier: number) => void;
}

export default function RollTray({ history, onClearHistory, onManualRoll }: RollTrayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customCount, setCustomCount] = useState<number>(1);
  const [customModifier, setCustomModifier] = useState<number>(0);
  const historyEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest roll
  useEffect(() => {
    if (history.length > 0) {
      setIsOpen(true);
      historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history.length]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#121214] border-t border-[#c5a059]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.7)] transition-all">
      {/* Drawer Toggle Header */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 py-3.5 cursor-pointer bg-[#09090b] hover:bg-[#1a1a1e] border-b border-[#2a2a2e]"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Dices className="w-5 h-5 text-[#c5a059]" />
            {history.length > 0 && (
              <span className="absolute -top-2 -right-2 text-[9px] bg-[#c5a059] text-[#0d0d0f] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                {history.length}
              </span>
            )}
          </div>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-200 font-serif">
            Mesa de Dados &amp; Historial
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#c5a059]/80">
          {history.length > 0 && (
            <span className="hidden sm:inline">Último resultado: <b className="text-[#0d0d0f] bg-[#c5a059] px-2 py-0.5 rounded-sm font-bold">{history[history.length - 1].total}</b></span>
          )}
          {isOpen ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronUp className="w-5 h-5 text-gray-400" />}
        </div>
      </div>

      {/* Expanded Drawer Area */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden bg-[#0d0d0f]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto p-4 md:p-6 gap-6 max-h-[300px] overflow-y-auto">
              {/* Left Side: Manual Custom Roller Block */}
              <div className="lg:col-span-5 flex flex-col gap-4 bg-[#121214] p-4 rounded-sm border border-[#c5a059]/20">
                <span className="text-xs font-serif uppercase tracking-wider text-[#c5a059] font-medium">
                  Lanzamiento Rápido de Dados
                </span>

                {/* Preset dices selector */}
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                  {[4, 6, 8, 10, 12, 20, 100].map((sides) => (
                    <button
                      key={sides}
                      onClick={() => onManualRoll(sides, customCount, customModifier)}
                      className="bg-[#09090b] hover:bg-[#c5a059]/20 border border-[#2a2a2e] hover:border-[#c5a059] text-gray-300 hover:text-white rounded-sm p-2 text-center transition cursor-pointer flex flex-col items-center justify-center group"
                    >
                      <span className="text-xs font-mono text-gray-400 group-hover:text-[#c5a059]">d{sides}</span>
                      <Dices className="w-4 h-4 text-[#c5a059]/50 group-hover:text-[#c5a059] mt-1" />
                    </button>
                  ))}
                  <div className="col-span-1 md:col-span-1 flex items-center justify-center p-2 text-[10px] uppercase font-mono text-[#c5a059]/40">
                    Dados
                  </div>
                </div>

                {/* Modifiers row */}
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">
                      Cantidad de dados ({customCount})
                    </label>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => setCustomCount(Math.max(1, customCount - 1))}
                        className="bg-[#1a1a1e] text-gray-300 w-8 h-8 rounded-sm border border-[#2a2a2e] flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-[#2a2a2e] transition"
                      >
                        -
                      </button>
                      <input 
                        type="number"
                        min="1"
                        max="20"
                        value={customCount}
                        onChange={(e) => setCustomCount(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
                        className="bg-[#09090b] text-white text-center w-12 h-8 rounded-sm border border-[#2a2a2e] font-mono text-xs focus:border-[#c5a059] focus:outline-none"
                      />
                      <button 
                        onClick={() => setCustomCount(Math.min(20, customCount + 1))}
                        className="bg-[#1a1a1e] text-gray-300 w-8 h-8 rounded-sm border border-[#2a2a2e] flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-[#2a2a2e] transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono text-gray-500 mb-1.5">
                      Modificador total ({customModifier >= 0 ? `+${customModifier}` : customModifier})
                    </label>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => setCustomModifier(customModifier - 1)}
                        className="bg-[#1a1a1e] text-gray-300 w-8 h-8 rounded-sm border border-[#2a2a2e] flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-[#2a2a2e] transition"
                      >
                        -
                      </button>
                      <input 
                        type="number"
                        value={customModifier}
                        onChange={(e) => setCustomModifier(parseInt(e.target.value) || 0)}
                        className="bg-[#09090b] text-white text-center w-12 h-8 rounded-sm border border-[#2a2a2e] font-mono text-xs focus:border-[#c5a059] focus:outline-none"
                      />
                      <button 
                        onClick={() => setCustomModifier(customModifier + 1)}
                        className="bg-[#1a1a1e] text-gray-300 w-8 h-8 rounded-sm border border-[#2a2a2e] flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-[#2a2a2e] transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Rolls Live History Log */}
              <div className="lg:col-span-7 flex flex-col gap-3 min-h-[140px]">
                <div className="flex justify-between items-center bg-[#121214] px-3 py-1.5 rounded-sm border border-[#2a2a2e]">
                  <span className="text-xs font-serif uppercase tracking-wider text-[#c5a059] font-medium">
                    Bitácora de Tiradas Realizadas
                  </span>
                  {history.length > 0 && (
                    <button
                      onClick={onClearHistory}
                      className="text-gray-500 hover:text-red-400 flex items-center gap-1.5 text-[10px] font-mono lowercase cursor-pointer transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Limpiar historial
                    </button>
                  )}
                </div>

                <div className="flex-1 bg-[#09090b] border border-[#2a2a2e] rounded-sm p-4 overflow-y-auto max-h-[160px] flex flex-col gap-2.5">
                  {history.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-6 text-gray-600">
                      <ShieldAlert className="w-7 h-7 mb-2 text-[#c5a059]/20" />
                      <p className="text-xs font-mono">No se han realizado lanzamientos en esta sesión.</p>
                      <p className="text-[10px] text-gray-500 max-w-[280px] mt-1">Haz clic en los dados rápidos de arriba, o prueba pulsar un ataque en las fichas de monstruos.</p>
                    </div>
                  ) : (
                    history.map((roll) => (
                      <div 
                        key={roll.id}
                        className="border-b border-[#2a2a2e] pb-2.5 last:border-none flex flex-col md:flex-row md:items-center justify-between gap-2"
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] px-2 py-0.5 rounded-sm uppercase font-mono font-bold">
                              {roll.source}
                            </span>
                            <span className="text-xs font-mono font-medium text-gray-400">
                              fórmula: <b className="text-[#c5a059]">{roll.formula}</b>
                            </span>
                          </div>
                          
                          {/* Individual Dices Roll Results Block */}
                          <div className="flex items-center gap-1 mt-1.5 text-[11px] text-gray-400 flex-wrap font-mono">
                            <span>Dados: </span>
                            {roll.results.map((r, i) => (
                              <span 
                                key={i} 
                                className="inline-block px-2 py-0.5 bg-[#121214] border border-[#2a2a2e] rounded-sm font-bold text-white text-xs mx-0.5 hover:border-[#c5a059]"
                              >
                                {r}
                              </span>
                            ))}
                            {roll.modifier !== 0 && (
                              <span className="text-[#c5a059] font-bold">
                                {roll.modifier > 0 ? `+${roll.modifier}` : `${roll.modifier}`}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Grand Total Value Indicator */}
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] text-gray-600 font-mono">
                            {roll.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                          </span>
                          <div className="bg-[#c5a059] text-[#0d0d0f] px-3.5 py-1.5 rounded-sm border border-[#c5a059]/20 text-center flex flex-col min-w-[70px]">
                            <span className="text-[9px] uppercase font-mono tracking-wider text-[#0d0d0f]/60 font-bold">Total</span>
                            <span className="text-base font-bold font-mono tracking-tighter leading-none mt-0.5">{roll.total}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  <div ref={historyEndRef} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
