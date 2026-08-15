import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-14 md:py-20 bg-dark-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Lado Esquerdo: Imagem (Foto da Fran) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4] mx-auto flex items-center justify-center overflow-hidden">
              <img
                src="https://paprdnqnkcejxkwagayw.supabase.co/storage/v1/object/public/fotos%20do%20portifolio/fran.jpeg"
                alt="Fran Araújo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Detalhe Dourado Decorativo */}
          </motion.div>

          {/* Lado Direito: Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-black text-gold-400 mt-1 mb-4 font-serif tracking-wide">
              Sobre mim
            </h2>

            <div className="space-y-3.5 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                A <strong>Fran Araújo Social Media</strong> nasceu de algo que
                sempre fez parte de mim: a vontade de transformar ideias,
                organizar, criar e enxergar possibilidades onde, muitas vezes,
                ainda não existia uma estratégia clara.
              </p>

              <p>
                Durante minha trajetória, era comum eu olhar para um perfil ou
                para a forma como uma empresa se apresentava e imediatamente
                pensar: <em>“isso pode ser melhor.”</em> E eu queria fazer parte
                dessa transformação.
              </p>

              <p>
                Social Media, para mim, não é simplesmente criar uma publicação
                bonita. É entender a essência do seu negócio, construir uma
                estratégia que conecte marcas às pessoas certas e transformar
                ideias em resultados reais.
              </p>

              <p className="border-l-2 border-gold-500 pl-3 italic text-zinc-300">
                "Quando uma marca que confia em mim cresce, eu também faço parte
                daquela conquista. É isso que me motiva."
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-dark-800">
              <p className="text-gold-400 font-bold text-base font-serif tracking-wider">
                Fran Araújo
              </p>
              <p className="text-zinc-500 text-xs tracking-widest uppercase">
                Estratégia • Conteúdo • Design • Resultados
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
