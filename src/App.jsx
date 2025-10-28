import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Nav from "./views/Nav.jsx";
import ItemMenu from "./components/ItemMenu.jsx";
import FooterGeneral from "./views/FooterGeneral.jsx";
import Landing from "./views/Landing.jsx";
import Contactanos from "./views/Contactanos.jsx";
import QuienesSomos from "./views/QuienesSomos.jsx";
import NotFound from "./views/NotFound.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Beneficios from "./components/Beneficios.jsx";
import Login from "./views/Login.jsx";

const App = () => (
  <Router>
    <Nav />
    <ItemMenu />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/quienes-somos" element={<QuienesSomos nombre="Quiénes somos" />} />
      <Route path="/contacto" element={<Contactanos nombre="Contáctanos" />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <FooterGeneral />
  </Router>
);

export default App;
