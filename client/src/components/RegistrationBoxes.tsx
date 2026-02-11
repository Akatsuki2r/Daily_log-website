import "../index.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { useState } from "react";
import API from "../API";
import { Navbar4 } from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function SignUpBox() {
  const [NameValue, setNameValue] = useState("");
  const [EmailValue, setEmailValue] = useState("");
  const [PasswordValue, setPasswordValue] = useState("");

  const UserCreate = {
    username: NameValue,
    email: EmailValue,
    password: PasswordValue,
  };

  const navigate = useNavigate();

  const submitSignUpRequest = async () => {
    try {
      const res = await API.post("/v1/authentication/SignUp", UserCreate);
      localStorage.setItem("access_token", res.data.access_token); 

      navigate("/Home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-105 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-8 text-white shadow-xl">
        <h1 className="text-2xl font-semibold mb-1 text-[#0da6f2]">
          Create Account
        </h1>
        <p className="text-sm text-white/70 mb-6">Start your journey.</p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={NameValue}
            placeholder="Username"
            onChange={(e) => setNameValue(e.target.value)}
            className="h-10 rounded-md bg-transparent border border-white/20 px-3 text-sm placeholder-white/50 focus:outline-none focus:border-white/40"
          />
          <input
            type="email"
            value={EmailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Email"
            className="h-10 rounded-md bg-transparent border border-white/20 px-3 text-sm placeholder-white/50 focus:outline-none focus:border-white/40"
          />
          <input
            value={PasswordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
            placeholder="Password"
            className="h-10 rounded-md bg-transparent border border-white/20 px-3 text-sm placeholder-white/50 focus:outline-none focus:border-white/40"
          />

          <button
            className="mt-2 h-10 rounded-md border border-white/30 hover:bg-white/10 transition hover:text-[#0da6f2] dm-sans font-bold "
            onClick={submitSignUpRequest}
          >
            Create Player
          </button>
        </div>

        <div className="my-6 flex items-center gap-3 text-white/40 text-xs">
          <span className="flex-1 h-px bg-white/20" />
          OR
          <span className="flex-1 h-px bg-white/20" />
        </div>
        <div className="flex flex-row gap-3">
          <button className="w-full h-10 rounded-md border border-white/20 flex items-center justify-center gap-2 hover:bg-white/10 transition">
            <FcGoogle className="text-lg" />
          </button>
          <button className="w-full h-10 rounded-md border border-white/20 flex items-center justify-center gap-2 hover:bg-white/10 transition">
            <FaApple className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function LoginBox() {
  const [UsernameValue, setEmailValue] = useState("");
  const [PasswordValue, setPasswordValue] = useState("");

  const UserAuthorize = {
    username: UsernameValue,
    password: PasswordValue,
  };

  const navigate = useNavigate();

  const submitLoginRequest = async () => {
    try {
      const res = await API.post("v1/authentication/Login", UserAuthorize);
      localStorage.setItem("access_token", res.data.access_token); 
      navigate("/Home");
    } catch (err) {
      alert(`Failed ${err}`);
      console.error(`ERROR: ${err}`);
    }
  };

  return (
    <div className="bg-black flex flex-col min-h-screen  ">
      <Navbar4 />
      <div className="flex items-center justify-center bg-black ">
        <div className="w-105 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-8 text-white shadow-xl">
          <h1 className="text-2xl font-semibold mb-1 text-[#0da6f2]">
            Welcomeback Player
          </h1>
          <p className="text-sm text-white/70 mb-6">Continue your journey.</p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={UsernameValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Username"
              className="h-10 rounded-md bg-transparent border border-white/20 px-3 text-sm placeholder-white/50 focus:outline-none focus:border-white/40"
            />
            <input
              value={PasswordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              type="password"
              placeholder="Password"
              className="h-10 rounded-md bg-transparent border border-white/20 px-3 text-sm placeholder-white/50 focus:outline-none focus:border-white/40"
            />

            <button
              className="mt-2 h-10 rounded-md border border-white/30 hover:bg-white/10 transition hover:text-[#0da6f2] dm-sans font-bold "
              onClick={submitLoginRequest}
            >
              Login
            </button>
          </div>

          <div className="my-6 flex items-center gap-3 text-white/40 text-xs">
            <span className="flex-1 h-px bg-white/20" />
            OR
            <span className="flex-1 h-px bg-white/20" />
          </div>
          <div className="flex flex-row gap-3">
            <button className="w-full h-10 rounded-md border border-white/20 flex items-center justify-center gap-2 hover:bg-white/10 transition">
              <FcGoogle className="text-lg" />
            </button>
            <button className="w-full h-10 rounded-md border border-white/20 flex items-center justify-center gap-2 hover:bg-white/10 transition">
              <FaApple className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
