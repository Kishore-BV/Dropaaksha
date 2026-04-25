import { motion } from 'motion/react';

const founders = [
  {
    initials: "BA",
    name: "Basheer Ahamed Mohamed",
    role: "Co-Founder & Director",
    tags: ["Strategic Leadership", "Business Development", "Operations Management", "Stakeholder Relations"]
  },
  {
    initials: "CV",
    name: "Chinnathami Vinothkumar",
    role: "Co-Founder & Director",
    tags: ["Technical Architecture", "Drone R&D Engineering", "Product Development", "Systems Integration"]
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-text-muted mb-4 text-left">Founding Team</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">The Builders Behind Dropaksha</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-surface-mid border border-border-dark p-12 lg:p-16 relative flex flex-col group hover:border-brand-white transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none opacity-5">
                <span className="text-[120px] font-display font-bold leading-none select-none">{person.initials}</span>
              </div>

              <div className="w-14 h-14 border border-brand-white flex items-center justify-center font-display font-bold text-lg mb-8 group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-300">
                {person.initials}
              </div>

              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-2">{person.name}</h3>
              <p className="text-text-dim text-lg mb-8">{person.role}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {person.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 border border-border-dark text-[10px] uppercase tracking-wider text-text-dim whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
