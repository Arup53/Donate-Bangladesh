import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";

function UpdateProfile() {
  const { updateUser, user } = useAuthContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUser(name, photo)
      .then((result) => navigate("/dashboard"))
      .catch((err) => {});
  }

  return (
    <div className=" h-[100vh] mx-auto flex justify-center items-center  px-4">
      <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <h3 className="text-4xl text-center font-bold">Update</h3>
        <form onSubmit={handleSubmit} className="card-body">
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="UserName"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-orange-400 text-white border-none">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
