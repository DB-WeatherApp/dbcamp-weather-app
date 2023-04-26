import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Layout from "../../pages/Layout";
import List from "../../pages/List";
import Register from "../../pages/Register";

function Routers(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
