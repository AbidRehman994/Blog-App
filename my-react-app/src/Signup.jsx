import { useState } from "react";
import { useSignup } from "./hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup,error,isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        Sign up
      </h2>

      <label className="block text-sm font-medium text-gray-700 mb-2">
        Email
      </label>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Enter your email"
      />

      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Create a password"
      />

      <button 
        disabled = {isLoading}
        type="submit"
        className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
      >
        Sign up
      </button>
      {error && <div
       className="mt-3 rounded-md bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-600">
      {error} </div>}
    </form>
  );
};

export default Signup;