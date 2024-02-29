import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/react-vite-Full-E-Commerce-Landing-Page"
          element={<Home />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
