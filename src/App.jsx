import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/homeComponent/Nav";
import Search from "./component/homeComponent/secondBox/Search";
import Footer from "./component/homeComponent/footer/Footer";
function App() {
  return (
    <>
      <Nav />
      <Search />
      <Routes>
        <Route
          path="/react-vite-Full-E-Commerce-Landing-Page"
          element={<Home />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
