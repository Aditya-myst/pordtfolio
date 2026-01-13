
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, ExternalLink, Zap, Rocket, Mail, CheckCircle2, Layout, Database, Terminal as TerminalIcon, ShieldCheck } from 'lucide-react';
import GradientText from './GlitchText';
import {
  SiTypescript, SiNodedotjs, SiRust, SiWebassembly,
  SiReact, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer,
  SiSolidity, SiOpengl, SiWeb3Dotjs,
  SiDiagramsdotnet, SiCreativecommons, SiGooglegemini, SiFigma
} from 'react-icons/si';

const SKILL_CATEGORIES = [
  {
    title: 'Core Architecture',
    icon: TerminalIcon,
    skills: [
      { name: 'TypeScript', level: 74, color: '#3178c6', Logo: SiTypescript },
      { name: 'Node.js', level: 90, color: '#339933', Logo: SiNodedotjs },
      { name: 'Rust', level: 55, color: '#dea584', Logo: SiRust },
      { name: 'WASM', level: 65, color: '#654ff0', Logo: SiWebassembly },
    ]
  },
  {
    title: 'Frontend Engine',
    icon: Layout,
    skills: [
      { name: 'React / Next.js', level: 95, color: '#61dafb', Logo: SiReact },
      { name: 'Tailwind CSS', level: 90, color: '#06b6d4', Logo: SiTailwindcss },
      { name: 'Three.js / WebGL', level: 60, color: '#ffffff', Logo: SiThreedotjs },
      { name: 'Framer Motion', level: 70, color: '#ff0055', Logo: SiFramer },
    ]
  },
  {
    title: 'Specialist Systems',
    icon: Cpu,
    skills: [
      { name: 'Solidity', level: 85, color: '#363636', Logo: SiSolidity },
      { name: 'Gemini AI / LLMs', level: 85, color: '#4285f4', Logo: SiGooglegemini },
      { name: 'GLSL / Shaders', level: 40, color: '#5586a4', Logo: SiOpengl },
      { name: 'DApp Dev', level: 60, color: '#f3ba2f', Logo: SiWeb3Dotjs },
    ]
  },
  {
    title: 'Product & Soft Systems',
    icon: ShieldCheck,
    skills: [
      { name: 'Product Thinking', level: 92, color: '#ec4899', Logo: SiDiagramsdotnet },
      { name: 'Communication', level: 90, color: '#2563eb', Logo: SiCreativecommons },
      { name: 'Marketing Strategy', level: 85, color: '#f59e0b', Logo: SiCreativecommons },
      { name: 'UI/UX Design', level: 88, color: '#a855f7', Logo: SiFigma },
    ]
  }
];

const PROJECTS = [
  {
    title: 'MentoraAI',
    desc: 'AI-driven mentorship platform optimizing student-expert connections. Features real-time matching algorithms and a seamless dashboard for knowledge exchange.',
    tags: ['Next.js', 'Tailwind CSS', 'Gemini', 'Node.js', 'Clerk', 'Supabase'],
    status: '01'
  },
  {
    title: 'CAREERDIVE',
    desc: 'A career exploration and professional development initiative focused on helping students and early professionals identify strengths, explore career paths, and build industry-ready skills through counseling, workshops, and networking events.',
    tags: ['TypeScript', 'UI Design', 'Career Development', 'Workshops', 'Networking', 'Mentorship'],
    status: '02'
  },

  {
    title: 'PORTFOLIO',
    desc: 'A modern, performance-optimized personal portfolio showcasing projects, skills, and experience through interactive UI, smooth animations, and responsive design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
    status: '03'
  }

];

const MARQUEE_ITEMS = [
  "Building & Experimenting",
  "Web2 & Web3 Solutions",
  "Product Thinking",
  "Learning Out Loud",
  "Technology & Money",
  "Personal Growth",
  "Marketing Strategy",
  "Fullstack Architect"
];

const DeveloperProfile: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open('https://www.linkedin.com/newsletters/think-try-fail-7346358247701868544', '_blank');
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="relative z-10 pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

      {/* About / Hero Section */}
      <div id="about" className="mb-32">
        <div className="flex flex-col md:flex-row gap-20 mb-16 items-start md:items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-56 h-56 md:w-[400px] md:h-[400px] group shrink-0"
          >
            <div className="absolute inset-[-30%] bg-blue-600/5 rounded-full blur-[120px] group-hover:bg-blue-500/20 transition-all duration-1000 animate-pulse" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10%] border-2 border-dashed border-white/5 rounded-full group-hover:border-blue-500/20 transition-all duration-700"
            />

            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden bg-black transition-all duration-1000 group-hover:border-white/40 group-hover:scale-[1.02] group-hover:shadow-[0_0_80px_rgba(37,99,235,0.2)]">
              <motion.img
                src="/aditya.png"
                alt="Aditya Kumar Jha"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-xs font-mono text-blue-500 uppercase tracking-[0.5em] mb-6 flex items-center gap-4"
            >
              <div className="h-px w-16 bg-blue-600 shadow-[0_0_10px_#2563eb]" />
              Engineer // Product Thinker // Builder
            </motion.div>

            <h1 className="text-[10vw] md:text-[8.5vw] font-bold leading-[0.8] tracking-tighter">
              ADITYA KUMAR <br />
              <GradientText text="JHA" className="italic" />
            </h1>
          </div>
        </div>

        {/* Enhanced Marquee Section */}
        <div className="w-full overflow-hidden border-y border-white/5 py-12 mb-24 relative bg-white/[0.01]">
          <motion.div
            className="flex whitespace-nowrap text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-slate-600"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(5)].map((_, i) => (
              <React.Fragment key={i}>
                {MARQUEE_ITEMS.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-10 mr-10 group">
                    <span className="text-white/10 group-hover:text-blue-500 transition-colors duration-300">CORE_MODULE:</span> {item}
                    {idx % 2 === 0 ? <Zap className="w-4 h-4 text-blue-600" /> : <Rocket className="w-4 h-4 text-slate-700" />}
                  </span>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <p className="text-xl md:text-4xl text-slate-400 font-light leading-snug max-w-2xl">
              Exploring how <span className="text-white font-normal underline decoration-blue-500/30">technology</span>, <span className="text-white font-normal underline decoration-blue-500/30">products</span>, and <span className="text-white font-normal underline decoration-blue-500/30">money</span> shape the modern world.
            </p>
          </div>
          <div className="flex flex-col gap-8 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-600">
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span>Status</span>
              <span className="text-white">B.Tech CSE @ Bennett (3rd Sem)</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span>Focus</span>
              <span className="text-white">Fullstack // Web3 // AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* NEW IMPROVED SKILLS SECTION */}
      <section id="skills" className="mb-48">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500 mb-6 flex items-center gap-3">
              <Cpu className="w-4 h-4 text-blue-600" /> Technical Arsenal
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">SKILL_MODULES</h2>
          </div>
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest bg-white/[0.03] border border-white/5 px-4 py-2 rounded-full">
            Total_Knowledge_Mapped: {SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)}_Modules
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.2,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Circuit Grid Decorative Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500"
                style={{
                  backgroundImage: 'linear-gradient(rgba(37,99,235,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.2) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="p-3 bg-blue-600/10 rounded-2xl group-hover:bg-blue-600/20 transition-colors">
                  <category.icon className="w-5 h-5 text-blue-500" />
                </div>
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                  {category.title}
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors group/skill"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/40 mb-1 group-hover/skill:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"
                      style={{ color: skill.color }}
                    >
                      <skill.Logo size={24} />
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] font-mono uppercase tracking-tighter text-slate-500 mb-1">{skill.name}</div>
                      <div className="text-[10px] font-bold text-white/40 group-hover/skill:text-white transition-colors">
                        {skill.level}%
                      </div>
                    </div>

                    {/* Tiny progress bar */}
                    <div className="w-full h-[1px] bg-white/5 mt-auto">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (si * 0.1) }}
                        className="h-full bg-blue-500/50"
                        style={{ backgroundColor: skill.color + '80' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects" className="mb-48">
        <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500 mb-20 flex items-center gap-3">
          <Code2 className="w-4 h-4 text-blue-600" /> Built & Deployed
        </h3>

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative border-b border-white/5 pb-20 last:border-0"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="flex flex-col gap-4 shrink-0">
                  <span className="text-[10px] font-mono text-slate-800 tracking-[0.5em]">{project.status}</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:border-blue-500/50 group-hover:text-blue-500 transition-all duration-500">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <h4 className="text-4xl md:text-6xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-500">
                    {project.title}
                  </h4>
                  <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl group-hover:text-slate-200 transition-colors duration-500">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, ti) => (
                      <span key={ti} className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em] px-4 py-1.5 border border-white/10 rounded-lg bg-white/[0.02]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-white/10 rounded-[2.5rem] overflow-hidden bg-white/[0.02] backdrop-blur-3xl p-12 md:p-24 text-center group"
      >
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-white/10">
            <Mail className="w-7 h-7 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">THINK TRY FAIL</h2>
          <p className="text-slate-400 text-xl md:text-2xl mb-12 font-light leading-relaxed">
            Join 1,500+ builders receiving weekly insights.
          </p>
          <form onSubmit={handleSubscribe} className="relative max-w-lg mx-auto mb-12 flex flex-col md:flex-row gap-6">
            {!subscribed ? (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="architect@domain.xyz"
                  className="flex-1 bg-black/60 border border-white/10 rounded-2xl px-8 py-5 text-sm font-mono focus:outline-none focus:border-blue-500/50"
                />
                <button type="submit" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-[0_10px_30px_rgba(37,99,235,0.2)]">
                  ACCESS_LOG
                </button>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center gap-4 text-blue-500 font-mono text-base border border-blue-500/30 bg-blue-500/10 py-6 rounded-2xl">
                <CheckCircle2 className="w-6 h-6" /> INITIATING UPLINK REDIRECT...
              </div>
            )}
          </form>
        </div>
      </motion.section>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default DeveloperProfile;
