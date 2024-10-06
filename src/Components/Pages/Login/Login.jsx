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
        <img src={login} alt="Login" className="w-full h-[450px] " />
      </div>
      <form className="bg-white p-6  shadow-md w-full max-w-md h-[450px]">
        {" "}
        <h2 className="text-3xl font-extrabold text-emerald text-center mb-2">
          UniPortal
        </h2>
        <h2 className="text-base text-emerald mb-4 text-center">
          Please enter your email and password
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-emerald mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            // required
            className="w-full p-2 text-emerald border border-emerald rounded focus:outline-none focus:ring-2 focus:ring-emerald"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-emerald mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            // required
            className="w-full p-2 text-emerald border border-emerald rounded focus:outline-none focus:ring-2 focus:ring-emerald"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-12 transform -translate-y-1/2 text-emerald"
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
          className="w-full bg-emerald text-white font-bold py-2 rounded hover:bg-emerald/75 transition duration-200 text-center block"
        >
          Login
        </Link>
        <div className="flex justify-between">
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 text-emerald"
            />
            <label htmlFor="remember" className="text-emerald text-sm">
              Remember Me
            </label>
          </div>
          <div className="mt-4 text-center">
            <Link className="text-emerald text-sm hover:underline">
              Forget Password?
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-emerald text-base my-5">
          {" "}
          <p>Email: uni@portal.com</p>
          <p>Password: Uniportal</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
