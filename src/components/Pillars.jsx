import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, AlertCircle } from "lucide-react";

export default function Pillars() {
  const [selectedPillar, setSelectedPillar] = useState(null);

  // Trava o scroll do fundo da tela e adiciona a classe ao body quando o modal abre
  useEffect(() => {
    if (selectedPillar) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [selectedPillar]);

  const pillars = [
    {
      number: "01",
      title: "Estratégia de Vendas",
      tag: "@EstratégiaDeVendas",
      difficulty:
        "Falta de clareza na oferta, atração constante de clientes desqualificados e entrada em guerras de preço destrutivas.",
      solution:
        "Alinhamento profundo do seu modelo de negócio, criação de ofertas irresistíveis e estruturação de jornadas de conversão focadas em alta margem.",
      imageSrc:
        "https://paprdnqnkcejxkwagayw.supabase.co/storage/v1/object/public/fotos%20do%20portifolio/Estrategiadevendas.png",
      rotation: "-rotate-6",
      translateY: "translate-y-4",
    },
    {
      number: "02",
      title: "Conteúdo Persuasivo",
      tag: "@CopywritingMaster",
      difficulty:
        "Produção de conteúdos que geram curtidas mas não convertem em vendas, falta de conexão emocional e discursos genéricos.",
      solution:
        "Aplicação de copywriting de alto impacto que ativa o desejo latente do consumidor e blinda sua marca contra comparações de preço.",
      imageSrc:
        "https://paprdnqnkcejxkwagayw.supabase.co/storage/v1/object/public/fotos%20do%20portifolio/conteudopersuasivo.png",
      rotation: "-rotate-2",
      translateY: "-translate-y-2",
    },
    {
      number: "03",
      title: "Design & Posicionamento",
      tag: "@DesignExclusivo",
      difficulty:
        "Marca com visual amador que não transmite confiança, feed desalinhado e percepção imediata de baixo valor pelo mercado.",
      solution:
        "Construção de uma estética sofisticada, moderna e autoral que transmite autoridade absoluta logo no primeiro contato visual.",
      imageSrc:
        "https://paprdnqnkcejxkwagayw.supabase.co/storage/v1/object/public/fotos%20do%20portifolio/designeposicionamento.png",
      rotation: "rotate-2",
      translateY: "translate-y-2",
    },
    {
      number: "04",
      title: "Escala & Resultados",
      tag: "@EscalaDeVendas",
      difficulty:
        "Queima de orçamento em tráfego pago sem retorno mensurável, sem previsibilidade e sem inteligência na aquisição de clientes.",
      solution:
        "Gestão inteligente de tráfego pago e otimização contínua baseada em dados reais de faturamento para escalar com consistência.",
      imageSrc:
        "https://paprdnqnkcejxkwagayw.supabase.co/storage/v1/object/public/fotos%20do%20portifolio/escala.png",
      rotation: "rotate-6",
      translateY: "-translate-y-4",
    },
  ];

  const duplicatedPillars = [...pillars, ...pillars];

  return (
    <section
      id="pillars"
      className="py-20 md:py-32 bg-dark-950 overflow-hidden relative font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Nossos Pilares
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-100 mt-2 tracking-tight font-serif">
            Como construímos o seu crescimento
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-3">
            Clique em qualquer carta para ver os desafios superados e a nossa
            abordagem estratégica.
          </p>
        </div>

        {/* VERSÃO DESKTOP: Estilo "cartas na mão" */}
        <div className="hidden md:flex justify-center items-center py-12">
          <div className="flex items-center -space-x-12 lg:-space-x-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -20, rotate: 0, zIndex: 50 }}
                onClick={() => setSelectedPillar(pillar)}
                className={`relative w-[240px] lg:w-[280px] h-[360px] lg:h-[420px] rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-2xl bg-dark-900 group cursor-pointer transition-transform duration-300 ${pillar.rotation} ${pillar.translateY}`}
                style={{ zIndex: index + 1 }}
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold shadow-lg tracking-wide whitespace-nowrap">
                  {pillar.tag}
                </div>

                <img
                  src={pillar.imageSrc}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-black/20 pointer-events-none flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-gold-400 tracking-widest uppercase">
                    Pilar {pillar.number}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100 font-serif">
                    {pillar.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VERSÃO MOBILE: Carrossel em Loop Infinito */}
        <div className="md:hidden relative w-full overflow-hidden py-6">
          <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {duplicatedPillars.map((pillar, index) => (
              <div
                key={`${pillar.number}-${index}`}
                onClick={() => setSelectedPillar(pillar)}
                className="relative w-[210px] h-[320px] rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-xl bg-dark-900 shrink-0 cursor-pointer"
              >
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold shadow-md whitespace-nowrap">
                  {pillar.tag}
                </div>
                <img
                  src={pillar.imageSrc}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-black/20 pointer-events-none flex flex-col justify-end p-4">
                  <span className="text-[9px] font-bold text-gold-400 tracking-widest uppercase">
                    Pilar {pillar.number}
                  </span>
                  <h3 className="text-base font-bold text-zinc-100 font-serif">
                    {pillar.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MODAL DE DETALHES DO PILAR (Com z-[99999] e fundo travado) */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-3xl bg-dark-900 border border-gold-500/40 shadow-2xl text-left"
            >
              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-dark-800 text-zinc-400 hover:text-zinc-100 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Imagem em Destaque no Modal */}
                <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden border border-gold-500/20 shrink-0 shadow-lg">
                  <img
                    src={selectedPillar.imageSrc}
                    alt={selectedPillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Conteúdo Explicativo */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-gold-400 tracking-widest uppercase">
                      Pilar {selectedPillar.number} • {selectedPillar.tag}
                    </span>
                    <h3 className="text-2xl font-black text-zinc-100 mt-1 font-serif">
                      {selectedPillar.title}
                    </h3>
                  </div>

                  {/* Dificuldade do Mercado */}
                  <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/30 text-xs md:text-sm text-zinc-300">
                    <div className="flex items-center gap-2 font-bold text-red-400 mb-1">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>O grande desafio da empresa:</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      {selectedPillar.difficulty}
                    </p>
                  </div>

                  {/* Como a Fran Ajuda */}
                  <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs md:text-sm text-zinc-300">
                    <div className="flex items-center gap-2 font-bold text-gold-400 mb-1">
                      <span>Como a Fran Araújo resolve:</span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      {selectedPillar.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão de Ação */}
              <div className="mt-8 pt-6 border-t border-dark-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/351963809830"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedPillar(null)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold text-sm shadow-md hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Quero resolver isso no WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="px-5 py-3.5 rounded-xl bg-dark-800 text-zinc-300 font-semibold text-sm hover:bg-dark-700 transition-colors"
                >
                  Voltar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
