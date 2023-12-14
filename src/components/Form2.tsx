"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

const Form2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    console.log("Logging in with:", email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-slate-100 p-10 rounded-lg w-[450px] max-w-full">
      <h4 className="font-semibold text-3xl">Sign in</h4>
      <p className="text-sm">Enter your email & password to sign in</p>
      <form className="mt-10">
        <label className="block mb-4">
          <span className="text-sm">Email Address</span>
          <input
            className="mt-1 block w-full p-2 rounded bg-transparent border border-slate-300"
            type="email"
            value={email}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-sm">Password</span>
          <div className="relative">
            <input
              className="mt-1 block w-full p-2 rounded bg-transparent border border-slate-300"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 py-1.5 rounded-md"
              onClick={togglePasswordVisibility}
            >
              <i
                className={`fi fi-rr-${showPassword ? "eye" : "eye-crossed"}`}
              />
            </button>
          </div>
        </label>
        <div className="flex items-center justify-between w-full my-5">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-sm">Remember password</span>
          </label>
          <Link to={"/"} className="text-sm text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
        <button
          className="bg-blue-500 w-full text-white px-4 py-[6px] rounded-md hover:bg-blue-600 duration-300"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      <div className="flex items-center w-full my-5">
        <div className="w-full">
          <strong>Or Sign in with</strong>
        </div>
        <div className="bg-secondary-foreground h-[1px] w-full" />
      </div>
      <button
        className="bg-blue-500 w-full flex items-center justify-center gap-2 text-white px-4 py-1 rounded-md hover:bg-blue-600 duration-300"
        type="button"
      >
        <i className="fi fi-brands-github pt-1" />
        Github
      </button>
      <div className="flex items-center justify-center mt-5">
        <p>
          {"Don't"} have account?
          <Link
            to={"/register"}
            className="text-sm text-primary hover:underline ml-3"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Form2;
