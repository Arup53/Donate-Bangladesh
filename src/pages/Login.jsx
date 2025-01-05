import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";
import { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";

function Login() {
  const { logIn, signInWithGoogle } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrMsg("");
    logIn(email, password)
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        const errMsg = err.message;
        setErrMsg(errMsg);
        toast.error(errMsg);
      });
  }

  function handleGoogleSignIn() {
    signInWithGoogle().then((result) =>
      location.state
        ? navigate(location.state)
        : navigate("/").catch((err) => {})
    );
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleToggle() {
    setToggle((prev) => setToggle(!prev));
  }

  return (
    <div className=" min-h-[100vh] mx-auto flex justify-center items-center bg-[url('/win-2.jpg')] bg-no-repeat bg-cover px-4 md:px-0 py-12">
      <div className="card  bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <h3 className="text-4xl text-center font-bold pt-6">Login</h3>
        <form onSubmit={handleSubmit} className="card-body">
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleEmailChange}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div
              onClick={handleToggle}
              className="cursor-pointer absolute bottom-12 right-2"
            >
              {toggle ? <FaEye /> : <FaEyeSlash />}
            </div>
            <input
              type={`${toggle ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

            <label className="label ">
              <NavLink
                state={email}
                to={"/auth/forget"}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </NavLink>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-orange-400 text-white border-none">
              Login
            </button>
          </div>
          {errMsg && <p className="text-red-600 font-bold">{errMsg}</p>}
          <p>
            Don't have an account? <Link to={"/auth/signup"}>Register</Link>
          </p>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn w-[85%] text-lg mx-auto mb-4"
        >
          <FcGoogle />
          Google Login
        </button>
      </div>
    </div>
  );
}

export default Login;
