
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Terminal, MessageSquareCode, Sparkles, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import DeveloperProfile from './components/DeveloperProfile';
import AIChat from './components/AIChat';
import CLITerminal from './components/CLITerminal';

const SOCIAL_LINKS = [
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/AdityaK93865059', label: "ADITYA'S TWITTER" },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/adityakumarjha-in/', label: "ADITYA'S LINKEDIN" },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Aditya-myst', label: "ADITYA'S GITHUB" },
  { name: 'Email', icon: Mail, url: 'mailto:adityaceo007@gmail.com', label: "ADITYA'S EMAIL" },
];

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCLIOpen, setIsCLIOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative min-h-screen bg-black text-slate-200 selection:bg-white selection:text-black cursor-auto md:cursor-none overflow-x-hidden">
      <CustomCursor />
      <FluidBackground />
      
      {/* Fixed Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-white z-[110] origin-left"
        style={{ scaleX }}
      />
      
      {/* Dynamic Header */}
      <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-8">
        
        {/* Left: Branding */}
        <div className="z-50 font-heading text-sm font-black tracking-[0.2em] uppercase text-white min-w-[100px]">
          ADITYA.
        </div>
        
        {/* Center: Explore Toggle & Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 md:gap-8">
          <AnimatePresence>
            {isExploreOpen && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex gap-4 md:gap-6 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-hide max-w-[50vw]"
              >
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-white transition-colors cursor-pointer bg-transparent border-none border-b border-transparent hover:border-white/20 pb-1"
                    data-hover="true"
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => setIsExploreOpen(!isExploreOpen)}
            className={`font-heading text-[10px] font-black tracking-[0.6em] uppercase transition-all duration-500 py-2.5 px-6 md:px-8 border border-transparent rounded-full whitespace-nowrap ${isExploreOpen ? 'bg-white text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            data-hover="true"
          >
            {isExploreOpen ? 'CLOSE' : 'EXPLORE'}
          </button>
        </div>
        
        {/* Right: Terminal Icon */}
        <div className="z-50 flex items-center gap-4">
          <button 
            onClick={() => setIsCLIOpen(!isCLIOpen)}
            className="group flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            data-hover="true"
            aria-label="Terminal CLI"
          >
            <Terminal className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <CLITerminal isOpen={isCLIOpen} setIsOpen={setIsCLIOpen} />
      <AIChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

      <div className="fixed bottom-8 right-8 z-[70]">
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group p-4 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-3 overflow-hidden"
          data-hover="true"
        >
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <MessageSquareCode className="w-6 h-6" />
          <span className="text-[10px] font-mono font-black tracking-[0.2em] uppercase hidden md:inline">LIEBE_v4</span>
          
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
        </motion.button>
        
        <AnimatePresence>
          {!isChatOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg whitespace-nowrap hidden lg:block"
            >
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-blue-500" /> Ask me about Aditya
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main>
        <DeveloperProfile />
      </main>

      <footer id="contact" className="relative z-10 border-t border-white/5 pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
            <div className="col-span-1 md:col-span-7 space-y-12">
              <h2 className="text-4xl md:text-8xl font-heading font-bold text-white tracking-tighter leading-tight uppercase">
                THINK. TRY. FAIL. <br/> <span className="text-slate-800 italic">LEARN OUT LOUD.</span>
              </h2>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em]">Aditya Kumar Jha // Fullstack Architect // 2025</span>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-5">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-slate-500 mb-12 border-b border-white/5 pb-4">Connect_Systems</h4>
              <ul className="flex flex-col gap-8">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center gap-6 text-slate-400 hover:text-white transition-all duration-300 relative" 
                      data-hover="true"
                    >
                      <div className="relative p-4 rounded-xl bg-white/5 group-hover:bg-blue-600/10 group-hover:text-blue-500 transition-all duration-500 border border-white/10 group-hover:border-blue-500/30 overflow-hidden">
                        <link.icon className="w-6 h-6 relative z-10" />
                        <motion.div 
                          className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 blur-xl"
                          initial={false}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-mono uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">{link.name}</span>
                        <div className="overflow-hidden h-4">
                          <motion.span 
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block"
                          >
                            {link.label}
                          </motion.span>
                        </div>
                      </div>
                      
                      {/* Geometric accent on hover */}
                      <motion.div 
                        className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        initial={{ height: 0 }}
                        whileHover={{ height: 32 }}
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-16">
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_10px_#2563eb]" />
              <div className="text-[9px] font-mono uppercase tracking-[0.5em] text-slate-700">
                SYSTEM_STATUS: STABLE_ADITYA_V2.0.4
              </div>
            </div>
            <div className="text-[9px] font-mono uppercase tracking-[0.5em] text-slate-800">
              © 2025 // ADITYA KUMAR JHA // ARCHITECTED_WITH_PRECISION
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
