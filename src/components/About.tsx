import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-surface-variant shadow-2xl">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ3pZUOIt-__tCQpn_SSAzgmhhqKVESC-I_0wXbDPXqIqqvUqmpyAL4Sq4cVeElCgWBcDK89oEn70ivs-WNcKxbuBAOsApRYvwcdll1bMVS3-VJInwFirHjHy3XqEGp9xSCnIEC-5wMClv8tZympeoSNGt4i24V39lmQ2PDx-Vw7na63CzRmei1zysTRvruUfHT4V1cmnkgQgU3PsyuMBceX85qU6lLhnadwTP8Nst75V1cf2ZWS7tx66onGCkx5pI_tyOrE1CIMA" 
              alt="Professional workspace"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 glass-card p-8 rounded-2xl shadow-xl border border-white/40 max-w-xs"
          >
            <p className="text-primary font-bold text-4xl mb-1">1.5+</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">Years of Real-World Engineering</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Crafting Digital Spaces</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
            I’m a frontend developer with 1.5+ years of experience building real-world applications like telehealth platforms and management systems. 
          </p>
          <p className="text-lg text-on-surface-variant/80 leading-relaxed italic border-l-4 border-primary pl-6">
            "I enjoy turning complex problems into simple, clean, and user-friendly interfaces."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
