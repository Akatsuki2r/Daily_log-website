import { Link } from "react-router-dom";
/* import { IoIosNotifications } from "react-icons/io";
import { RiSettings2Fill } from "react-icons/ri"; */
import "../index.css";

export default function Navbar() {
  return (
    <nav className="p-3 flex justify-center items-center nav-glass text-white content-center sticky  top-0 z-0 pb-10 pt-10">
      <div className="flex flex-row justify-between gap-15 m text-[#20b2fb] content-center w-116">
        <Link to="/Nodes">Nodes</Link>
        <Link to="/Sessions">Sessions</Link>
        <Link to="/Decision_Log">Decision Log</Link>
        <Link to="/Dashboard">Dashboard</Link>
      </div>
    </nav>
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
