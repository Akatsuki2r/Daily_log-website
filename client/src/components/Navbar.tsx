import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../index.css";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { RiSettings2Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="p-3 flex justify-between items-center nav-glass text-white content-center sticky top-0 z-0">
      <h1 className="logo">
        <span className="mx-2">PI</span>
        <span className="color  ">SYSTEM</span>
      </h1>
      <Router>
        <div className="flex flex-row justify-between gap-15 m content-center">
          <Link to="/Nodes">Nodes</Link>
          <Link to="/Sessions">Sessions</Link>
          <Link to="/Decision_Log">Decision_Log</Link>
          <Link to="/Dashboard">Dashboard</Link>
        </div>
        <div className="flex flex-row justify-between gap-4.5 py-1 content-center mx-2.5">
          <IoIosSearch />
          <IoIosNotifications />
          <RiSettings2Fill />
          <span>#</span>
        </div>

        <Routes>
          <Route path="/Nodes" element={""} />
          <Route path="/Sessions" element={""} />
          <Route path="/Decision_Log" element={""} />
          <Route path="/Dashboard" element={""} />
        </Routes>
      </Router>
    </nav>
  );
}

export function Navbar2() {
  return (
    <>
      <nav className="p-3 flex justify-between items-center  text-white content-center dm-sans mx-50">
        <div className="inline-flex items-center gap-16 ">
          <h1 className="text-2xl font-bold">
            <span className="mx-2 tracking-tighter">PI</span>
            <span className="color  ">SYSTEM</span>
          </h1>

          <div className="muted inline-flex gap-16 flex-row-reverse text-[14px] font-bold dm-sans">
            
            <span>IGRIS</span>
            <span>DOCUMENTATION</span>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-3 px-1 py-1 content-center">
          <button className="border bg-[#0da6f2] hover:brightness-105 border-none p-0.5 px-2 text-[14px] font-bold rounded-xs">
            SIGN UP
          </button>
          <button className="border  bg-[#0da6f2] hover:brightness-95 border-none p-0.5 px-2 text-[14px] font-bold rounded-xs">
            LOGIN
          </button>
        </div>
      </nav>
    </>
  );
}
