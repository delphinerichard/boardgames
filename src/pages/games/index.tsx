import { PrivateRoute } from "../../components/PrivateRoute";

import { GameListPage } from "./GameListPage";

export function GamesRouter() {
  return (
    <div>
      <PrivateRoute path="/" element={<GameListPage />} />
    </div>
  );
}
