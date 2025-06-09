import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Log/Login";
import Register from "../Log/Register";
import Queries from "../Pages/Queries/Queries";
import RecForme from "../Pages/RecForMe/RecForme";
import MyQueries from "../Pages/MyQueries/MyQueries";
import MyRecos from "../Pages/MyRecos/MyRecos";
import MyProfile from "../Pages/MyProfile/MyProfile";
import QueryDetails from "../Pages/QueryDetails/QueryDetails";
import AddQueryForm from "../Components/AddQueryForm/AddQueryForm";
import Error from "../Pages/Err/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/queries",
        Component: Queries,
      },
      {
        path: "/recforme",
        Component: RecForme,
      },
      {
        path: "/myqueries",
        Component: MyQueries,
      },
      {
        path: "/myrecos",
        Component: MyRecos,
      },
      {
        path: "/myprofile",
        Component: MyProfile,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/queries.json"),
        Component: QueryDetails,
      },
      {
        path: "/addquery",
        Component: AddQueryForm,
      }
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);