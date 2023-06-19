import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ page }) => {
  return !useSelector((state) => state.auth.userToken) ? (
    <Navigate to={"/login"} />
  ) : (
    page
  );
};

export default ProtectedRoute;
