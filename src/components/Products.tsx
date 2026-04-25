import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const hardware = [
  "Fixed-Wing Survey UAVs",
  "Multi-Rotor Agricultural Drones",
  "Hybrid VTOL Platforms",
  "Custom-built OEM Drones",
  "Ground Control Stations & Software"
];

const services = [
  "Aerial Surveying & Mapping",
  "Precision Agriculture Monitoring",
  "Infrastructure Inspection",
  "Security & Surveillance",
  "Emergency Response & Logistics"
];

export default function Products() {
  return (
    <section className="py-24 bg-brand-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">Products & Services</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">Hardware Meets Intelligence</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-1px lg:bg-border-light lg:border lg:border-border-light rounded-none">
          {/* Hardware Panel */}
          <div className="bg-brand-white border lg:border-none border-brand-black overflow-hidden group">
            <div className="bg-brand-black text-brand-white p-6 md:p-8">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold">Drone Manufacturing</h3>
            </div>
            <div className="divide-y divide-border-light">
              {hardware.map((item, i) => (
                <div 
                  key={i} 
                  className="p-6 md:p-8 flex items-center justify-between group/row hover:bg-brand-black hover:text-brand-white transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <ArrowRight size={16} className="group-hover/row:translate-x-2 transition-transform duration-300" />
                    <span className="text-base sm:text-lg font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DaaS Panel */}
          <div className="bg-brand-white border lg:border-none border-brand-black overflow-hidden group">
            <div className="bg-brand-black text-brand-white p-6 md:p-8">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold">Drone-as-a-Service</h3>
            </div>
            <div className="divide-y divide-border-light">
              {services.map((item, i) => (
                <div 
                  key={i} 
                  className="p-6 md:p-8 flex items-center justify-between group/row hover:bg-brand-black hover:text-brand-white transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <ArrowRight size={16} className="group-hover/row:translate-x-2 transition-transform duration-300" />
                    <span className="text-base sm:text-lg font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
