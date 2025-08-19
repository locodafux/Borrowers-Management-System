import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login success:", response.data);

      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-[#e7e8ff] flex justify-center items-center">
      <div className="w-[800px] bg-white rounded-lg p-12 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold">Log in to Manage</span>
          <p className="text-xs font-semibold w-[80%]">
            Welcome to the Log in screen, where you can securely access your
            account and explore all that our platform has to offer.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium"
            >
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
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

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="bg-indigo-400 hover:bg-indigo-500 text-white font-medium 
                       rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            LOGIN
          </button>

          <span className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
