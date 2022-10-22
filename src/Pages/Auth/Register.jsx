import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Register = () => {
  return (
    <div className="lg:h-screen pb-10 bg-[#242933] text-[#a6adba]">
      <Navbar />
      <div className="flex lg:flex-row lg:my-20 flex-col-reverse lg:w-screen lg:items-center justify-center">
        <div className="shadow-[#2a303c] mx-5 lg:mx-2 rounded-2xl lg:w-1/4  lg:px-5 lg:py-8 px-4 py-5 m-0 bg-[#2a303c]">
          <div className="px-3">
            <label className="text-sm">Name</label>
            <br />
            <input
              type="text"
              value=""
              placeholder="John Doe"
              className="p-3 my-2 w-full bg-[#2a303c] border rounded-lg outline-none border-[#a6adba]"
            />
          </div>
          <div className="px-3">
            <label className="text-sm">Email</label>
            <br />
            <input
              type="email"
              value=""
              placeholder="john@doe.com"
              className="p-3 my-2 w-full bg-[#2a303c] border rounded-lg outline-none border-[#a6adba]"
            />
          </div>
          <div className="px-3">
            <label className="text-sm">Password</label>
            <br />
            <input
              type="password"
              value=""
              placeholder="password"
              className="p-3 w-full my-2 bg-[#2a303c] border rounded-lg outline-none border-[#a6adba]"
            />
          </div>
          <div className="px-3">
            <label className="text-sm">Confirm Password</label>
            <br />
            <input
              type="password"
              value=""
              placeholder="Confirm password"
              className="p-3 w-full my-2 bg-[#2a303c] border rounded-lg outline-none border-[#a6adba]"
            />
          </div>
          <div className="flex pt-4 px-3">
            <button className="w-full px-3.5 py-3  text-md rounded-lg font-semibold bg-[#6419e6] text-white hover:bg-[#48199a]">
              REGISTER
            </button>
          </div>
          <br />
          <div className="text-center">
            <Link to="/login" className="underline">
              Already have an account ? Login{" "}
            </Link>
          </div>
        </div>
        <div className="lg:w-1/4 lg:mx-2 px-5 my-6 text-center">
          <h1 className="lg:text-5xl text-3xl font-bold lg:my-6 my-2">
            Welcome Back!
          </h1>
          <p className="text-1xl">
            Begin your notes-making journey by creating a new account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;