import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user, loading } = useSelector((state) => state.user);

  if (loading) return <p>Loading...</p>;

  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
