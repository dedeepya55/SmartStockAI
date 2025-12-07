import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import Login from "../pages/Auth/Login";
import tester from "../pages/tester";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tester" element={<tester/>}/>
       <Route path="/login" element={<Login />} />
    </Routes>
  );
}
