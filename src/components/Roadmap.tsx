import { motion } from 'motion/react';

const phases = [
  {
    id: 1,
    year: "2025",
    title: "FOUNDATION",
    active: true,
    milestones: [
      "Company incorporation",
      "GST registration",
      "First prototype UAV",
      "Seed funding round"
    ]
  },
  {
    id: 2,
    year: "2026",
    title: "LAUNCH",
    active: false,
    milestones: [
      "First 5 DaaS clients",
      "TN agri pilot programme",
      "Team of 10 engineers",
      "Series A preparation"
    ]
  },
  {
    id: 3,
    year: "2027",
    title: "SCALE",
    active: false,
    milestones: [
      "National expansion",
      "Defence sector entry",
      "50+ enterprise contracts",
      "Manufacturing facility"
    ]
  },
  {
    id: 4,
    year: "2028",
    title: "GROWTH",
    active: false,
    milestones: [
      "ASEAN market entry",
      "100+ Cr ARR target",
      "Expanding team",
      "AI R&D centre"
    ]
  }
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-brand-white text-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">Growth Roadmap</p>
            <h2 className="text-4xl lg:text-5xl font-display font-bold">From Prototype to Pan-India</h2>
        </div>

        <div className="relative mt-20">
          {/* Timeline Line */}
          <div className="absolute top-0 left-8 md:top-24 md:left-0 md:w-full h-full md:h-[1px] border-l md:border-l-0 md:border-t border-dashed border-brand-black opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-8 mb-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-xl border-2 shrink-0 ${
                    phase.active ? 'bg-brand-black text-brand-white border-brand-black' : 'bg-brand-white text-brand-black border-brand-black border-dashed'
                  }`}>
                    {phase.id}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-1">{phase.year}</div>
                    <div className={`text-xl font-display font-bold tracking-tight ${phase.active ? 'text-brand-black' : 'text-gray-400'}`}>
                      {phase.title}
                    </div>
                  </div>
                </div>

                <div className={`p-8 border min-h-[220px] transition-all duration-500 ${
                  phase.active ? 'border-brand-black border-solid' : 'border-gray-200 border-dashed'
                }`}>
                  <ul className="space-y-4">
                    {phase.milestones.map((ms, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 shrink-0 bg-brand-black opacity-30" />
                        <span className={phase.active ? 'text-brand-black font-medium' : 'text-gray-500'}>{ms}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
