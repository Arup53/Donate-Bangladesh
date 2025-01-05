import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";

function Dashboard() {
  const { user, loading } = useAuthContext();

  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[600px] mx-auto flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"} />;
  }

  return (
    <div className="mb-12">
      <section className="relative min-h-[400px]  p-6 space-y-6  bg-center bg-[url('/win1.jpg')] bg-no-repeat bg-cover">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 text-center py-72 space-y-12">
          <h3 className="text-4xl font-bold text-white ">
            Welcome, {user.displayName}
          </h3>
        </div>
      </section>

      <div className="w-[80%]  mx-auto flex flex-col md:justify-center md:items-center md:flex-row gap-6 py-6 px-12 shadow-2xl">
        <figure className="flex justify-center items-center">
          <img
            className="h-[300px] object-contain shadow-2xl  rounded-2xl"
            src={`${user.photoURL}`}
            alt=""
          />
        </figure>
        <div className="basis-3/4 flex flex-col gap-6  px-12 rounded-2xl text-black">
          <h3 className="text-lg font-bold">Name: {user.displayName}</h3>
          <p className="font-bold">{user.email}</p>
          <Link
            to={"/updateprofile"}
            className="btn mt-24 bg-orange-400 text-white"
          >
            Update User Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
