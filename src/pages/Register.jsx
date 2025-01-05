import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const { signIn, user, setUser, updateUser, signInWithGoogle } =
    useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const [toggle, setToggle] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    setErrMsg("");

    if (!passwordRegex.test(password)) {
      const msg =
        "Password must contain one uppercase, one lowercase and length must be 6 or greater";
      toast.error(msg);
      setErrMsg(msg);
      return;
    }

    signIn(email, password)
      .then((res) => {
        updateUser(name, photo);
        navigate("/");
      })
      .catch((err) => {
        const error = err.message;
        setErrMsg(error);
        toast.error(errMsg);
      });
  }

  function handleGoogleSignIn() {
    signInWithGoogle().then((result) =>
      location.state
        ? navigate(location.state)
        : navigate("/").catch((error) => {
            const errMsg = error.message;
            setErrMsg(errMsg);
            toast.error(errMsg);
          })
    );
  }

  function handleToggle() {
    setToggle((prev) => setToggle(!prev));
  }

  return (
    <div className=" min-h-[100vh] mx-auto py-12  flex justify-center items-center bg-[url('/win1.jpg')] bg-no-repeat bg-cover px-4">
      <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="PhotoUrl"
              className="input input-bordered"
            />
          </div>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              className="cursor-pointer absolute bottom-4 right-2"
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-orange-400 text-white border-none">
              Register
            </button>
          </div>
          {errMsg && <p className="text-red-600 font-bold">{errMsg}</p>}
          <p>
            Already have an account? <Link to={"/auth/login"}>Login</Link>
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

export default Register;
