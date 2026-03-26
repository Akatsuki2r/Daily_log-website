import "../index.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { useState } from "react";
import API from "../API";
import { Navbar4 } from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function SignUpBox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await API.post("/v1/authentication/SignUp", {
        username: name,
        email,
        password,
      });
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/Home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#080c0e] flex items-center justify-center p-6">
      <div className="w-full max-w-md glass rounded-xl p-8">
        <h1 className="text-2xl font-bold text-white mb-1">
          Create Account
        </h1>
        <p className="text-[rgba(255,255,255,0.5)] text-sm mb-6">Start your journey.</p>

        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            className="w-full h-12 rounded-lg px-4 text-sm"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-12 rounded-lg px-4 text-sm"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full h-12 rounded-lg px-4 text-sm"
          />

          <button
            onClick={handleSignUp}
            className="w-full h-12 bg-[#0da6f2] text-white rounded-lg font-semibold hover:bg-[#33b5f5] transition-colors"
          >
            Create Account
          </button>
        </div>

        <div className="my-6 flex items-center gap-3 text-[rgba(255,255,255,0.3)] text-xs">
          <span className="flex-1 h-px bg-[rgba(255,255,255,0.1)]"></span>
          OR
          <span className="flex-1 h-px bg-[rgba(255,255,255,0.1)]"></span>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 h-12 btn-secondary rounded-lg flex items-center justify-center gap-2">
            <FcGoogle className="text-lg" />
          </button>
          <button className="flex-1 h-12 btn-secondary rounded-lg flex items-center justify-center gap-2">
            <FaApple className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("v1/authentication/Login", { username, password });
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/Home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#080c0e] flex flex-col">
      <Navbar4 />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md glass rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-1">
            Welcome Back
          </h1>
          <p className="text-[rgba(255,255,255,0.5)] text-sm mb-6">Continue your journey.</p>

          <div className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full h-12 rounded-lg px-4 text-sm"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-12 rounded-lg px-4 text-sm"
            />

            <button
              onClick={handleLogin}
              className="w-full h-12 bg-[#0da6f2] text-white rounded-lg font-semibold hover:bg-[#33b5f5] transition-colors"
            >
              Login
            </button>
          </div>

          <div className="my-6 flex items-center gap-3 text-[rgba(255,255,255,0.3)] text-xs">
            <span className="flex-1 h-px bg-[rgba(255,255,255,0.1)]"></span>
            OR
            <span className="flex-1 h-px bg-[rgba(255,255,255,0.1)]"></span>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 h-12 btn-secondary rounded-lg flex items-center justify-center gap-2">
              <FcGoogle className="text-lg" />
            </button>
            <button className="flex-1 h-12 btn-secondary rounded-lg flex items-center justify-center gap-2">
              <FaApple className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}