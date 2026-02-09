import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { RiSettings2Fill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Nodes", path: "/Nodes" },
    { name: "Sessions", path: "/Sessions" },
    { name: "Decision Log", path: "/Decision_Log" },
    { name: "Dashboard", path: "/Dashboard" },
  ];

  return (
    <>
      <Navbar3 />
      {/* 1. Static Control Column (Logo + Menu Button) */}
      <div className="fixed top-0 left-0 h-screen w-20 flex flex-col justify-between   items-center py-6 bg-black/40 backdrop-blur-md border-r border-white/10 z-60">
        {/* Menu Button directly under Logo */}
        <button
          onClick={() => setOpen(!open)}
          className="p-3 text-3xl text-white hover:bg-white/10 rounded-xl transition-all duration-300"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* Vertical Socials/Icons at Bottom */}
        <span className="text-center font-bold text-xl text-gray-400 pb-4">#</span>
      </div>

      {/* 2. Reveal Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500 z-40 
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* 3. Left Reveal Sidebar (Offset by the Control Column) */}
      <aside
        className={`fixed top-0 left-20 h-screen w-64 bg-black/40 backdrop-blur-md   text-white 
        transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-50
        ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <div className="p-8 pt-24 flex flex-col h-full">
          <h2 className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-8">
            Navigation
          </h2>

          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                onClick={() => setOpen(false)}
                to={link.path}
                className="text-lg font-light tracking-wide hover:text-blue-400 hover:translate-x-2 transition-all duration-300 flex items-center gap-4"
              >
                <span className="h-px w-4 bg-white/20"></span>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex gap-6 text-2xl text-gray-500 border-t border-white/10 pt-6">
            <div className="mt-auto flex flex-col gap-6 text-xl text-gray-400 pb-8">
              <RiSettings2Fill className="hover:text-white cursor-pointer" />
              
            </div>
            <IoIosSearch className="hover:text-white cursor-pointer" />
            <IoIosNotifications className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </aside>
    </>
  );
}

export function Navbar2() {
  return (
    <>
      <div>
        <nav className="px-50 p-3 flex justify-between items-center  text-white content-center dm-sans bg-black">
          <div className="inline-flex items-center gap-16 ">
            <h1 className="text-2xl font-bold">
              <span className="mx-2 tracking-tighter text-shadow-[#ffffff]">
                PI
              </span>
              <span className="color  text-shadow-[#0da6f2]">SYSTEM</span>
            </h1>

            <div className="muted inline-flex gap-16 flex-row-reverse text-[14px] font-bold dm-sans">
              <span>IGRIS</span>
              <span>DOCUMENTATION</span>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-3 px-1 py-1 content-center">
            <Link to={"/SignUpPage"}>
              {" "}
              <button className="border bg-[#0da6f2] hover:brightness-105 border-none p-0.5 px-2 text-[14px] font-bold rounded-xs">
                SIGN UP
              </button>
            </Link>
            <Link to={"/Login"}>
              <button className="border  bg-[#0da6f2] hover:brightness-95 border-none p-0.5 px-2 text-[14px] font-bold rounded-xs">
                LOGIN
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export function Navbar3() {
  return (
    <>
      <div>
        <nav className="pl-10 pt-3 pb-2 flex justify-between items-center  text-white content-center dm-sans mx-10">
          <h1 className="text-[28px] font-bold inline-flex">
            <span className="mx-2 tracking-tighter text-shadow-[#ffffff]">
              PI
            </span>
            <div className="drop-shadow-[0_0_100px_rgba(46,231,255,1)]">
              <span className="color ">SYSTEM</span>
            </div>
          </h1>
        </nav>
      </div>
    </>
  );
}

import { FaArrowLeft } from "react-icons/fa";

export function Navbar4() {
  return (
    <div>
      <nav className="p-2 flex justify-between items-center  text-white content-center dm-sans mx-7 mb-45 mt-15 ">
        <Link to={"/"}>
          <button className="border border-white/30 rounded-full p-3 bg-white/0 backdrop-blur-sm shadow-sm transition-all hover:bg-white/10 active:scale-95">
            <FaArrowLeft />
          </button>
        </Link>
      </nav>
    </div>
  );
}
