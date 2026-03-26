import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.1)] bg-[#0d1117]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">PI</span>
            <span className="text-accent ml-1">SYSTEM</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[rgba(255,255,255,0.7)]">
            <Link to="/Nodes" className="hover:text-accent transition-colors">Nodes</Link>
            <Link to="/Sessions" className="hover:text-accent transition-colors">Sessions</Link>
            <Link to="/Decision_Log" className="hover:text-accent transition-colors">Decision Log</Link>
            <Link to="/Dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Navbar2() {
  return (
    <nav className="border-b border-[rgba(255,255,255,0.1)] bg-[#080c0e]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">PI</span>
          <span className="text-[#0da6f2] ml-1">SYSTEM</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/Login"
            className="px-4 py-2 text-sm font-medium text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            to="/SignUpPage"
            className="px-4 py-2 bg-[#0da6f2] text-white text-sm font-semibold rounded-md hover:bg-[#33b5f5] transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Navbar3() {
  return (
    <nav className="border-b border-[rgba(255,255,255,0.1)] bg-[#080c0e]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-white">PI</span>
          <span className="text-accent ml-1">SYSTEM</span>
        </Link>
      </div>
    </nav>
  );
}

export function Navbar4() {
  return (
    <nav className="border-b border-[rgba(255,255,255,0.1)] bg-[#080c0e]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <Link
          to="/"
          className="p-2 rounded-full border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          <FaArrowLeft className="w-4 h-4 text-[rgba(255,255,255,0.7)]" />
        </Link>
      </div>
    </nav>
  );
}