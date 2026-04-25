import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Plane, Cloud, TrendingUp, Building2, LucideIcon } from 'lucide-react';

interface NavChild {
  label: string;
  href: string;
  download?: boolean;
}

interface NavItem {
  label: string;
  href?: string;
  icon?: LucideIcon;
  subtitle?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Products',
    icon: Plane,
    children: [
      { label: 'Fixed-Wing Survey UAVs', href: '#products' },
      { label: 'Multi-Rotor Agricultural Drones', href: '#products' },
      { label: 'Hybrid VTOL Platforms', href: '#products' },
      { label: 'Custom-built OEM Drones', href: '#products' },
      { label: 'Ground Control Stations & Software', href: '#products' },
    ],
  },
  {
    label: 'Services',
    icon: Cloud,
    subtitle: 'Services (DaaS)',
    children: [
      { label: 'Aerial Surveying & Mapping', href: '#solution' },
      { label: 'Precision Agriculture Monitoring', href: '#solution' },
      { label: 'Infrastructure Inspection', href: '#solution' },
      { label: 'Security & Surveillance', href: '#solution' },
      { label: 'Emergency Response & Logistics', href: '#solution' },
    ],
  },
  { label: 'Market', href: '#market' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Roadmap', href: '#roadmap' },
  {
    label: 'Investors',
    icon: TrendingUp,
    subtitle: 'Seed Round Open • Partner with Us',
    children: [
      { label: 'Seed Funding Round', href: '#contact-form' },
      { label: 'Growth Roadmap', href: '#roadmap' },
    ],
  },
  {
    label: 'Company',
    icon: Building2,
    children: [
      { label: 'About Us', href: '#solution' },
      { label: 'Founding Team', href: '#team' },
      { label: 'Contact Us', href: '#contact-form' },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownRef.current) window.clearTimeout(dropdownRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  // Close dropdown on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black border-b border-border-dark py-4' : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-bold tracking-tighter text-brand-white flex items-center uppercase">
          DROPAKSHA
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.children ? (
                <button
                  className={`px-4 text-[14px] uppercase tracking-[0.08em] font-medium transition-colors ${
                    activeDropdown === item.label ? 'text-brand-white' : 'text-text-dim hover:text-brand-white'
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  href={item.href}
                  className="px-4 text-[14px] uppercase tracking-[0.08em] font-medium text-text-dim hover:text-brand-white transition-colors"
                >
                  {item.label}
                </a>
              )}

              <AnimatePresence>
                {activeDropdown === item.label && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className={`absolute top-full left-0 bg-brand-white border border-[#E0E0E0] rounded-lg shadow-xl overflow-hidden min-w-[280px] ${
                      item.label === 'Investors' ? 'min-w-[320px]' : ''
                    }`}
                  >
                    {/* Invisible Bridge to prevent hover gap */}
                    <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                    
                    {/* Header Banner */}
                    <div className="bg-brand-black p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {item.icon && <item.icon className="text-brand-white" size={24} strokeWidth={1.5} />}
                        <div className="flex flex-col">
                          <span className="text-brand-white font-display font-bold text-base">{item.subtitle || item.label}</span>
                          {item.subtitle && <span className="text-text-dim text-[13px] font-sans font-normal lowercase">{item.subtitle.includes('•') ? item.subtitle : ''}</span>}
                        </div>
                      </div>
                      <ArrowRight className="text-brand-white" size={18} />
                    </div>

                    {/* Sub-items */}
                    <div className="py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          download={child.download}
                          className="flex items-center px-6 py-3 text-brand-black font-sans text-[15px] hover:bg-[#F5F5F5] transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="#contact-form"
            className="hidden lg:block bg-brand-white text-brand-black px-6 py-2 text-[14px] uppercase tracking-[0.08em] font-bold hover:bg-brand-black hover:text-brand-white border border-brand-white transition-all duration-300"
          >
            Invest Now
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-brand-white p-2 ml-4"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileDrawer navItems={navItems} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileDrawer({ navItems, onClose }: { navItems: NavItem[], onClose: () => void }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-0 bg-brand-black z-[100] flex flex-col p-8 overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-16">
        <span className="text-xl font-display font-bold text-brand-white tracking-tighter uppercase">DROPAKSHA</span>
        <button onClick={onClose} className="text-brand-white p-2">
          <X size={32} />
        </button>
      </div>
      
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <div key={item.label} className="flex flex-col border-b border-border-dark pb-2">
            {item.children ? (
              <>
                <button
                  onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full h-[48px] text-lg font-display font-bold text-brand-white"
                >
                  <span className="uppercase tracking-widest">{item.label}</span>
                  <motion.span animate={{ rotate: expandedItem === item.label ? 90 : 0 }}>
                    <ArrowRight size={20} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {expandedItem === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col space-y-3 pl-6 mt-2 mb-4"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="text-text-dim text-base py-2 hover:text-brand-white transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-center h-[48px] text-lg font-display font-bold text-brand-white uppercase tracking-widest"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}

        <a
          href="#contact-form"
          onClick={onClose}
          className="mt-8 inline-block border border-brand-white py-4 text-center text-xl font-display font-bold text-brand-white hover:bg-brand-white hover:text-brand-black transition-all"
        >
          INVEST NOW
        </a>
      </nav>

      <div className="mt-12 pt-8 border-t border-border-dark space-y-4">
        <p className="text-text-muted text-xs uppercase tracking-widest leading-relaxed">
          DROPAKSHA PRIVATE LIMITED<br />
          THANJAVUR, TAMIL NADU
        </p>
      </div>
    </motion.div>
  );
}
