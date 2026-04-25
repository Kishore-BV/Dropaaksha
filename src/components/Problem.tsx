import { motion } from 'motion/react';
import { Map, Leaf, Shield, Grid } from 'lucide-react';

const problems = [
  {
    id: "01",
    icon: <Map size={24} />,
    title: "Outdated Surveys",
    desc: "Infrastructure & land surveys rely on slow, costly manual methods with high error rates."
  },
  {
    id: "02",
    icon: <Leaf size={24} />,
    title: "Agricultural Blind Spots",
    desc: "Farmers lack real-time crop health monitoring, leading to overuse of pesticides & water."
  },
  {
    id: "03",
    icon: <Shield size={24} />,
    title: "Security Gaps",
    desc: "Remote & border regions demand aerial surveillance that is expensive and risky with manned aircraft."
  },
  {
    id: "04",
    icon: <Grid size={24} />,
    title: "Mapping Inefficiency",
    desc: "Accurate 2D/3D mapping for urban planning is time-consuming and prohibitively expensive."
  }
];

export default function Problem() {
  return (
    <section className="py-24 bg-brand-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#888] mb-4">The Problem</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold max-w-2xl leading-tight">
            India's Critical Sectors Lack Aerial Intelligence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-[1px] bg-border-light border border-border-light overflow-hidden">
          {problems.map((prob, i) => (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-white p-12 relative group"
            >
              <div className="absolute top-8 left-8 text-6xl font-bold text-border-light opacity-60 z-0">
                {prob.id}
              </div>
              <div className="relative z-10 flex flex-col items-end text-right ml-auto">
                <div className="mb-6 p-4 border border-border-light inline-block group-hover:bg-brand-black group-hover:text-brand-white transition-colors duration-300">
                  {prob.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{prob.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {prob.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
