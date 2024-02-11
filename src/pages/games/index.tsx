import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../components/PrivateRoute";
import { GameListPage } from "./GameListPage";
import { TerraformingMarsRouter } from "./terraformingMars";
import { NotFoundPage } from "../NotFoundPage";

export function GamesRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<GameListPage />} />
        <Route path="/tm/*" element={<TerraformingMarsRouter />} />
      </Route>
      <Route path="*" Component={NotFoundPage} />
    </Routes>
  );
}
