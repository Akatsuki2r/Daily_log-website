import "../index.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Section2() {
  return (
    <section className="bg-[#080c0e] py-24 px-6 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to lock in?
        </h1>
        <p className="text-[rgba(255,255,255,0.85)] mb-8">
          Initialize your Personal Intelligence System today. Join thousands of deep thinkers building their best version they can be.
        </p>
        <Link
          to="/SignUpPage"
          className="inline-block px-8 py-3 bg-[#0da6f2]  rounded-md hover:bg-[#33b5f5] transition-colors"
        >
          <span className=" text-white font-semibold">Start Now</span>
        </Link>
      </div>
      <Footer />
    </section>
  );
}