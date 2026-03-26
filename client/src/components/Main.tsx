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

  return (
    <main className="p-6 max-w-7xl mx-auto">
      {/* Header Stats */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-accent text-xs uppercase tracking-widest">System Access Granted</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-[rgba(255,255,255,0.5)]">USER_ID</p>
            <h1 className="text-2xl font-bold text-white">{username || "Loading..."}</h1>
          </div>
          <div className="flex gap-3">
            <div className="glass px-4 py-2 rounded-md">
              <p className="text-[10px] text-[rgba(255,255,255,0.5)] uppercase">Session</p>
              <p className="text-xl font-mono text-white">00:00:00</p>
            </div>
            <div className="glass px-4 py-2 rounded-md">
              <p className="text-[10px] text-[rgba(255,255,255,0.5)] uppercase">Streak</p>
              <p className="text-xl font-mono text-accent">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Tasks */}
        <div className="glass p-6 rounded-lg">
          <h2 className="text-[rgba(255,255,255,0.4)] text-xs uppercase tracking-widest font-bold mb-6">
            Current Tasks
          </h2>
          <div className="space-y-4">
            {[
              { status: "active", color: "bg-accent" },
              { status: "pending", color: "bg-[rgba(255,255,255,0.3)]" },
              { status: "overdue", color: "bg-red-500" },
            ].map((task, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-[rgba(255,255,255,0.05)] last:border-0">
                <div className={`w-2.5 h-2.5 rounded-full border-2 ${task.color.replace('bg-', 'border-')} mt-1.5`} />
                <div>
                  <p className="text-white font-medium">Task {i + 1}</p>
                  <p className="text-xs text-[rgba(255,255,255,0.5)] uppercase">{task.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Log */}
        <div className="glass p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            <h2 className="text-accent text-xs uppercase tracking-widest font-bold">
              System Message Log
            </h2>
          </div>
          <div className="space-y-3 font-mono text-sm custom-scrollbar max-h-48 overflow-y-auto">
            <div className="flex gap-3">
              <span className="text-[rgba(255,255,255,0.2)] text-xs">[18:32]</span>
              <p className="text-red-400">Alert: Discipline degrading</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[rgba(255,255,255,0.2)] text-xs">[18:35]</span>
              <p className="text-accent">System: Analyzing cognitive output...</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.05)] flex items-center gap-2">
            <span className="text-accent text-sm">&gt;</span>
            <input
              type="text"
              placeholder="Enter command..."
              className="flex-1 bg-transparent border-none outline-none text-white/80 text-sm placeholder:text-white/10 uppercase"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export function WelcomeMain() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 bg-[#080c0e]">
      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 uppercase">
        Upgrade Your
        <br />
        <span className="text-accent uppercase">Thinking</span>
      </h1>
      <p className="text-[rgba(255,255,255,0.6)] max-w-lg text-lg mb-8  capitalize">
        The Personal Intelligence System is designed to replace motivation with structured discipline.
      </p>
    </main>
  );
}