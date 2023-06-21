import "./App.scss";
import Layout from "./components/Layout/Layout";
import AddGistaPage from "./pages/AddGistaPage/AddGistaPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import EditPage from "./pages/EditPage/EditPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import GistaPage from "./pages/GistaPage/GistaPage";
import MainPage from "./pages/MainPage/MainPage";
import { API_URL } from "./services/api";
import { AuthResponse } from "./services/models/AuthResponse";
import axios from "axios";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  // const checkAuth = async () => {
  //   try {
  //     const response = await axios.get<AuthResponse>(`${API_URL}/token/refresh`, {
  //       withCredentials: true,
  //     });
  //     localStorage.setItem("token", response.data.access);
  //     navigate('/')
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, []);

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
