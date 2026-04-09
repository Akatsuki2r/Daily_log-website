import "../index.css";
import API from "../API";
import { useEffect, useState } from "react";

// ============================================
// SYSTEM INTERFACE COMPONENTS
// ============================================

// Left Stats Panel - Character stats like Solo Leveling
function StatsPanel({ username }: { username: string }) {
  const [stats] = useState({
    str: 10,
    dex: 10,
    vit: 10,
    int: 10,
    luk: 10,
    level: 1,
    xp: 0,
    xpToNext: 100,
  });

  return (
    <div className="stats-panel rounded-lg p-4 character-panel">
      {/* Header */}
      <div className="system-header pb-3 mb-4">
        <p className="system-title text-center">Status</p>
      </div>

      {/* User Info */}
      <div className="text-center mb-6">
        <p className="text-white text-lg font-bold tracking-wide">{username}</p>
        <p className="text-[#ffd700] text-xs tracking-widest uppercase mt-1">Rank: E</p>
      </div>

      {/* Level Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#0da6f2] text-xs uppercase tracking-wider">Level</span>
          <span className="text-white font-mono text-sm">{stats.level}</span>
        </div>
        <div className="level-progress h-2 mb-2">
          <div
            className="level-progress-fill"
            style={{ width: `${(stats.xp / stats.xpToNext) * 100}%` }}
          />
        </div>
        <p className="text-[rgba(255,255,255,0.4)] text-[10px] text-right font-mono">
          {stats.xp} / {stats.xpToNext} XP
        </p>
      </div>

      {/* Stats Grid */}
      <div className="space-y-1">
        {[
          { label: "STR", value: stats.str },
          { label: "DEX", value: stats.dex },
          { label: "VIT", value: stats.vit },
          { label: "INT", value: stats.int },
          { label: "LUK", value: stats.luk },
        ].map((stat) => (
          <div key={stat.label} className="stat-row">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Health/Mana Bars */}
      <div className="mt-6 space-y-3">
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-red-400 uppercase">HP</span>
            <span className="text-white/60">100/100</span>
          </div>
          <div className="h-1 bg-red-900/30 rounded overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-red-600 to-red-400" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-blue-400 uppercase">MP</span>
            <span className="text-white/60">50/50</span>
          </div>
          <div className="h-1 bg-blue-900/30 rounded overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-blue-600 to-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Right Menu Panel
function MenuPanel() {
  const [activeMenu, setActiveMenu] = useState("quests");

  const menuItems = [
    { id: "system", label: "System" },
    { id: "inventory", label: "Inventory" },
    { id: "skill", label: "Skill" },
    { id: "quests", label: "Quest" },
    { id: "status", label: "Status" },
    { id: "guild", label: "Guild" },
    { id: "market", label: "Market" },
    { id: "mail", label: "Mail" },
  ];

  return (
    <div className="menu-panel rounded-lg overflow-hidden h-fit">
      <div className="system-header p-3">
        <p className="system-title text-center">Menu</p>
      </div>
      <div>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
            onClick={() => setActiveMenu(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// Notification Panel - Bottom
function NotificationPanel() {
  const notifications = [
    "[SYSTEM] Welcome to PI SYSTEM",
    "[QUEST] Complete your daily tasks to earn XP",
    "[SYSTEM] Focus mode available - start a session",
  ];

  return (
    <div className="notification-panel rounded-lg p-3 mt-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 bg-[#ffd700] rounded-full animate-pulse" />
        <span className="text-[#ffd700] text-[10px] uppercase tracking-widest">Notifications</span>
      </div>
      <div className="space-y-1">
        {notifications.map((notif, i) => (
          <p key={i} className="notification-text text-xs">
            {notif}
          </p>
        ))}
      </div>
    </div>
  );
}

// Quest Card Component
interface Quest {
  id: number;
  title: string;
  status: "active" | "pending" | "completed";
  xp: number;
}

function QuestCard({ quest }: { quest: Quest }) {
  return (
    <div className="quest-card rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <span className="quest-title">{quest.title}</span>
        <span className={`quest-status ${quest.status}`}>{quest.status}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[rgba(255,255,255,0.4)] text-xs">Reward</span>
        <span className="text-[#0da6f2] text-xs font-mono">+{quest.xp} XP</span>
      </div>
    </div>
  );
}

// Main Content Area - Quests
function ContentPanel() {
  const [quests] = useState<Quest[]>([
    { id: 1, title: "Complete morning deep work session", status: "active", xp: 50 },
    { id: 2, title: "Review and link notes in system", status: "pending", xp: 30 },
    { id: 3, title: "Log today's decisions", status: "pending", xp: 20 },
    { id: 4, title: "Update skill tree progress", status: "completed", xp: 25 },
  ]);

  return (
    <div className="h-full">
      <div className="system-header pb-3 mb-4">
        <p className="system-title">Current Quests</p>
      </div>

      {/* Quest List */}
      <div className="space-y-3">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="glass p-3 rounded-lg text-center">
          <p className="text-[rgba(255,255,255,0.4)] text-[10px] uppercase mb-1">Today</p>
          <p className="text-white text-lg font-mono">3/5</p>
          <p className="text-[rgba(255,255,255,0.4)] text-[10px]">tasks</p>
        </div>
        <div className="glass p-3 rounded-lg text-center">
          <p className="text-[rgba(255,255,255,0.4)] text-[10px] uppercase mb-1">Streak</p>
          <p className="text-[#0da6f2] text-lg font-mono">7</p>
          <p className="text-[rgba(255,255,255,0.4)] text-[10px]">days</p>
        </div>
      </div>
    </div>
  );
}

// Session Timer
function SessionTimer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="glass px-4 py-2 rounded-md text-center">
      <p className="text-[10px] text-[rgba(255,255,255,0.5)] uppercase">Session Time</p>
      <p className="text-xl font-mono text-white">{formatTime(time)}</p>
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

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
    <main className="system-interface p-4 lg:p-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0da6f2] animate-pulse"></span>
          <span className="text-[#0da6f2] text-xs uppercase tracking-widest">System Access Granted</span>
        </div>
        <div className="flex items-center gap-4">
          <SessionTimer />
        </div>
      </div>

      {/* System Interface Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Panel - Stats */}
        <div className="col-span-12 md:col-span-3 lg:col-span-3">
          <StatsPanel username={username || "Hunter"} />
        </div>

        {/* Center Panel - Content */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <div className="glass rounded-lg p-4 h-full">
            <ContentPanel />
          </div>
        </div>

        {/* Right Panel - Menu */}
        <div className="col-span-12 md:col-span-3 lg:col-span-3">
          <MenuPanel />
          <NotificationPanel />
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
      <p className="text-[rgba(255,255,255,0.85)] max-w-lg text-lg mb-8  capitalize">
        The Personal Intelligence System is designed to replace motivation with structured discipline.
      </p>
    </main>
  );
}