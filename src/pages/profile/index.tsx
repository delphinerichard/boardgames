import { PrivateRoute } from "../../components/PrivateRoute";
import { useUser } from "../../components/providers/UserProvider";
import { ProfilePage } from "./ProfilePage";

export function ProfileRouter() {
  const { user, isLoading } = useUser();
  if (isLoading) return null;
  return (
    <div>
      <PrivateRoute path="/" element={<ProfilePage user={user} />} />
    </div>
  );
}
