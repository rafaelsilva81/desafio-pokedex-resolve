import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import ErrorDefault from "./components/ErrorDefault";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorDefault />}>
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
