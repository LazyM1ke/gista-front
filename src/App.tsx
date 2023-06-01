import "./App.scss";
import Button from "./UIkit/Button";
import Icon from "./UIkit/Icon";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import AddGistaPage from "./pages/AddGistaPage/AddGistaPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import EditPage from "./pages/EditPage/EditPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import GistaPage from "./pages/GistaPage/GistaPage";
import MainPage from "./pages/MainPage/MainPage";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  return (
    <div className="app">
      <Header>
        {isLogged ? (
          <Icon iconName="profileCircle" />
        ) : (
          <>
            <Button type="primary">Зарегистрироваться</Button>
            <Button type="secondary">Войти</Button>
          </>
        )}
      </Header>

      <div className="app__content">
        {isLogged ? (
          <>
            <SideBar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/edit" element={<EditPage />} />
              <Route path="/add-gista" element={<AddGistaPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/gista" element={<GistaPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage />
        )}
      </div>
    </div>
  );
};

export default App;
