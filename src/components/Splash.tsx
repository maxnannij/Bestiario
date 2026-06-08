import { motion } from "motion/react";
import { Skull, BookOpen, Swords, Shield, Dices } from "lucide-react";

interface SplashProps {
  onEnter: () => void;
}

export default function Splash({ onEnter }: SplashProps) {
  return (
    <div id="splash-screen" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0d0d0f] text-[#d1d1d1] overflow-hidden px-4">
      {/* Decorative background grids and aurics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />

      {/* Magical Border styling */}
      <div className="absolute inset-4 border border-[#c5a059]/20 rounded-lg pointer-events-none flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#0d0d0f] px-4 py-1 text-[10px] tracking-[0.25em] text-[#c5a059] font-mono uppercase">
          Compendio Oficial de Criaturas
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#0d0d0f] px-4 py-1 text-[10px] tracking-[0.2em] text-[#c5a059]/60 font-mono uppercase">
          Mesa de Rol &middot; Nimble MVP
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center max-w-2xl px-6 flex flex-col items-center"
      >
        {/* Animated Creature Head / Icon Emblem */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            rotateY: [0, 180, 180, 360, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut" 
          }}
          className="w-24 h-24 rounded-sm rotate-45 bg-gradient-to-b from-[#c5a059]/30 to-[#121214] border-2 border-[#c5a059] flex items-center justify-center mb-10 shadow-[0_0_25px_rgba(197,160,89,0.15)]"
        >
          <Skull className="w-10 h-10 text-[#c5a059] -rotate-45" />
        </motion.div>

        {/* Beautiful RPG Styled Title */}
        <h1 className="font-serif text-5xl md:text-6xl font-light tracking-widest text-[#f5f5f7] mb-2 uppercase leading-tight select-none">
          BESTIARIO DE
          <span className="block mt-2 font-serif text-[#c5a059] text-6xl md:text-7xl tracking-wider select-none font-bold">
            MONSTRUOS
          </span>
        </h1>

        {/* Separator */}
        <div className="flex items-center gap-4 my-6 w-full max-w-md">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]/40 flex-1"></div>
          <motion.span 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="text-[#c5a059] text-sm"
          >
            ✦
          </motion.span>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]/40 flex-1"></div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-10 max-w-lg font-serif italic">
          Un compendio interactivo de criaturas oscuras, tácticas complejas y simulador de encuentros basado en el sistema 
          <span className="text-[#c5a059] font-sans font-semibold not-italic"> Nimble RPG</span>. Filtra por desafío, calcula estadísticas de combate y rueda dados en tiempo real.
        </p>

        {/* Feature Icons List */}
        <div className="grid grid-cols-3 gap-6 mb-12 w-full max-w-md">
          <div className="flex flex-col items-center p-3.5 bg-[#121214] border border-[#c5a059]/10 rounded">
            <BookOpen className="w-4 h-4 text-[#c5a059] mb-1.5" />
            <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500 text-center">Filtros Alfabet</span>
          </div>
          <div className="flex flex-col items-center p-3.5 bg-[#121214] border border-[#c5a059]/10 rounded">
            <Swords className="w-4 h-4 text-[#c5a059] mb-1.5" />
            <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500 text-center">Simulador</span>
          </div>
          <div className="flex flex-col items-center p-3.5 bg-[#121214] border border-[#c5a059]/10 rounded">
            <Dices className="w-4 h-4 text-[#c5a059] mb-1.5" />
            <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500 text-center">Dados Live</span>
          </div>
        </div>

        {/* Enter Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onEnter}
          className="relative text-xs uppercase tracking-[0.25em] font-bold px-12 py-4 rounded-sm bg-[#c5a059] hover:bg-[#d8b571] text-[#0d0d0f] cursor-pointer shadow-[0_5px_20px_rgba(197,160,89,0.3)] transition-all duration-300 group overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Abrir el Bestiario
            <Swords className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </motion.div>

      {/* Quick guide tips at bottom */}
      <div className="absolute bottom-6 text-[#c5a059]/40 text-xs font-mono select-none">
        MVP Funcional v1.0 &middot; Carga Inicial Completa: Kobolds
      </div>
    </div>
  );
}
