import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import DarkVeil from './DarkVeil';

export default function Hero() {
  const line1 = "Democratising";
  const line2 = "the Skies for";
  const line3 = "India's Future";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section style={{ position: 'relative', overflow: 'hidden', width: '100%', minHeight: '100vh', background: '#000' }}>
      
      {/* DarkVeil Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.04}
          scanlineIntensity={0}
          speed={0.4}
          scanlineFrequency={0}
          warpAmount={0.3}
          resolutionScale={1}
        />
      </div>

      {/* Dark overlay so text stays readable */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.75) 100%)',
        zIndex: 1
      }} />

      {/* Hero content — tag, H1, subheading, buttons, meta */}
      <div style={{ position: 'relative', zIndex: 2 }} className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-12 flex flex-col items-start text-left"
          >
            <motion.p 
              variants={item}
              className="text-xs lg:text-sm uppercase tracking-[0.4em] text-text-dim mb-8"
            >
              India’s drone revolution is just taking off.
            </motion.p>
            
            <h1 className="text-[44px] sm:text-[60px] lg:text-[100px] font-display font-bold leading-[0.95] tracking-tighter text-brand-white mb-8">
              <motion.span variants={item} className="block">{line1}</motion.span>
              <motion.span variants={item} className="block">{line2}</motion.span>
              <motion.span variants={item} className="block">{line3}</motion.span>
            </h1>

            <motion.p 
              variants={item}
              className="text-lg lg:text-xl text-text-dim max-w-[640px] leading-relaxed mb-12"
            >
              Dropaksha delivers indigenous drone hardware and intelligent Drone-as-a-Service — making aerial intelligence accessible across agriculture, infrastructure, and defence.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#contact-form" className="bg-brand-white text-brand-black px-10 py-5 text-sm text-center uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white border border-brand-white transition-all duration-300">
                Contact Us
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
