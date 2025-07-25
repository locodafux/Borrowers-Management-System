import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // Heroicons
import { BrowserRouter as Router, Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <div className="w-screen h-screen bg-[#e7e8ff] flex justify-center items-center">
      <div className="w-[800px] bg-white rounded-lg p-12 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold">Register & Get Started</span>
          <p className="text-xs font-semibold w-[80%]">
            Get started on our platform's Register page, where you can sign up
            and join our community to access exclusive features and contents.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              CREATE PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
                placeholder="•••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="retype-password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              RETYPE PASSWORD
            </label>
            <div className="relative">
              <input
                type={showRetypePassword ? "text" : "password"}
                id="retype-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
                placeholder="•••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowRetypePassword(!showRetypePassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                aria-label={
                  showRetypePassword ? "Hide password" : "Show password"
                }
              >
                {showRetypePassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="button"
            className="bg-indigo-400 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            REGISTER
          </button>

          <span className="text-center">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
