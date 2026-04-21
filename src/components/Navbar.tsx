import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-on-background font-headline">
          Gandharv Kalia
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight">
          {['Work', 'Skills', 'Experience', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-6 py-2 bg-primary text-on-primary rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          Hire Me
        </motion.a>
      </div>
    </nav>
  );
}
