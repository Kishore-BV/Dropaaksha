import { motion } from 'motion/react';
import { useState, FormEvent, ChangeEvent } from 'react';

const WEBHOOK_URL = 'https://n8n.kishoren8n.in/webhook/DropakshaInquiryForm';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Dropaksha Website Contact Form',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 bg-brand-black text-brand-white text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[64px] lg:text-[88px] font-display font-bold leading-[0.95] tracking-tighter mb-8"
          >
            Join Us in Building <br /> India's Drone Future
          </motion.h2>
          <p className="text-lg md:text-xl text-text-dim mb-12 max-w-2xl mx-auto leading-relaxed">
            Seed Funding Round Open — seeking strategic partners and early investors to accelerate R&D, first batch manufacturing, and DaaS market entry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
            <a href="#contact-form" className="bg-brand-white text-brand-black px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white border border-brand-white transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-border-dark mb-24" />

        <div className="grid lg:grid-cols-2 gap-16 text-left max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-[0.4em] font-bold mb-6 text-text-muted">Registered Office</h3>
              <p className="text-xl leading-relaxed max-w-md">
                1/10A, Poonganagar, Papanasam, Thanjavur – 614210, Tamil Nadu
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-text-dim"></p>
              <p className="text-sm text-text-dim"></p>
              <p className="text-sm text-brand-white font-mono">dropaksha.in</p>
            </div>
          </div>

          <div className="bg-surface-dark border border-border-dark p-8 md:p-12" id="contact-form">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-brand-black border border-border-dark px-4 py-4 focus:outline-none focus:border-brand-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-muted ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-brand-black border border-border-dark px-4 py-4 focus:outline-none focus:border-brand-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted ml-1">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we collaborate?"
                  className="w-full bg-brand-black border border-border-dark px-4 py-4 focus:outline-none focus:border-brand-white transition-colors resize-none"
                />
              </div>
              <div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-white text-brand-black py-5 text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white border border-brand-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                
                {status === 'success' && (
                  <p className="mt-4 text-green-500 text-sm font-medium animate-pulse">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-red-500 text-sm font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
