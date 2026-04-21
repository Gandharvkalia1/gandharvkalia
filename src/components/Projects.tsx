import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-32 bg-surface-container-low" id="work">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-on-surface-variant max-w-xl">Deep dives into technical challenges and the solutions engineered to solve them.</p>
          </div>
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2 group">
            Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="space-y-32">
          {/* Project: Telehealth */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full">Core Project</span>
                <span className="text-xs font-bold px-3 py-1 bg-surface-container-highest rounded-full">2024</span>
              </div>
              <h3 className="text-4xl font-bold mb-6">Telehealth Application</h3>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Bridging the patient-doctor gap remotely with a scalable real-time platform. This system handles complex medical workflows with a focus on reliability and privacy.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Real-time video consultation with zero-latency interface.',
                  'Automated appointment booking & doctor availability system.',
                  'Role-based dashboards for patients, doctors, and clinics.'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-tertiary-fixed-variant w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-on-surface-variant">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {['React', 'Next.js', 'WebRTC'].map((tech, i) => (
                  <span key={tech} className="text-xs font-medium text-outline flex items-center gap-2">
                    {tech} {i < 2 && <span className="w-1 h-1 bg-outline rounded-full" />}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  className="w-full aspect-video object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjLGzhbkd_M6OlscYta6oAjkDcS4S-UWeP8v19Rw2VV3rdeA07ON_ByWeBw6AMdLbBPVBfdbwfqT6sGqHQVkicdCE_01TnPLYG5-B-NKmoPsLr4dNd-gLMa7sdaS1C44TZtdRjxVXxI4pbWnusUd7JgIZVaussdh5XinubrsKG0QUFsHz3ljrF-OGZ1S5KYnYREfbELXVQiDDeH7L9OaHgJBdUPJcWlRagOfrsy_5mkDbr46mjOpYxaisXZLCH0dc_Un1AO7eka4w" 
                  alt="Telehealth Application"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Secondary Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-outline-variant/10 group"
            >
              <div className="aspect-video bg-surface-container rounded-xl mb-8 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdyBB7gtC6QEJPD5iSdVt__WTsvcjv5V6jmFKD2SJWhVEl6Xvtaz0VQWYQG3yFXNaaTvyw-6wUSJ9f8JZ1NMFBbQ4vWkDkPfKeZpgDaQqMKAAW8NdLQxB7E_af1a90nl2D0u51jdItw9tpxAP4a_noe2F8RS5l6A8mIJAFDi0XSJpR7Py8a2dVv82cQu3at19Xu5XIcQPKMD_7s-9f-5M2oZTPrwKMl-EqA0VW4-brKL1nlLjtzVc7_p6rVQwfMb120jjeHH7CO3o" 
                  alt="DeployMeta"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-bold mb-4">DeployMeta</h4>
              <p className="text-on-surface-variant mb-6">A clinical research management system designed to handle high-stakes data through optimized complex forms and validation logic.</p>
              <span className="text-sm font-semibold text-primary">System Architecture & Forms</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-outline-variant/10 group"
            >
              <div className="aspect-video bg-surface-container rounded-xl mb-8 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQEZq3g5oyy_QpSe8_SBKUFTqoil4h_6C_txmy3Sgx4cj0EpEE-nthDp5GzB0ADKFhZl5FMgQ2C4TF0B8ytMys-bR66MHCiW_p4nFWPILjeglZj1zCyo3RfYHDWzABKj6BlQOKEijH0HMUgZXdmx1XSASnDXdWC57iiY7Z9K13n71d5cow8FPFY2BdKqimG3u0nE27g5fqPYEecH4MqlaEiEgNfjoIraxQUbu8nMbhdsn_CtfJPlEY93uE7_4s1-5z7HWmc_ioYlA" 
                  alt="SchoolMeta"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-bold mb-4">SchoolMeta</h4>
              <p className="text-on-surface-variant mb-6">A complete educational ecosystem featuring sophisticated role-based access for Admins, Students, and Teachers.</p>
              <span className="text-sm font-semibold text-primary">RBAC & State Management</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
