import "../index.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)] bg-[#080c0e] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-lg font-bold tracking-tighter uppercase text-white mb-6 block">
              PI SYSTEM
            </Link>
            <p className="text-[rgba(255,255,255,0.5)] text-sm max-w-xs leading-relaxed">
              The definitive cognitive operating system for the modern intellectual elite.
            </p>
          </div>
          <div>
            <h4 className="text-[rgba(255,255,255,0.4)] text-[10px] font-bold uppercase tracking-widest mb-6">
              System
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[rgba(255,255,255,0.6)]">
              <li><a href="#" className="hover:text-accent transition-colors">Neural Mapping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">System Logs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">API Access</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[rgba(255,255,255,0.4)] text-[10px] font-bold uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[rgba(255,255,255,0.6)]">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[rgba(255,255,255,0.4)] tracking-widest uppercase">
            © 2026 PI SYSTEM
          </p>
        </div>
      </div>
    </footer>
  );
}