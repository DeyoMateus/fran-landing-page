import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const headline = "Estratégias que transformam marcas em autoridades.";

  return (
    <section className="relative pt-32 pb-28 md:pt-44 md:pb-36 overflow-hidden bg-dark-950 font-sans">
      <style>{`
        @keyframes floorShadowWave {
          0%, 100% {
            transform: perspective(400px) rotateX(55deg) translateY(0px) skewX(0deg);
          }
          25% {
            transform: perspective(400px) rotateX(55deg) translateY(5px) skewX(1deg);
          }
          50% {
            transform: perspective(400px) rotateX(55deg) translateY(2px) skewX(-1deg);
          }
          75% {
            transform: perspective(400px) rotateX(55deg) translateY(6px) skewX(0.5deg);
          }
        }
        .animate-floor-shadow {
          animation: floorShadowWave 9s ease-in-out infinite;
          transform-origin: top center;
          filter: blur(1.5px);
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Container do Título com Projeção no Chão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-50"
        >
          {/* Título Principal (Em pé) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-100 leading-[1.15] relative z-10 font-serif">
            Muito além de Social Media: <br />
            <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>

          {/* Sombra / Projeção no Chão */}
          <div
            className="absolute left-0 right-0 top-full pt-3 pointer-events-none select-none animate-floor-shadow"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 70%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 70%)",
            }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-700 leading-[1.15] scale-y-[-1] font-serif">
              Muito além de Social Media: <br />
              <span className="text-gold-500/40">{headline}</span>
            </h1>
          </div>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        ></motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
      </div>
    </section>
  );
}
