import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./providers/UserProvider";

export function PrivateRoute() {
  const { user, isLoading } = useUser();
  if (isLoading) return null;
  if (!user?.uid) return <Navigate to="/auth/login" />;

  return <Outlet />;
}
