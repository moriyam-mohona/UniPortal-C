import { useState } from "react";
import login from "../../../assets/Login.jpg";
import { FiEyeOff } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-10">
      <div className="hidden md:block">
        <img src={login} alt="Login" className="w-full h-[400px] " />
      </div>
      <form className="bg-white p-6  shadow-md w-full max-w-md h-[400px]">
        {" "}
        {/* Set height here */}
        <h2 className="text-3xl font-bold text-emerald mb-4 text-center">
          UniPortal
        </h2>
        <h2 className="text-base text-emerald mb-4 text-center">
          Please enter your email and password
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-darkGray mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            // required
            className="w-full p-2 border border-softGray rounded focus:outline-none focus:ring-2 focus:ring-mintGreen"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-darkGray mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            // required
            className="w-full p-2 border border-softGray rounded focus:outline-none focus:ring-2 focus:ring-mintGreen"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-12 transform -translate-y-1/2 text-darkGray"
          >
            {showPassword ? <FiEyeOff /> : <BsEye />}
          </button>
        </div>
        {/* <button
          type="submit"
          className="w-full bg-emerald text-white py-2 rounded hover:bg-tealGreen transition duration-200"
        >
          <Link to="/Dashboard">Login</Link>
        </button> */}
        <Link
          to="/Dashboard"
          className="w-full bg-emerald text-white py-2 rounded hover:bg-emerald/75 transition duration-200 text-center block"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Login;
