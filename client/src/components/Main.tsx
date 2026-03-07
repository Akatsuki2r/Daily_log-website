import "../index.css";
import API from "../API";
import { useEffect, useState } from "react";


export default function Main() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const res = await API.get("/v1/user/username");

        setUsername(res.data.username);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsername();
  }, []);

  let hour = 0;
  let minute = 0;
  let second = 0;
  let streak = 0;
  let task_1;
  let task_2;
  let task_3;
  let xp_gain_from_task;
  let status_of_task;
  return (
    <main className="flex flex-col px-40 gap-5">
      <div className="flex items-center justify-center text-white">
        <div className="w-full ">
          <div className="flex flex-row  justify-between">
            <span className="flex flex-row justify-between w-55 items-baseline">
              {" "}
              <span className="text-[14px] text-[#0da6f2]">
                SYSTEM.ACCESS_GRANTED
              </span>
              <hr className="border-[#0da6f2] border[0.9px] w-8 bottom-9 " />
            </span>

            <span className="flex flex-row justify-center items-baseline text-[#0da6f2]  text-[14px]">
              PRIMAL_SYNTHESIS V2.0.1
            </span>
          </div>
          <div className="flex flex-row justify-between w-full">
            {" "}
            <div className="flex flex-row">
              <span className="flex-row text-3xl">
                <span className="text-white">USER_ID: </span>
                <span className="text-white">{username || "ID"}</span>
              </span>
            </div>
            <div className="flex flex-row justify-between  pt-1 gap-2">
              <span className="backdrop-blur-md bg-white/3  text-2xl flex flex-col justify-center items-center border-[0.1px] py-0.5 px-2 border-white/10 uppercase">
                <p className="text-gray-400 text-[10px]">session_hours</p>
                <span className="flex flex-row gap-1">
                  <span>{hour}</span>:<span>{minute}</span>:
                  <span>{second}</span>
                </span>
              </span>
              <span className="text-[27px] border-[0.1px] py-0.5 px-6 flex flex-col justify-center items-center border-white/10 backdrop-blur-md bg-white/3 ">
                <p className="text-gray-400 text-[10px]">STREAK</p>
                {streak}
              </span>
            </div>
          </div>
        </div>
      </div>



      {/* SHARP-EDGED MINIMAL GLASS PROTOCOL TABLE */}
      <div className="w-60 max-w-md bg-white/3 backdrop-blur-md border border-white/10 p-8 shadow-2xl">
        <h2 className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-8">
          Current Tasks
        </h2>

        <div className="flex flex-col">
          {/* Row 1 */}
          <div className="flex items-start gap-2 py-2.5 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full border border-cyan-400 mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="text-white text-lg font-medium leading-none">
                {task_1 || "Task 1"}
              </span>
              <span className="text-cyan-400 text-[9px] font-black uppercase mt-2 tracking-widest">
                {status_of_task || "unknown"} ({xp_gain_from_task || "...xp"})
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-start gap-2 py-2.5 border-b border-white/5 ">
            <div className="w-2.5 h-2.5 rounded-full border border-white/40 mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="text-white text-lg font-medium leading-none">
                {task_2 || "Task 2"}
              </span>
              <span className="text-white/60 text-[9px] font-black uppercase mt-2 tracking-widest">
                {status_of_task || "unknown"} ({xp_gain_from_task || "...xp"})
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-start gap-2 py-2.5">
            <div className="w-2.5 h-2.5 rounded-full border border-red-600 mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="text-white text-lg font-medium leading-none">
                {task_3 || "Task 3"}
              </span>
              <span className="text-red-600 text-[9px] font-black uppercase mt-2 tracking-widest">
                {status_of_task || "unknown"} ({xp_gain_from_task || "...xp"})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-HEIGHT SYSTEM TERMINAL */}
      <div className="flex-1 w-120 min-h-50 bg-black/40 backdrop-blur-md border border-white/5 relative font-mono flex flex-col">
        {/* Left Side Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0da6f2] shadow-[0_0_15px_rgba(13,166,242,0.3)]" />

        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6 shrink-0">
            <div className="w-1.5 h-1.5 bg-[#0da6f2] animate-pulse" />
            <h3 className="text-[#0da6f2] text-[10px] font-black uppercase tracking-[0.3em]">
              System Message Log
            </h3>
          </div>

          {/* Message Area - Scrollable */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-4 custom-scrollbar">
            {/* Entry 1 */}
            <div className="flex gap-4 items-start">
              <span className="text-white/10 text-[10px] mt-1 shrink-0">
                [18:32]
              </span>
              <p className="text-red-500/80 text-[12px] leading-relaxed tracking-tight">
                <span className="font-black mr-2 uppercase">Alert:</span>
                Discipline Stat degrading due to missed protocol.
              </p>
            </div>

            {/* Entry 2 */}
            <div className="flex gap-4 items-start">
              <span className="text-white/10 text-[10px] mt-1 shrink-0">
                [18:35]
              </span>
              <p className="text-[#0da6f2]/80 text-[12px] leading-relaxed tracking-tight">
                <span className="font-black mr-2 uppercase">System:</span>
                Analyzing cognitive output variance...
              </p>
            </div>
          </div>

          {/* Terminal Input Line */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-4 shrink-0">
            <span className="text-[#0da6f2] text-[12px] font-black tracking-widest">
              &gt;
            </span>
            <input
              type="text"
              placeholder="ENTER_COMMAND..."
              className="bg-transparent border-none outline-none text-white/80 text-[12px] w-full placeholder:text-white/10 placeholder:uppercase tracking-[0.2em]"
            />
            <div className="w-2 h-4 bg-[#0da6f2]/60 animate-pulse shrink-0" />
          </div>
        </div>
      </div>
    </main>
  );
}

export function WelcomeMain() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen dm-sans text-center bg-[#080c0e] text-white ">
        <h1 className="text-7xl md:text-8xl font-extrabold text-white leading-[0.95] gap-0">
          UPGRADE YOUR
          <br />
          <span className="text-blue-500">THINKING</span>
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl text-[1.1rem]">
          The Personal Intelligence System is designed to replace motivation
          with structured discipline.
        </p>
      </main>
    </>
  );
}
