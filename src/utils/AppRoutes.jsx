import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
