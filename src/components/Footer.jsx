import React from "react";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-dark-950 text-zinc-100 pt-20 pb-28 md:pb-20 border-t border-dark-900 relative font-sans"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Bloco de Chamada Final */}
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-b from-dark-900/60 to-dark-950 border border-gold-500/30 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 font-serif">
            Pronto para transformar sua marca em uma{" "}
            <span className="text-gold-400">verdadeira autoridade</span>?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-8">
            Dê o próximo passo agora. Agende uma conversa com nossos
            especialistas e descubra o plano exato para o seu momento.
          </p>

          <a
            href="https://wa.me/351963809830"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-black font-semibold text-sm shadow-lg shadow-gold-500/20 hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>Falar com Consultor no WhatsApp</span>
          </a>
        </div>

        {/* Informações Rodapé */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4 border-t border-dark-900 pt-8">
          <div className="flex items-center gap-4 font-bold text-zinc-300">
            <span className="text-gold-400 font-serif tracking-wider">
              Fran Araújo
            </span>
            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/32987228315"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-gold-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
              <span>Desenvolvido por FVF Soluções Tech</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Ação Rápida Flutuante (Mobile-First de Alta Conversão) */}
      <div className="fixed bottom-0 left-0 w-full bg-dark-950/95 backdrop-blur-md border-t border-dark-800 p-3 md:hidden z-50 flex items-center justify-center shadow-2xl">
        <a
          href="https://wa.me/351963809830"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold text-sm shadow-lg shadow-gold-500/20 min-h-[48px]"
        >
          <MessageCircle className="w-5 h-5 fill-black" />
          <span>Falar no WhatsApp com Especialista</span>
        </a>
      </div>
    </footer>
  );
}
