import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-neutral-900 border border-amber-600 rounded-xl p-6 sm:p-8">
        <form
          className="flex flex-col gap-4 text-white"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            className="border border-gray-600 bg-transparent placeholder:text-gray-400 outline-none font-medium rounded-full py-3 px-5 text-sm sm:text-base"
          />

          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            className="border border-gray-600 bg-transparent placeholder:text-gray-400 outline-none font-medium rounded-full py-3 px-5 text-sm sm:text-base"
          />

          <button className="bg-emerald-600 mt-4 py-3 font-bold text-lg sm:text-xl rounded-full transition active:scale-95 hover:bg-emerald-500">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
