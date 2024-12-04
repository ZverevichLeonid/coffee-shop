import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { OurCoffeePage } from "../pages/OurCoffeePage";
import { CoffeePage } from "../pages/CoffeePage";

export const routes = (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/our-coffee" element={<OurCoffeePage />} />
    <Route path="/our-coffee/:id" element={<CoffeePage />} />
    <Route path="*" element={<HomePage />} />
  </Routes>
);
