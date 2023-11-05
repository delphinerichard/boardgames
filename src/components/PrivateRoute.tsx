import { Navigate, Route, RouteProps, Routes } from "react-router-dom";
import { useUser } from "./providers/UserProvider";

export type PrivateRouteProps = RouteProps;
export function PrivateRoute(props: PrivateRouteProps) {
  const { user, isLoading } = useUser();
  if (isLoading) return null;
  if (!user?.uid) return <Navigate to="/auth/login" />;

  return (
    <Routes>
      <Route {...props} />
    </Routes>
  );
}
