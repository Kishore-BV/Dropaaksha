import { motion } from 'motion/react';

const stats = [
  {
    val: "₹4.6B",
    title: "India Drone Market 2030",
    desc: "CAGR of 20%+ driven by PLI scheme"
  },
  {
    val: "1M+ Acres",
    title: "To be Drone Mapped",
    desc: "Under PM Swamitva & SVAMITVA scheme"
  },
  {
    val: "₹120 Cr",
    title: "PLI Incentive Corpus",
    desc: "For drone & component manufacturers"
  }
];

const verticals = [
  "Agriculture", "Infrastructure", "Surveying & GIS", "Defence & Security", "Environment", "Logistics"
];

export default function Market() {
  return (
    <section className="py-24 bg-brand-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">Market Opportunity</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">A Massive, Policy-Backed Market</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-white p-10 border-t-2 border-brand-black flex flex-col text-center"
            >
              <div className="text-3xl lg:text-4xl font-display font-bold mb-4">{stat.val}</div>
              <h3 className="text-base font-bold mb-2 uppercase tracking-wider">{stat.title}</h3>
              <p className="text-gray-500 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border-light pt-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-8">Target Verticals</p>
          <div className="flex flex-wrap justify-center gap-3">
            {verticals.map((v, i) => (
              <span
                key={i}
                className="px-6 py-3 border border-brand-black text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-black hover:text-brand-white transition-all duration-300 cursor-default"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
