import { motion } from 'motion/react';

const streams = [
  {
    percentage: "40%",
    title: "Hardware Sales",
    desc: "One-time sale to enterprises, govt & defence",
    color: "#FFFFFF"
  },
  {
    percentage: "35%",
    title: "DaaS Subscriptions",
    desc: "Monthly/annual packages for aerial data & analytics",
    color: "#AAAAAA"
  },
  {
    percentage: "15%",
    title: "MRO Services",
    desc: "Maintenance, repair & overhaul for drone fleets",
    color: "#555555"
  },
  {
    percentage: "10%",
    title: "Data Licensing",
    desc: "Monetize geospatial datasets to planners & researchers",
    color: "#222222"
  }
];

export default function BusinessModel() {
  return (
    <section className="py-24 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-text-muted mb-4 text-left">Business Model</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Four Revenue Streams</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {streams.map((stream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-mid border border-border-dark p-8 md:p-10 hover:border-text-dim transition-all duration-300"
            >
              <div className="text-5xl lg:text-6xl font-display font-bold mb-8 text-brand-white">
                {stream.percentage}
              </div>
              <h3 className="text-lg font-bold mb-3">{stream.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {stream.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Breakdown Strip */}
        <div className="flex w-full h-8 overflow-hidden sharp-border">
          {streams.map((stream, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              whileInView={{ width: stream.percentage }}
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
              style={{ backgroundColor: stream.color }}
              className="h-full relative group"
            >
               <div className="absolute top-full mt-2 left-0 hidden group-hover:block whitespace-nowrap text-[10px] uppercase tracking-widest text-text-dim">
                  {stream.percentage} {stream.title}
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
