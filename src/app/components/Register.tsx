import { SyntheticEvent, useState } from "react";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleRegister = async (e: SyntheticEvent) => {};

  return (
    <>
      <button
        type="button"
        className="flex h-5 w-5 items-center text-white hover:text-primary rtl:text-primary"
        onClick={handleModal}
      >
        <i
          className="fas fa-solid fa-user-plus"
          style={{ color: "#13ec3" }}
        ></i>
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
                <div className="text-center mb-7">
                  <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                    Create an account
                  </p>
                </div>
                <form className="w-full" onSubmit={handleRegister}>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-12">
                    <div className="form-group mb-2">
                      <label htmlFor="email" className="sr-only">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="email" className="sr-only">
                        Username
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Enter Username"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-12">
                    <div className="form-group">
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="sr-only">
                        Password Confirmation
                      </label>
                      <input
                        name="password_confirmation"
                        type="password"
                        autoComplete="current-password"
                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Password Confirmation"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary inline-flex w-full items-center justify-center rounded-lg p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400 mt-4"
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

export default Register;
