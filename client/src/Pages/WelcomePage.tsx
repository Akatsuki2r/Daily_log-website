import { WelcomeMain } from "../components/Main";
import { Navbar2 } from "../components/Navbar";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

export default function Home() {
  return (
    <div className="overflow-y-hidden">
      <Navbar2 />
      <hr className="border-gray-700 border" />
      <WelcomeMain />
      <Section1 />
      <Section2 />
    </div>
  );
}
