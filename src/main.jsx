import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThankYou } from "./ThankYou.jsx";
import { Register } from "./Register.jsx";
import Interiors from "./Interiors.jsx";
import Amenities from "./Amenities.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/interiors",
    element: <Interiors />,
  },
  {
    path: "/amenities",
    element: <Amenities />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
