import "../index.css";
import Footer from "./Footer";

export default function Section2() {
  return (
    <>
      <hr className=" border-gray-600"></hr>
      <section className=" px-6 py-32 text-center border-t border-border-dark h-[90vh] overflow-hidden bg-[#060608]">
        <div className="flex flex-col items-center mb-20">
          <h1 className="text-white text-5xl md:text-[4rem] font-black uppercase tracking-tighter  mb-6 space-grotesk">
            READY TO LOCK IN?
          </h1>
          <p className="text-gray-500 w-3xl mb-20">
            Initialize your Personal Intelligence System today. Join the network
            of 50k+ deep thinkers building their Lock in Arc of 2026.<br></br>
            <p className="font-bold text-shadow-cyan-100">
              Be the best version of yourself .
            </p>
          </p>

          <button className="bg-[#0da6f2] text-white w-40 h-12 dm-sans text-[15px] uppercase font-bold">
            Start Now
          </button>
        </div>
        <hr className="border-gray-600 "></hr>
        <Footer />
      </section>
    </>
  );
}
