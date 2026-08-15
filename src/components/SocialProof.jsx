import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Award,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function SocialProof() {
  // Paleta de cores oficial da Fran Araújo
  const colors = {
    onix: "#0B0B0A",
    marfim: "#F5F0E7",
    dourado: "#C6A15B",
    espresso: "#3B2A20",
    taupe: "#A89A8B",
    bege: "#CDBA9E",
  };

  const metrics = [
    {
      value: "7x",
      label: "Percepção de Valor",
      description:
        "Aumento na autoridade percebida pelo cliente através de design autoral.",
      icon: Award,
    },
    {
      value: "4x",
      label: "Conversão em Vendas",
      description:
        "Mais clientes qualificados atraídos por conteúdos com copy estratégica.",
      icon: Target,
    },
    {
      value: "+61%",
      label: "Valor do Ticket",
      description:
        "Capacidade de cobrar mais caro ao diferenciar sua oferta do mercado.",
      icon: TrendingUp,
    },
    {
      value: "100%",
      label: "Atendimento Exclusivo",
      description:
        "Projetos personalizados e sob medida, sem estratégias genéricas de prateleira.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="results"
      className="py-24 font-sans relative overflow-hidden"
      style={{ backgroundColor: colors.onix }}
    >
      {/* 
        AURA DOURADA PULSANTE E REALISTA 
        Usamos radial-gradient para um decaimento natural da luz
        e framer-motion para pulsar escala e opacidade.
      */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] h-[400px] md:h-[500px] pointer-events-none rounded-full"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.dourado} 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
        animate={{
          opacity: [0.08, 0.18, 0.08], // Pulsa entre 8% e 18% de opacidade
          scale: [0.95, 1.05, 0.95], // Expande e contrai levemente
        }}
        transition={{
          duration: 6, // Duração de 6 segundos por ciclo
          repeat: Infinity, // Repete para sempre
          ease: "easeInOut", // Transição suave
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl font-black mt-1 font-serif leading-tight"
            style={{ color: colors.marfim }}
          >
            O que acontece quando o seu posicionamento é construído com
            precisão?
          </h2>

          <p
            className="text-sm md:text-base mt-1 leading-relaxed max-w-2xl mx-auto"
            style={{ color: colors.taupe }}
          >
            Não acreditamos em fórmulas de prateleira. Aplicamos uma metodologia
            baseada em dados, estética refinada e estratégia focada no
            crescimento sustentável do seu negócio.
          </p>
        </div>

        {/* Grid de Métricas de Impacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                style={{
                  backgroundColor: "#121110",
                  borderColor: `${colors.dourado}25`,
                }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${colors.espresso}60`,
                      border: `1px solid ${colors.dourado}40`,
                      color: colors.dourado,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className="text-4xl md:text-5xl font-black font-serif block mb-2 tracking-tight"
                    style={{ color: colors.marfim }}
                  >
                    {item.value}
                  </span>

                  <h3
                    className="text-lg font-bold font-serif mb-2"
                    style={{ color: colors.bege }}
                  >
                    {item.label}
                  </h3>

                  <p
                    className="text-xs md:text-sm leading-relaxed"
                    style={{ color: colors.taupe }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Faixa Narrativa de Fechamento (Gera desejo e direciona para ação) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 md:p-10 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: `${colors.espresso}30`,
            borderColor: `${colors.dourado}35`,
          }}
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4
              className="text-xl md:text-2xl font-bold font-serif"
              style={{ color: colors.marfim }}
            >
              Pronto para parar de competir por preço e construir uma marca
              desejada?
            </h4>
            <p
              className="text-xs md:text-sm mt-2 leading-relaxed"
              style={{ color: colors.taupe }}
            >
              Analisamos a estrutura atual do seu negócio e desenhamos um plano
              sob medida para alinhar seu conteúdo, design e estratégia de
              vendas.
            </p>
          </div>

          <a
            href="https://wa.me/351963809830"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 shrink-0 flex items-center gap-2 shadow-lg"
            style={{
              backgroundColor: colors.dourado,
              color: colors.onix,
            }}
          >
            <span>Agendar Análise Estratégica</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
