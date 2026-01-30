import "../index.css";


export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-background-dark px-6 md:px-20 py-16">
      <div className="mx-auto max-w-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 text-primary mb-6">
              <h2 className="text-white text-lg font-bold tracking-tighter uppercase">
                PIV SYSTEM
              </h2>
            </div>
            <p className="text-[#5a6e78] text-sm max-w-xs leading-relaxed">
              The definitive cognitive operating system for the modern
              intellectual elite. Built for speed, privacy, and insight.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-6">
              System
            </h4>
            <ul className="flex flex-col gap-4 text-xs text-[#9cb0ba]">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Terminal Access
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Neural Mapping
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  System Logs
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  API Keys
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="flex flex-col gap-4 text-xs text-[#9cb0ba]">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy Protocol
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Encryption Terms
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  End User License
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Contact Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-[#5a6e78] tracking-widest uppercase">
            © 2024 PIV_SYSTEM [v4.2.0-STABLE]
          </p>

          
        </div>
      </div>
    </footer>
  );
}
