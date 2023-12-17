import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-xl p-3 mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="text-white bg-slate-700 uppercase hover:opacity-80 disabled:opacity-60 p-3 rounded-lg">
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Already Have an account</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
