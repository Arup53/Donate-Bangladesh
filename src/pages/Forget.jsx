import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";
import { useState } from "react";

function Forget() {
  const { passwordReset } = useAuthContext();
  const location = useLocation();
  const [email, setEmail] = useState(location.state);

  function handleSubmit(e) {
    e.preventDefault();

    passwordReset(email).then(() => redirectToGmail().catch((err) => {}));
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function redirectToGmail() {
    window.location.href = "https://mail.google.com";
  }

  return (
    <div className=" h-[100vh] mx-auto flex justify-center items-center px-4 ">
      <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailInput}
              placeholder="email"
              className="input input-bordered"
              required
              disabled={location.state ? true : false}
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary bg-orange-400 text-white bg-orange-400 text-white border-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forget;
