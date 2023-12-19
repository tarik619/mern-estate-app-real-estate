import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex gap-4 flex-col">
        <img
          src={currentUser.avatar}
          className="rounded-full h-24 w-24 object-cover cursor-pointer mt-2 self-center"
          alt=""
        />
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 rounded-lg text-white uppercase p-3 hover:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-600 cursor-pointer ">Delete Account</span>
        <span className="text-red-600 cursor-pointer ">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
