
import { createBrowserRouter } from "react-router-dom";
import { Auth } from "../components/Auth/Auth";
import { Login } from "../components/Auth/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth/>,
      children: [
        {
         path: '/deneme',
         element: <h1>deneme</h1>
        }
      ]
    },
    {
      path: "login",
      element: <Login/>,
    },
  ]);