import "./App.scss";
import Layout from "./components/Layout/Layout";
import AddGistaPage from "./pages/AddGistaPage/AddGistaPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import EditPage from "./pages/EditPage/EditPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import GistaPage from "./pages/GistaPage/GistaPage";
import MainPage from "./pages/MainPage/MainPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="add-gista" element={<AddGistaPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="gista" element={<GistaPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
