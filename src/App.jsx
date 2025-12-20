import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruts from "./components/pages/fruts/Fruts";
import Dairy from "./components/pages/dairy/Dairy";
import SeaFood from "./components/pages/seaFood/SeaFood";
import AllProducts from "./components/pages/allProducts/AllProducts";
import Layouts from "./components/Layout/Layouts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruts />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/sea-food",
          element: <SeaFood />,
        },
        {
          path: "/all-products",
          element: <AllProducts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
