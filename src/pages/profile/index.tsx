import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../components/PrivateRoute";
import { useUser } from "../../components/providers/UserProvider";
import { ProfilePage } from "./ProfilePage";
import { NotFoundPage } from "../NotFoundPage";

export function ProfileRouter() {
  const { user, isLoading } = useUser();
  if (isLoading) return null;
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<ProfilePage user={user} />} />
      </Route>
      <Route path="*" Component={NotFoundPage} />
    </Routes>
  );
}
