import React from "react";
import { useState, SyntheticEvent } from "react";

import Image from "next/image";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async (e: SyntheticEvent) => {};

  return (
    <>
      <button
        type="button"
        className="flex h-5 w-5 items-center text-white hover:text-primary rtl:text-primary"
        onClick={handleModal}
      >
        <i className="fas fa-regular fa-user"></i>
      </button>

      {isOpen && (
        <div className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex mt-10">
          <div
            className="relative p-4 max-w-md h-50 md:h-auto"
            style={{ width: "500px", marginTop: "1rem" }}
          >
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                onClick={handleModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="#c6c7c7"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  />
                </svg>
                <span className="sr-only">Close popup</span>
              </button>
              <div className="p-5">
                <h3 className="text-2xl mb-0.5 font-medium" />
                <p className="mb-4 text-sm font-normal text-gray-800" />
                <div className="text-center">
                  <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                    Login to your account
                  </p>
                  <p className="mt-2 text-sm leading-4 text-slate-600">
                    You must be logged in to perform this action.
                  </p>
                </div>
                <div className="mt-7 flex flex-col gap-2">
                  <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                    <Image
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      width={18}
                      height={18}
                    />
                    Continue with Google
                  </button>
                </div>
                <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                  <div className="h-px w-full bg-slate-200" />
                  Or
                  <div className="h-px w-full bg-slate-200" />
                </div>
                <form className="w-full" onSubmit={handleLogin}>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Email Address"
                    defaultValue=""
                  />
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Password"
                    defaultValue=""
                  />
                  <p className="mb-3 mt-2 text-sm text-gray-500">
                    <a
                      href="/forgot-password"
                      className="text-blue-800 hover:text-blue-600"
                    >
                      Reset your password?
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary inline-flex w-full items-center justify-center rounded-lg p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                  >
                    Continue
                  </button>
                </form>
                <div className="mt-6 text-center text-sm text-slate-600">
                  Do not have an account ? {""}
                  <a href="/signup" className="font-medium text-[#4285f4]">
                    Sign up here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
