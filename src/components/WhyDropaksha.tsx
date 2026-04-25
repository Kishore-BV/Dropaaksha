import { motion } from 'motion/react';
import { Target, Layers, Calculator, MapPin, Share2, Building2 } from 'lucide-react';

const points = [
  {
    icon: <Target size={20} />,
    title: "Atma Nirbhar Aligned",
    desc: "100% Made-in-India, qualifies under PLI & defence procurement"
  },
  {
    icon: <Layers size={20} />,
    title: "Integrated Stack",
    desc: "Own hardware + software + service, no third-party dependency"
  },
  {
    icon: <Calculator size={20} />,
    title: "Low Operating Cost",
    desc: "DaaS eliminates upfront capex, accelerates adoption"
  },
  {
    icon: <MapPin size={20} />,
    title: "Local Intelligence",
    desc: "Deep domain knowledge in TN agriculture & infrastructure"
  },
  {
    icon: <Share2 size={20} />,
    title: "Scalable Architecture",
    desc: "Cloud-native platform scales from farm to national contracts"
  },
  {
    icon: <Building2 size={20} />,
    title: "Government Ready",
    desc: "GST-registered, MCA-incorporated, ready for state & central tenders"
  }
];

export default function WhyDropaksha() {
  return (
    <section className="py-24 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-1px bg-border-dark border border-border-dark overflow-hidden">
          <div className="bg-brand-black p-12 lg:col-span-3 flex flex-col md:flex-row items-baseline justify-between mb-8 border-b border-border-dark">
             <div>
              <p className="text-xs uppercase tracking-[0.4em] text-text-muted mb-4 text-left">Why Dropaksha?</p>
              <h2 className="text-4xl lg:text-5xl font-display font-bold">Built to Win in India's Drone Era</h2>
             </div>
          </div>
          
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-brand-black p-10 group hover:bg-surface-dark transition-all duration-300"
            >
              <div className="mb-6 p-4 border border-border-dark text-brand-white inline-block group-hover:border-brand-white transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{point.title}</h3>
              <p className="text-text-dim leading-relaxed text-sm">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
