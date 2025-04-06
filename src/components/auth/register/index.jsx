import { useState } from "react";
import { register } from "../../../firebase/auth";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";

function Register() {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await register(email, password);
      } catch (err) {
        setErrorMessage("Registration failed.");
        setIsRegistering(false);
      }
    }
  };

  if (user) return <Navigate to="/home" replace />;

  return (
    <div className="w-full h-screen flex self-center place-content-center place-items-center bg-black text-white">
      <div className="w-96 text-gray-200 space-y-5 p-4 shadow-xl bg-zinc-900 rounded-xl">
        <div className="text-center">
          <h3 className="text-white text-xl font-semibold sm:text-2xl">Register</h3>
        </div>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="text-sm text-gray-300 font-bold">Email</label>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 font-bold">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              placeholder="Create a password"
            />
          </div>

          {errorMessage && (
            <span className="text-red-500 font-bold">{errorMessage}</span>
          )}

          <button
            type="submit"
            disabled={isRegistering}
            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
              isRegistering
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-zinc-700 hover:bg-zinc-800 hover:shadow-xl transition duration-300"
            }`}
          >
            {isRegistering ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline font-bold text-indigo-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
