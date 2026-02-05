import { Link } from "react-router-dom";
import "../index.css";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { RiSettings2Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <div>
      <nav className="p-3 flex justify-between items-center nav-glass text-white content-center sticky top-0 z-0">
        <h1 className="logo">
          <span className="mx-2">PI</span>
          <span className="color  ">SYSTEM</span>
        </h1>

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
      </nav>
    </div>
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

            <button className="border  bg-[#0da6f2] hover:brightness-95 border-none p-0.5 px-2 text-[14px] font-bold rounded-xs">
              LOGIN
            </button>
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
        <nav className="p-3 flex justify-between items-center  text-white content-center dm-sans mx-10">
          <h1 className="text-2xl font-bold inline-flex">
            <span className="mx-2 tracking-tighter text-shadow-[#ffffff]">
              PI
            </span>
            <span className="color  text-shadow-[#0da6f2]">SYSTEM</span>
          </h1>
        </nav>
      </div>
    </>
  );
}
