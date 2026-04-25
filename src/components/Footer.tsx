export default function Footer() {
  const currentYear = 2025;
  
  return (
    <footer className="bg-brand-black text-brand-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div className="col-span-1">
            <div className="text-3xl font-display font-bold tracking-tighter mb-6">DROPAKSHA</div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Democratising the Skies for India's Future. Professional drone hardware and intellegent services built for scale.
            </p>
          </div>
          
          <div className="col-span-1 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim mb-6">Navigation</h4>
              <nav className="flex flex-col space-y-3">
                <a href="#home" className="text-sm hover:text-text-dim transition-colors">Home</a>
                <a href="#products" className="text-sm hover:text-text-dim transition-colors">Products</a>
                <a href="#solution" className="text-sm hover:text-text-dim transition-colors">Services</a>
                <a href="#team" className="text-sm hover:text-text-dim transition-colors">Team</a>
                <a href="#contact" className="text-sm hover:text-text-dim transition-colors">Contact</a>
              </nav>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim mb-6">Social</h4>
              <nav className="flex flex-col space-y-3">
                <span className="text-sm cursor-not-allowed opacity-50">LinkedIn</span>
                <span className="text-sm cursor-not-allowed opacity-50">Twitter</span>
                <span className="text-sm cursor-not-allowed opacity-50">Facebook</span>
              </nav>
            </div>
          </div>

          <div className="col-span-1 border-l border-border-dark pl-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim mb-6">Dropaksha Pvt Ltd</h4>
            <p className="text-xs text-text-muted leading-relaxed uppercase tracking-wider">
               © {currentYear} ALL RIGHTS RESERVED.
            </p>
            <div className="h-20 w-[1px] bg-border-dark my-8" />
            <p className="text-[10px] text-text-muted uppercase tracking-widest leading-loose">
              1/10A, POONGANAGAR,<br />
              PAPANASAM, THANJAVUR,<br />
              TAMIL NADU – 614210, INDIA
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-text-muted">
           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
             <span>CIN: U26515TN2025PTC182788</span>
             <span className="hidden md:inline">•</span>
             <span>GST: 33AALCD8978Q1ZJ</span>
           </div>
           <div>
             MADE WITH PRIDE IN TAMIL NADU, INDIA
           </div>
        </div>
      </div>
    </footer>
  );
}
