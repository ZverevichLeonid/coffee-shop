import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { OurCoffeePage } from "../pages/OurCoffeePage";

export const routes = (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/our-coffee" element={<OurCoffeePage />} />
  </Routes>
);
