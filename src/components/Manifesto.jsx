import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingDown,
  LineChart,
  Coins,
  Gem,
  MicOff,
  Lightbulb,
  Hourglass,
  Rocket,
  ShieldAlert,
  Magnet,
  UserX,
  Crosshair,
  Unplug,
  Network,
  Lock,
  Telescope,
} from "lucide-react";

const galleryPairs = [
  {
    pain: {
      label: "Visibilidade Vazia",
      title: "Métricas de vaidade não geram caixa",
      desc: "Esforço massivo em produzir conteúdo que atrai cliques e seguidores, mas ignora completamente a conversão real.",
      icon: TrendingDown,
    },
    solution: {
      label: "A Nossa Visão",
      title: "Sua marca como ativo financeiro",
      desc: "Redesenhamos a percepção do seu produto focando estritamente em sistemas que geram Retorno sobre o Investimento.",
      icon: LineChart,
    },
  },
  {
    pain: {
      label: "A Guerra de Preços",
      title: "Commoditização do serviço",
      desc: "O cliente não percebe o diferencial, tornando a negociação uma disputa por centavos e descontos insustentáveis.",
      icon: Coins,
    },
    solution: {
      label: "A Nossa Visão",
      title: "Diferenciação de alto valor",
      desc: "Elevamos o posicionamento para que sua empresa deixe de ser comparável e se torne a única escolha lógica.",
      icon: Gem,
    },
  },
  {
    pain: {
      label: "Ruído na Narrativa",
      title: "Comunicação que não converte",
      desc: "Discurso focado em características técnicas que falha em se conectar com as dores urgentes do tomador de decisão.",
      icon: MicOff,
    },
    solution: {
      label: "A Nossa Visão",
      title: "Clareza absoluta e persuasão",
      desc: "Destilamos a mensagem da sua empresa criando uma narrativa afiada que ressoa com o seu cliente ideal.",
      icon: Lightbulb,
    },
  },
  {
    pain: {
      label: "Processo Arrasto",
      title: "Ciclos de vendas intermináveis",
      desc: "Negociações que se estendem por meses devido à falta de confiança prévia e objeções não tratadas.",
      icon: Hourglass,
    },
    solution: {
      label: "A Nossa Visão",
      title: "Autoridade antecipada",
      desc: "Construímos ativos que educam o prospect e quebram objeções antes mesmo da primeira reunião acontecer.",
      icon: Rocket,
    },
  },
  {
    pain: {
      label: "Vulnerabilidade",
      title: "Dependência de indicações",
      desc: "O faturamento oscila perigosamente porque depende de forma passiva que clientes atuais tragam novos negócios.",
      icon: ShieldAlert,
    },
    solution: {
      label: "A Nossa Visão",
      title: "Aquisição previsível e ativa",
      desc: "Implementamos máquinas de vendas que trazem demanda qualificada de forma constante e escalável.",
      icon: Magnet,
    },
  },
  {
    pain: {
      label: "Falso Positivo",
      title: "Atração do público errado",
      desc: "A empresa atrai pessoas curiosas, sem orçamento para soluções rentáveis, sobrecarregando o time.",
      icon: UserX,
    },
    solution: {
      label: "A Nossa Visão",
      title: "Engenharia de audiência",
      desc: "Filtramos o público com comunicação projetada exclusivamente para afastar curiosos e atrair clientes premium.",
      icon: Crosshair,
    },
  },
  {
    pain: {
      label: "Desalinhamento Interno",
      title: "Esforço comercial desperdiçado",
      desc: "O marketing comemora engajamento enquanto as vendas sofrem com a falta de oportunidades reais.",
      icon: Unplug,
    },
    solution: {
      label: "A Nossa Visão",
      title: "Sinergia voltada ao lucro",
      desc: "Alinhamos a comunicação diretamente com as metas de vendas, garantindo foco no fechamento de negócios.",
      icon: Network,
    },
  },
  {
    pain: {
      label: "Teto de Vidro",
      title: "Estagnação no crescimento",
      desc: "A operação atingiu um platô onde trabalhar mais horas não se traduz mais em aumento de receita.",
      icon: Lock,
    },
    solution: {
      label: "A Nossa Visão",
      title: "Arquitetura de escala",
      desc: "Desenhamos um ecossistema comercial escalável para suportar o próximo nível de crescimento da empresa.",
      icon: Telescope,
    },
  },
];

export default function Manifesto() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 2; // Exibe 2 pares (4 cards no total)
  const totalPages = Math.ceil(galleryPairs.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % totalPages);
    }, 10000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const currentPairs = galleryPairs.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  // Animação "Folha Caindo"
  const leafVariants = {
    hidden: { opacity: 0, y: -40, rotateZ: 6, rotateX: 35, scale: 0.95 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      rotateZ: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    }),
    exit: (custom) => ({
      opacity: 0,
      y: 40,
      rotateZ: -6,
      rotateX: -35,
      scale: 0.95,
      transition: { delay: custom * 0.08, duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section
      id="manifesto"
      className="py-20 md:py-24 bg-[#0B0B0A] border-y border-[#3B2A20]/30 font-sans overflow-hidden flex flex-col items-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 text-center">
        <h2 className="text-xs md:text-sm font-semibold tracking-widest text-[#A89A8B] uppercase mb-2">
          Diagnóstico e Solução
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-[#F5F0E7] font-serif">
          Onde empresas falham.{" "}
          <span className="text-[#C6A15B]">Como nós resolvemos.</span>
        </h3>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 [perspective:1200px]">
        <div className="min-h-[500px] md:min-h-[460px] relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              {currentPairs.map((pair, index) => (
                <motion.div
                  key={`${page}-${index}`}
                  custom={index}
                  variants={leafVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-5"
                  style={{ transformOrigin: "top center" }}
                >
                  {/* CARD DA DOR (Design Moderno / Emblema Vidro) */}
                  <div className="flex-1 p-6 rounded-3xl bg-[#121110] border border-red-900/20 shadow-lg relative group transition-all duration-300 hover:border-red-900/50">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Ícone Estilo Emblema Moderno Realista */}
                      <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-950/40 border border-red-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_15px_rgba(239,68,68,0.1)]">
                        <pair.pain.icon
                          className="w-6 h-6 text-red-400 drop-shadow-md"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-red-500/80 uppercase block">
                          {pair.pain.label}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-[#F5F0E7] font-serif leading-tight mt-1">
                          {pair.pain.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[#A89A8B] text-xs sm:text-sm leading-relaxed">
                      {pair.pain.desc}
                    </p>
                  </div>

                  {/* CARD DA SOLUÇÃO (Design Moderno / Emblema Vidro Ouro) */}
                  <div className="flex-1 p-6 rounded-3xl bg-[#121110] border border-[#C6A15B]/20 shadow-lg relative group transition-all duration-300 hover:border-[#C6A15B]/50 hover:shadow-[0_10px_40px_-10px_rgba(198,161,91,0.15)]">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Ícone Estilo Emblema Moderno Realista */}
                      <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#C6A15B]/20 to-[#3B2A20]/60 border border-[#C6A15B]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_15px_rgba(198,161,91,0.15)]">
                        <pair.solution.icon
                          className="w-6 h-6 text-[#C6A15B] drop-shadow-md"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#C6A15B]/90 uppercase block">
                          {pair.solution.label}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-[#F5F0E7] font-serif leading-tight mt-1">
                          {pair.solution.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[#CDBA9E] text-xs sm:text-sm leading-relaxed">
                      {pair.solution.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores de Paginação */}
        <div className="flex justify-center items-center mt-8 gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`transition-all duration-500 rounded-full ${
                page === i
                  ? "w-8 h-2.5 bg-[#C6A15B] shadow-[0_0_10px_rgba(198,161,91,0.5)]"
                  : "w-2.5 h-2.5 bg-[#3B2A20] hover:bg-[#C6A15B]/50"
              }`}
              aria-label={`Ir para a página ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
