import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://abhit-batch-bn.onrender.com/api/v1/user/login",
        formData
      );

      console.log(response.data);
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("username", response.data.user.username)
      navigate("/")

    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };


  if (token) {
    return <Navigate to={"/"} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?
          <span className="text-blue-600 cursor-pointer hover:underline ml-1">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
