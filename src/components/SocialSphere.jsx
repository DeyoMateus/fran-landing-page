import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

export default function SocialSphere() {
  const canvasRef = useRef(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  // Dados das redes sociais e como a Fran ajuda em cada uma
  const platforms = [
    {
      id: "instagram",
      name: "INSTAGRAM",
      x: 0,
      y: -0.4,
      z: 0.8,
      description:
        "Construção de feed altamente estético (Design & Posicionamento), Reels estratégicos para atração orgânica e rotina de Stories que geram desejo imediato de compra.",
    },
    {
      id: "tiktok",
      name: "TIKTOK",
      x: 0.5,
      y: 0.2,
      z: -0.6,
      description:
        "Roteiros dinâmicos e virais focados em retenção, adaptando tendências do momento para o seu nicho comercial e convertendo visualizações em clientes.",
    },
    {
      id: "linkedin",
      name: "LINKEDIN",
      x: -0.7,
      y: 0.5,
      z: 0.2,
      description:
        "Posicionamento B2B de autoridade absoluta, artigos e publicações de Thought Leadership para atrair contratos de alto ticket e parcerias estratégicas.",
    },
    {
      id: "youtube",
      name: "YOUTUBE",
      x: 0.2,
      y: 0.7,
      z: -0.5,
      description:
        "Estruturação de conteúdos de fundo de funil, roteirização magnética e construção de ativos de longo prazo que geram vendas automáticas todos os dias.",
    },
    {
      id: "metaads",
      name: "META ADS",
      x: -0.5,
      y: -0.6,
      z: -0.4,
      description:
        "Gestão inteligente de tráfego pago (Facebook e Instagram Ads) com segmentações cirúrgicas para capturar demanda qualificada e maximizar o seu ROAS.",
    },
    {
      id: "googleads",
      name: "GOOGLE ADS",
      x: 0.6,
      y: -0.3,
      z: 0.5,
      description:
        "Captura de clientes com alta intenção de compra no momento exato em que eles buscam pelos seus produtos ou serviços nos mecanismos de busca.",
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 600;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      particles.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      });
    }

    let angleX = 0;
    let angleY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
      mouseY = (e.clientY - rect.top - height / 2) / (height / 2);
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      const isDesktop = width >= 768;
      const radius = Math.min(width, height) * (isDesktop ? 0.34 : 0.26);

      angleX += 0.003 + (isHovering ? mouseY * 0.01 : 0);
      angleY += 0.004 + (isHovering ? mouseX * 0.01 : 0);

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // 1. Desenhar o Núcleo Central
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 0.28,
      );
      coreGradient.addColorStop(0, "rgba(255, 223, 100, 0.95)");
      coreGradient.addColorStop(0.4, "rgba(212, 175, 55, 0.5)");
      coreGradient.addColorStop(1, "rgba(212, 175, 55, 0)");

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.28, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.arc(centerX, centerY, isDesktop ? 3.5 : 2.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Renderizar Partículas
      ctx.fillStyle = "#D4AF37";
      particles.forEach((p) => {
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y1 = p.y;

        let y2 = y1 * cosX - z1 * sinX;
        let z2 = z1 * cosX + y1 * sinX;
        let x2 = x1;

        const perspective = 350;
        const scale = perspective / (perspective + z2 * radius);
        const projectedX = centerX + x2 * radius * scale;
        const projectedY = centerY + y2 * radius * scale;

        const alpha = ((z2 + 1) / 2) * 0.6 + 0.1;
        const dotSize = scale * (isDesktop ? 1.2 : 0.9);

        if (alpha > 0.05) {
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 3. Mapear Redes Sociais
      const currentPlatforms2D = platforms.map((plat) => {
        let x1 = plat.x * cosY - plat.z * sinY;
        let z1 = plat.z * cosY + plat.x * sinY;
        let y1 = plat.y;

        let y2 = y1 * cosX - z1 * sinX;
        let z2 = z1 * cosX + y1 * sinX;
        let x2 = x1;

        const perspective = 350;
        const scale = perspective / (perspective + z2 * radius);
        const projectedX = centerX + x2 * radius * scale;
        const projectedY = centerY + y2 * radius * scale;
        const alpha = (z2 + 1) / 2;

        return { ...plat, projectedX, projectedY, alpha, z2 };
      });

      // Linhas conectoras
      currentPlatforms2D.forEach((plat) => {
        if (plat.z2 > -0.2) {
          ctx.strokeStyle = "rgba(212, 175, 55, 0.15)";
          ctx.lineWidth = isDesktop ? 1.2 : 0.8;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(plat.projectedX, plat.projectedY);
          ctx.stroke();
        }
      });

      // Textos das Redes Sociais
      const baseFontSize = isDesktop ? 14 : 11;
      currentPlatforms2D.forEach((plat) => {
        if (plat.z2 > -0.3) {
          ctx.globalAlpha = Math.max(0.25, plat.alpha);
          ctx.font = `bold ${Math.max(10, (baseFontSize * (plat.z2 + 1.2)) / 2)}px sans-serif`;
          ctx.fillStyle = plat.z2 > 0.2 ? "#ffdf6d" : "#aa8c2c";
          ctx.textAlign = "center";
          ctx.fillText(plat.name, plat.projectedX, plat.projectedY);
        }
      });

      canvas.platformCoords = currentPlatforms2D;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.platformCoords) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const hitThreshold = window.innerWidth >= 768 ? 50 : 35;

    for (let plat of canvas.platformCoords) {
      const distance = Math.hypot(
        clickX - plat.projectedX,
        clickY - plat.projectedY,
      );
      if (distance < hitThreshold && plat.z2 > -0.4) {
        setSelectedPlatform(plat);
        break;
      }
    }
  };

  return (
    <section
      id="ecosystem"
      className="pt-16 md:pt-24 pb-10 md:pb-16 bg-dark-950 relative overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-3 md:mb-4">
        <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
          Ecossistema de Canais
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-zinc-100 mt-1 font-serif">
          Onde sua marca se torna{" "}
          <span className="text-gold-400">inevitável</span>
        </h2>
        <p className="text-zinc-400 text-xs md:text-sm mt-1 max-w-lg mx-auto">
          Explore o núcleo interativo abaixo e clique em qualquer plataforma
          para ver a estratégia.
        </p>
      </div>

      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] max-w-4xl mx-auto cursor-grab active:cursor-grabbing px-4">
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="w-full h-full block"
        />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 pointer-events-none text-[10px] md:text-xs text-zinc-500 tracking-wider uppercase whitespace-nowrap">
          Arraste para rotacionar • Clique nos canais
        </div>
      </div>

      <AnimatePresence>
        {selectedPlatform && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg p-6 md:p-8 rounded-3xl bg-dark-900 border border-gold-500/40 shadow-2xl text-left overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-xs text-gold-400 font-semibold tracking-widest uppercase">
                      Estratégia de Canal
                    </span>
                    <h3 className="text-2xl font-black text-zinc-100 font-serif">
                      {selectedPlatform.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPlatform(null)}
                  className="p-2 rounded-full bg-dark-800 text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
                <p>{selectedPlatform.description}</p>
                <div className="p-4 rounded-xl bg-dark-950 border border-dark-800 text-xs md:text-sm text-zinc-400 flex items-start gap-3">
                  <span>
                    Com a metodologia da Fran Araújo, sua presença no{" "}
                    {selectedPlatform.name} deixa de ser apenas estética e passa
                    a operar como um canal ativo de captação de clientes.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedPlatform(null)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold text-sm shadow-md hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Quero Estruturar meu {selectedPlatform.name}</span>
                </a>
                <button
                  onClick={() => setSelectedPlatform(null)}
                  className="px-5 py-3.5 rounded-xl bg-dark-800 text-zinc-300 font-semibold text-sm hover:bg-dark-700 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
