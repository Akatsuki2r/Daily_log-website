import { WelcomeMain } from "../components/Main";
import { Navbar2 } from "../components/Navbar";



export default function Home() {
  return (
    <div>
      <Navbar2 />
      <hr className="border-gray-700" />
      <WelcomeMain />
    </div>
  );
}
