import { motion } from 'motion/react';
import { Cpu, Layers, BarChart3, Users } from 'lucide-react';

const solutions = [
  {
    icon: <Cpu size={20} />,
    title: "Made-in-India Drones",
    desc: "Purpose-built UAVs for survey, agriculture & surveillance"
  },
  {
    icon: <Layers size={20} />,
    title: "DaaS Platform",
    desc: "Subscription-based aerial data with zero upfront capex"
  },
  {
    icon: <BarChart3 size={20} />,
    title: "AI-Powered Analytics",
    desc: "Real-time processing, 3D mapping & crop insights"
  },
  {
    icon: <Users size={20} />,
    title: "End-to-End Partnership",
    desc: "From deployment to maintenance — a complete stack"
  }
];

export default function Solution() {
  return (
    <section className="py-24 bg-brand-black text-brand-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-text-muted mb-4 text-left">Our Solution</p>
            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-8">
              End-to-End Drone Intelligence — Built in India
            </h2>
          </div>
          <div>
            <p className="text-lg text-text-dim leading-relaxed max-w-xl">
              Dropaksha delivers end-to-end drone-powered solutions — from indigenous hardware to intelligent aerial services — making advanced drone capabilities accessible and affordable across India.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-mid border border-border-dark p-8 md:p-10 group hover:border-brand-white transition-all duration-300"
            >
              <div className="mb-6 p-3 border border-border-dark inline-block group-hover:border-brand-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-base font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-4xl lg:text-5xl font-display italic text-brand-white max-w-4xl mx-auto leading-tight"
            >
              "Democratising the skies for India's future"
            </motion.h3>
        </div>
      </div>
    </section>
  );
}
