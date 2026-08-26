import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit} 
    className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-md">
      <h2
       className="text-3xl font-bold text-pink-600 mb-6 text-center">
        Login</h2>

      <label className="block text-sm font-medium text-gray-700 mb-2">
        Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      placeholder="Enter your email"/>

      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      placeholder="Enter your password"
      />

      <button type="submit"
       className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
        Log in</button>
    </form>
  );
};

export default Login;