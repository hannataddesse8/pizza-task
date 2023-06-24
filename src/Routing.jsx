import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PizzasPage from "./pages/PizzasPage";
import { Layout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<PizzasPage />} />
    </Route>
  )
);

export const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
