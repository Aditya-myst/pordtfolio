
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Identity confirmed. Hello ,I am Liebe. How can I assist your investigation of the Architect\'s work?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    const responseText = await sendMessageToGemini(input);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-end p-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
            className="w-full max-w-sm bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.9)] pointer-events-auto mb-20 md:mb-24 mr-0 md:mr-4"
          >
            <div className="bg-white/5 p-5 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                </div>
                <h3 className="text-[10px] font-mono font-bold text-white tracking-[0.4em] uppercase">SYSTEM_LIEBE</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-slate-600 hover:text-white p-1 transition-colors"
                data-hover="true"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div 
              ref={chatContainerRef} 
              className="h-[380px] overflow-y-auto p-6 space-y-6 font-mono text-[11px] leading-relaxed scrollbar-hide bg-black/50"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-xl border ${
                    msg.role === 'user' 
                      ? 'bg-blue-600/5 border-blue-600/20 text-blue-100' 
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    <div className="text-[8px] mb-1.5 text-slate-700 uppercase tracking-widest font-bold">
                      {msg.role === 'user' ? 'REQUEST' : 'LIEBE_NODE'}
                    </div>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-blue-600/60 text-[10px] uppercase font-bold tracking-widest pl-2">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span>Syncing...</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-white/[0.02] border-t border-white/10">
              <div className="flex gap-2 bg-black rounded-xl border border-white/10 p-1.5 focus-within:border-white/30 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire LIEBE..."
                  className="flex-1 bg-transparent px-4 py-2 text-white placeholder-slate-800 text-[11px] font-mono focus:outline-none"
                />
                <button 
                  onClick={handleSend} 
                  disabled={isLoading || !input.trim()} 
                  className="bg-white text-black p-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all disabled:opacity-20"
                  data-hover="true"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AIChat;
