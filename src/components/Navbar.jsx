import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("");

  const colors = {
    onix: "#0B0B0A",
    marfim: "#F5F0E7",
    dourado: "#C6A15B",
    espresso: "#3B2A20",
    taupe: "#A89A8B",
    bege: "#CDBA9E",
  };

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Ecossistema", href: "#ecosystem" },
    { name: "Manifesto", href: "#manifesto" },
    { name: "Pilares", href: "#pillars" },
    { name: "Resultados", href: "#results" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const themeMapping = {
      hero: "dark",
      sobre: "light",
      ecosystem: "light",
      manifesto: "dark",
      pillars: "light",
      results: "dark",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            if (themeMapping[id]) setActiveTheme(themeMapping[id]);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.1,
      },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navBgColor =
    activeTheme === "light" ? `${colors.onix}E6` : `${colors.marfim}E6`;
  const textColor = activeTheme === "light" ? colors.marfim : colors.onix;
  const logoColor = colors.dourado;
  const btnBgColor = activeTheme === "light" ? colors.dourado : colors.onix;
  const btnTextColor = activeTheme === "light" ? colors.onix : colors.dourado;

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] flex justify-center font-sans pointer-events-none">
      <style>{`
        body.modal-open header {
          display: none !important;
        }
      `}</style>

      <motion.nav
        layout
        initial={false}
        animate={{
          width: isScrolled ? "90%" : "100%",
          maxWidth: isScrolled ? "900px" : "100%",
          marginTop: isScrolled ? "20px" : "0px",
          borderRadius: isScrolled ? "50px" : "0px",
          backgroundColor: navBgColor,
          height: isScrolled ? "64px" : "80px",
          borderColor:
            activeTheme === "light"
              ? `${colors.dourado}30`
              : `${colors.taupe}30`,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25, mass: 1 }}
        className="pointer-events-auto backdrop-blur-md flex items-center justify-between px-6 md:px-10 border border-transparent shadow-[0_15px_40px_rgba(0,0,0,0.2)] relative overflow-visible"
      >
        <a
          href="#"
          onClick={() => setActiveSection("")}
          className="text-lg md:text-xl font-black flex items-center gap-2 outline-none"
        >
          <motion.span
            animate={{ color: logoColor }}
            className="font-serif tracking-wider whitespace-nowrap"
          >
            Fran Araújo
          </motion.span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeSection}`;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href.replace("#", ""))}
                animate={{
                  color: isActive ? colors.dourado : textColor,
                  textShadow: isActive
                    ? "0 0 12px rgba(198, 161, 91, 0.6)"
                    : "none",
                }}
                whileHover={{ color: colors.dourado }}
                className="transition-colors outline-none relative py-1"
              >
                {link.name}
              </motion.a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <motion.a
            href="#contact"
            animate={{ backgroundColor: btnBgColor, color: btnTextColor }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:brightness-110 outline-none"
          >
            <span>Falar com Especialista</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
        >
          <motion.div animate={{ color: textColor }}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[110%] left-0 w-full rounded-3xl p-6 shadow-2xl pointer-events-auto"
              style={{
                backgroundColor:
                  activeTheme === "light" ? colors.onix : colors.marfim,
                border: `1px solid ${activeTheme === "light" ? colors.dourado + "30" : colors.taupe + "30"}`,
              }}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = link.href === `#${activeSection}`;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href.replace("#", ""));
                        setIsOpen(false);
                      }}
                      className="text-lg font-bold transition-colors"
                      style={{
                        color: isActive ? colors.dourado : textColor,
                        textShadow: isActive
                          ? "0 0 10px rgba(198, 161, 91, 0.5)"
                          : "none",
                      }}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-base shadow-lg"
                  style={{ backgroundColor: btnBgColor, color: btnTextColor }}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Iniciar Diagnóstico</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
