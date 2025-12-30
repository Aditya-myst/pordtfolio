
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';

interface CLITerminalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CLITerminal: React.FC<CLITerminalProps> = ({ isOpen, setIsOpen }) => {
  const [history, setHistory] = useState<string[]>(['System authenticated. Type "help" to begin exploration.']);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    switch (cmd) {
      case 'help':
        response = 'Available commands: about, skills, projects, philosophy, clear, exit';
        break;
      case 'about':
        response = 'Aditya Kumar Jha: Fullstack Architect & B.Tech CSE Student (3rd Sem) at Bennett University. Architecting value in the age of intelligence.';
        break;
      case 'skills':
        response = 'Web [98%], React/Next.js [95%], Tailwind/Shadcn [92%], Web3/Solidity [85%], AI Core Integration [90%].';
        break;
      case 'projects':
        response = 'Active Deploys: MentoraAI (AI Mentorship), VOID RENDER (Shader Engine), LUMINA OS (3D Interface).';
        break;
      case 'philosophy':
        response = 'THINK. TRY. FAIL. LEARN OUT LOUD. Join 1,500+ builders in the digital frontier via the linked newsletter.';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        setIsOpen(false);
        setInput('');
        return;
      default:
        response = `Command not recognized: "${cmd}". Type "help" for a list of system operations.`;
    }

    setHistory(prev => [...prev, `> ${input}`, response]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="w-full max-w-4xl h-full max-h-[600px] bg-black border border-white/10 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-white">ADITYA_SYSTEM_v2.0</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-white p-1 transition-colors"
                data-hover="true"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* CLI Area */}
            <div 
              ref={containerRef}
              className="flex-1 p-8 font-mono text-xs md:text-sm text-slate-300 overflow-y-auto space-y-4 scrollbar-hide"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="text-blue-500 mb-8">
                <pre className="leading-tight text-[10px] md:text-xs">
{`   _____  ____  _ _______     __      
  /  _  \\|  _ \\| |__   __|\\ \\   / /    
 /  /_\\  \\ | | | |  | |    \\ \\_/ /     
|  ___  || | | | |  | |     \\   /      
| |   | || |_| | |  | |      | |       
|_|   |_|____/|_|  |_|      |_|       `}
                </pre>
                <div className="mt-4 uppercase tracking-[0.5em] text-[10px]">Architect Interface Enabled</div>
              </div>

              {history.map((line, i) => (
                <div key={i} className={line.startsWith('>') ? 'text-white' : 'text-slate-400'}>
                  {line}
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex gap-3">
                <span className="text-blue-500">guest@aditya:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-white lowercase"
                  autoFocus
                />
              </form>
            </div>

            {/* Status Bar */}
            <div className="bg-white/5 px-6 py-2 border-t border-white/10 flex justify-between items-center text-[9px] font-mono text-slate-600 uppercase tracking-widest">
               <span>Status: Active_Session</span>
               <span>Encoding: UTF-8</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CLITerminal;
