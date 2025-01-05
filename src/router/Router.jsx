import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Forget from "../pages/Forget";
import HomeLayout from "../layout/HomeLayout";
import DonationCampign from "../components/DonationCampign";
import PrivateRoute from "../pages/PrivateRoute";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import UpdateProfile from "../pages/UpdateProfile";
import Errorpage from "../pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/donationData.json"),
      },
      {
        path: "/donationcampign",
        element: <DonationCampign />,
        loader: () => fetch("/donationData.json"),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute />,
        loader: () => fetch("/donationData.json"),
      },

      {
        path: "/auth",
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/signup",
            element: <Register />,
          },
          {
            path: "/auth/forget",
            element: <Forget />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
