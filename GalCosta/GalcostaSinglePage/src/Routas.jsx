import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hits from './pages/MaioresSucessos'
import Discography from "./pages/Discografy";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hits" element={<Hits />} />
        <Route path="/discografia" element={<Discography />} />
    </Routes>
  );
}
