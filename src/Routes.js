import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/details/:id" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
