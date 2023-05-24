import AddGistaPage from "../pages/AddGistaPage/AddGistaPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import EditPage from "../pages/EditPage/EditPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import GistaPage from "../pages/GistaPage/GistaPage";
import MainPage from "../pages/MainPage/MainPage";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "edit",
    element: <EditPage />,
  },
  {
    path: "add-gista",
    element: <AddGistaPage />,
  },
  {
    path: "favorites",
    element: <FavoritesPage />,
  },
  {
    path: "gista",
    element: <GistaPage />,
  },
]);

export default router;
