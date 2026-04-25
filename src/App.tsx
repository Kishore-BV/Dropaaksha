/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Products from './components/Products';
import BusinessModel from './components/BusinessModel';
import Market from './components/Market';
import WhyDropaksha from './components/WhyDropaksha';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-white z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <section id="home"><Hero /></section>
        <section id="problem"><Problem /></section>
        <section id="solution"><Solution /></section>
        <section id="products"><Products /></section>
        <section id="business"><BusinessModel /></section>
        <section id="market"><Market /></section>
        <section id="why-us"><WhyDropaksha /></section>
        <section id="roadmap"><Roadmap /></section>
        <section id="team"><Team /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 w-12 h-12 bg-brand-white text-brand-black rounded-full flex items-center justify-center z-40 border border-brand-black hover:bg-brand-black hover:text-brand-white transition-colors duration-300 shadow-xl"
    >
      <span className="text-xl">↑</span>
    </motion.button>
  );
}
