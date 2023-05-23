import AddGistaPage from "../pages/AddGistaPage/AddGistaPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import EditPage from "../pages/EditPage/EditPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import IndexPage from "../pages/IndexPage/IndexPage";
import MainPage from "../pages/MainPage/MainPage";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <IndexPage />,
    children: [
      {
        path: "main",
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
    ],
  },
]);

export default router;
