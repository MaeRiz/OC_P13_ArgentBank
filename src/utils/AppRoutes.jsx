import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />=
      <Route
        path="/profile"
        element={<ProtectedRoute page={<Dashboard />} />}
      />
      <Route
        path="/account/:idAcc"
        element={<ProtectedRoute page={<Account />} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
