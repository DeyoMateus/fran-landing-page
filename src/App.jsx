import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Pillars from "./components/Pillars";
import SocialProof from "./components/SocialProof";
import SocialSphere from "./components/SocialSphere";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SocialSphere />
        <Manifesto />
        <Pillars />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
