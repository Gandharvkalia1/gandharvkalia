import { motion } from 'motion/react';
import { Terminal, Code, Palette } from 'lucide-react';

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-32 bg-surface" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
          <p className="text-on-surface-variant">Tools and technologies I use to bring ideas to life.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {/* Frontend */}
          <motion.div variants={item} className="md:col-span-2 bg-surface-container-low p-8 rounded-2xl">
            <Terminal className="text-primary mb-6 w-8 h-8" />
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'React Native'].map((s) => (
                <span key={s} className="px-3 py-1 bg-white rounded-lg text-sm font-medium shadow-sm border border-outline-variant/10">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={item} className="bg-surface-container-highest p-8 rounded-2xl">
            <Code className="text-primary mb-6 w-8 h-8" />
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <div className="flex flex-col gap-2">
              {['JavaScript', 'TypeScript', 'HTML/CSS'].map((s) => (
                <span key={s} className="text-sm font-medium text-on-surface-variant">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Styling */}
          <motion.div variants={item} className="bg-surface-container-high p-8 rounded-2xl">
            <Palette className="text-primary mb-6 w-8 h-8" />
            <h3 className="text-xl font-bold mb-4">Styling</h3>
            <div className="flex flex-col gap-2">
              {['Tailwind CSS', 'Responsive Design'].map((s) => (
                <span key={s} className="text-sm font-medium text-on-surface-variant">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            variants={item}
            className="md:col-span-4 bg-white border border-outline-variant/20 p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-sm"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Architectural Tools</h3>
              <p className="text-on-surface-variant text-sm">Ensuring scalability and performance through modern tooling.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Git', 'GitHub', 'Axios', 'REST APIs', 'Context API'].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-surface-container text-on-secondary-container rounded-full text-sm font-semibold">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
