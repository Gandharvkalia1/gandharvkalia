import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section className="py-32 bg-surface" id="experience">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>
        
        <div className="relative pl-8 border-l-2 border-outline-variant/30">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-[0_0_0_4px_rgba(53,37,205,0.1)]"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold text-on-background">QuickCoderz</h3>
              <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/5 rounded-full">2024 — Present</span>
            </div>
            
            <p className="text-lg font-semibold text-on-surface-variant mb-6">Senior Frontend Developer</p>
            
            <ul className="space-y-4 text-on-surface-variant">
              {[
                'Built and scaled responsive applications using React & Next.js for enterprise clients.',
                'Transformed complex Figma designs into pixel-perfect, interactive UI systems.',
                'Orchestrated seamless API integrations and optimized application performance by 40%.'
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
