// import { motion } from 'motion/react';

import { motion } from "motion/react";
import image from "../../public/assets/images/gandharv.png";

// export default function Hero() {
//   return (
//     <header className="relative pt-40 pb-32 overflow-hidden min-h-screen flex items-center">
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#eaedff_0%,#faf8ff_100%)]"></div>
      
//       <div className="max-w-7xl mx-auto px-8 w-full">
//         <div className="max-w-3xl">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-3 mb-8"
//           >
//             <span className="inline-block w-3 h-3 bg-tertiary-fixed-dim rounded-full animate-pulse shadow-[0_0_12px_#4edea3]"></span>
//             <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant font-label">Frontend Developer</span>
//           </motion.div>

//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background mb-8 leading-[0.9]"
//           >
//             Gandharv <span className="text-primary">Kalia.</span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-12 font-body max-w-2xl"
//           >
//             I build scalable, production-ready web apps with clean UI and real user impact.
//           </motion.p>

//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-wrap gap-4 mb-16"
//           >
//             <a href="#work" className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95">
//               View Projects
//             </a>
//             <a href="#contact" className="px-8 py-4 bg-surface-container-highest text-on-surface rounded-full font-bold text-lg hover:bg-surface-container-high transition-all active:scale-95">
//               Contact Me
//             </a>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="flex flex-wrap gap-3"
//           >
//             {['React', 'Next.js', 'Tailwind', 'API Integration'].map((tag) => (
//               <span key={tag} className="px-4 py-1.5 bg-white border border-outline-variant/30 text-on-surface-variant rounded-full text-xs font-semibold shadow-sm">
//                 {tag}
//               </span>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Decorative Code Inset */}
//       <motion.div 
//         initial={{ opacity: 0, x: 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//         className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4"
//       >
//         <div className="bg-inverse-surface p-8 rounded-2xl shadow-2xl w-[500px] border border-outline/10">
//           <div className="flex gap-2 mb-6">
//             <div className="w-3 h-3 rounded-full bg-error"></div>
//             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//             <div className="w-3 h-3 rounded-full bg-tertiary"></div>
//           </div>
//           <code className="text-secondary-fixed-dim text-sm leading-relaxed block font-mono">
//             <span className="text-tertiary-fixed">const</span> Architect = ({'{ project }'}) =&gt; {'{'}<br/>
//             &nbsp;&nbsp;<span className="text-tertiary-fixed">return</span> (<br/>
//             &nbsp;&nbsp;&nbsp;&nbsp;&lt;Precision&gt;<br/>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{project.impact}'}<br/>
//             &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Precision&gt;<br/>
//             &nbsp;&nbsp;);<br/>
//             {'};'}
//           </code>
//         </div>
//       </motion.div>
//     </header>
//   );
// }

export default function Hero() {
  return (
  <section className="min-h-[80vh] flex flex-col justify-center px-8 max-w-7xl mx-auto relative overflow-hidden pt-32 pb-20">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-8"
      >
        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Frontend Developer</span>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
          Gandharv <br/><span className="text-primary">Kalia.</span>
        </h1>
        <p className="text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed mb-10">
          I build resilient digital structures that bridge the gap between complex engineering and intuitive human experience.
        </p>
        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "Tailwind", "API Integration"].map((skill) => (
            <span key={skill} className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface font-semibold text-sm border border-outline-variant/5">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-4 hidden lg:block"
      >
        <div className="aspect-[4/5] bg-surface-container-low rounded-[3rem] relative group overflow-hidden shadow-[0px_20px_40px_rgba(26,28,28,0.06)]">
          <img 
            // src="https://lh3.googleusercontent.com/aida-public/AB6AXuBklnnV_6Hssz5rsqnmD5cKUmbblLcfcsYh8b7zynzBpDMP4OeYKAQCTlABzh_xDbWH0P7-mBs8GteD5jk1oFHTZmnIRkA6oVJPmUBoo8rzjhGC6BE-GTDfWd-DNQYC8iRrC4hiYt3IX78g2yI6IJ1gOF9jSHLLj9WzaFY-1B2hKzlJnGvguRDfUFezdSDtqsDMKkAaZe3sUlPtNMkcCIvFTWoMJlasdurP39ylMcl4HdB5BGae_lIYiUD0GFP0qzPlxYcZwplJh9s" 
            src={image.src} 
            alt="Gandharv Kalia" 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </motion.div>
    </div>
  </section>
);
}