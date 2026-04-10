import { WelcomeMain } from "../components/Main";
import { Navbar2 } from "../components/Navbar";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#080c0e]">
      <Navbar2 />
      <WelcomeMain />
      <Section1 />
      <Section2 />
    </div>
  );
}