import "../index.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function Section1() {
  return (
    <>
      <hr className="border-gray-700 border"></hr>
      <section className="text-white bg-black p-28 w-full flex flex-col items-center h-[90vh]">
        <div className="flex flex-col gap-1.5 w-fit items-center ">
          <div>
            <span className="inline-flex gap-3 flex-row items-center">
              <span className="border-[0.9px] border-[#0da6f2] h-0 w-7 "></span>
              <h3 className="text-[14px] font-bold dm-sans text-[#0da6f2] my-2">
                CORE MODULES
              </h3>
            </span>
            <h1 className="font-bold text-5xl dm-sans">SYSTEM ARCHITECTURE</h1>
            <p className="text-gray-400 text-[1rem] max-w-xl my-1.5">
              P.I.S is designed to bring out the best in it's user.<br></br> It
              won't just track progress but enforce it through its features and
              engaging interface.{" "}
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="flex">
              <Router>
                <div>
                  <Link to="">
                    <span className=" border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex flex-col p-6 my-4.75">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">NEURAL LINKING</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        Discover links between ideas creating a cohesive web.
                      </p>
                    </span>
                  </Link>
                  <Link to="">
                    <span className=" flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">THE SYSTEM</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        An assistant built to guide you through your journey.
                      </p>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to="">
                    <span className=" flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6 my-4.75 mx-5">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">HABIT MAKER</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        Enforces habits that builds and chops vices.
                      </p>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6 mx-5">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">THE ROADMAP</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        A roadmap tailored to your goals and milestones.
                      </p>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to="">
                    <span className="flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6 my-4.75">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">FOCUS MODE</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        Transform sessions into measurable output.
                      </p>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">PLAYER STATS</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        Make progress visible by upgrading your stats.
                      </p>
                    </span>
                  </Link>
                </div>

                <div>
                  <Link to="">
                    <span className="flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6 my-4.75 mx-5">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">SKILL TREES</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        Each domain is a branch grow it out .
                      </p>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6 mx-5">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">DISCIPLINE ENGINE</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        The law of the System; The Rook.
                      </p>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to="">
                    <span className="flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6 my-4.75">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">PROGRESS GRAPHS</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        A roadmap tailored to your
                      </p>
                    </span>
                  </Link>
                  <Link to="">
                    <span className="flex border bg-[#161618] border-gray-800 h-44 w-66 dm-sans flex-col p-6">
                      <span className="h-27 w-27 text-white">#</span>
                      <h1 className="font-bold my-2">THE ROADMAP</h1>
                      <p className="text-gray-400 text-[0.9rem]">
                        Visual truth of progress and other aspects of improvement.
                      </p>
                    </span>
                  </Link>
                </div>
                <Routes>
                  <Route path="" element></Route>
                </Routes>
              </Router>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
