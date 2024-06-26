import React from "react";

const Login = () => {
  return (
    <div className="w-full">
      <h1 className="flex justify-center text-5xl font-bold text-blue-800">
        Login
      </h1>
      <div className="flex justify-center mt-10">
        <div>
          <label
            htmlFor="Email"
            className="text-md font-medium leading-6 text-gray-900 ml-auto"
          >
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Email"
            />
          </div>
        </div>
      </div>

      {/* Password */}

      <div className="flex justify-center">
        <div>
          <label
            htmlFor="Password"
            className="text-md font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Password"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="p-2 bg-black text-white mt-5 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
