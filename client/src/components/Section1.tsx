import "../index.css";
import { Link } from "react-router-dom";

const features = [
  { title: "Neural Linking", desc: "Discover connections between ideas" },
  { title: "The System", desc: "An assistant to guide your journey" },
  { title: "Habit Maker", desc: "Build habits, break vices" },
  { title: "The Roadmap", desc: "Goals and milestones tailored to you" },
  { title: "Focus Mode", desc: "Transform sessions into output" },
  { title: "Player Stats", desc: "Make progress visible" },
  { title: "Skill Trees", desc: "Grow domains like branches" },
  { title: "Discipline Engine", desc: "The law of the System" },
];

export default function Section1() {
  return (
    <section className="bg-[#080c0e] py-24 px-6 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent"></span>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Core Modules</span>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">System Architecture</h1>
          <p className="text-[rgba(255,255,255,0.85)] max-w-xl mx-auto">
            P.I.S is designed to bring out the best in you. Track progress and enforce discipline through engaging features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <Link
              key={i}
              to=""
              className="group p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-10 h-10 mb-4 rounded-md bg-accent/10 flex items-center justify-center text-accent font-bold text-lg group-hover:bg-accent group-hover:text-white transition-colors">
                {i + 1}
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-[rgba(255,255,255,0.5)] text-sm">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}