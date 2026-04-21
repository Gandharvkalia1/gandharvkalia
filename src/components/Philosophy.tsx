import { motion } from 'motion/react';
import { Box, Layers, Accessibility, Zap } from 'lucide-react';

export default function Philosophy() {
  const principles = [
    {
      icon: Box,
      title: 'Clean Systems',
      desc: 'Modular, predictable architectures that stand the test of time.'
    },
    {
      icon: Layers,
      title: 'Reusable Parts',
      desc: 'Building components once to use them everywhere efficiently.'
    },
    {
      icon: Accessibility,
      title: 'Accessibility',
      desc: 'Ensuring the digital space is welcoming to every type of user.'
    },
    {
      icon: Zap,
      title: 'Performance',
      desc: "Speed as a feature, prioritizing the user's time and device."
    }
  ];

  return (
    <section className="py-32 bg-inverse-surface text-on-primary">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-20">How I Build UI</h2>
        <div className="grid md:grid-cols-4 gap-12">
          {principles.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p.icon className="w-10 h-10 mb-6 text-tertiary-fixed mx-auto" />
              <h3 className="text-lg font-bold mb-3">{p.title}</h3>
              <p className="text-on-primary/60 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
