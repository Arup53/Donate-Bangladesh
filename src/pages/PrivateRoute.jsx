import {
  Navigate,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";
import { useEffect, useState } from "react";
import PrivateRouteCard from "../components/PrivateRouteCard";

function PrivateRoute() {
  const location = useLocation();
  const { user, loading } = useAuthContext();
  const [elm, setElm] = useState("");
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const singleEl = data?.find((campign) => campign.id === parseInt(id));

    setElm(singleEl);
  }, [data, id]);

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
    <div className="bg-[url('/win1.jpg')] bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center">
        {elm && <PrivateRouteCard data={elm} />}
      </div>
    </div>
  );
}

export default PrivateRoute;
