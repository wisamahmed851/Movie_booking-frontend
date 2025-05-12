import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <h1>Home Page</h1> }],
  },
]);
export default router;
