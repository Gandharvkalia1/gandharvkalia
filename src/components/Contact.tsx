import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-8"
        >
          GET IN TOUCH
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-12 tracking-tight"
        >
          Let's build something great together.
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="mailto:gandharvakalia@gmail.com" 
            className="group flex items-center gap-4 text-xl font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="p-4 bg-surface-container rounded-2xl group-hover:bg-primary/10 transition-colors">
              <Mail className="w-6 h-6" />
            </span>
            gandharvakalia@gmail.com
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="tel:+919914424168" 
            className="group flex items-center gap-4 text-xl font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="p-4 bg-surface-container rounded-2xl group-hover:bg-primary/10 transition-colors">
              <Phone className="w-6 h-6" />
            </span>
            +91 9914424168
          </motion.a>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: 'https://github.com/Gandharvkalia1', color: 'bg-on-background' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/gandharvkalia/', color: 'bg-[#0077b5]' }
          ].map((social, i) => (
            <motion.a 
              key={i}
              whileHover={{ scale: 1.1, y: -5 }}
              href={social.href}
              className={`w-12 h-12 flex items-center justify-center rounded-full ${social.color} text-white shadow-lg`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
