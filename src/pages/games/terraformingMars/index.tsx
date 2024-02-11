import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../NotFoundPage";
import { TMHomePage } from "./TMHomePage";
import { PrivateRoute } from "../../../components/PrivateRoute";
import { TMCreationPage } from "./TMCreationPage";

export function TerraformingMarsRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<TMHomePage />} />
        <Route path="/create" element={<TMCreationPage />} />
      </Route>
      <Route path="*" Component={NotFoundPage} />
    </Routes>
  );
}
