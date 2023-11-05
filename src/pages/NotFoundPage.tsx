import logo from "../assets/svg/squirrel.svg";
import { FormattedMessage } from "react-intl";
import { Stack } from "@mui/material";
import "../App.css";

export function NotFoundPage() {
  return (
    <Stack className="App-header">
      <h1>
        <FormattedMessage id="notFound.header" />
      </h1>
      <img src={logo} alt="logo" height="200px" width="200px" />
      <p>
        <FormattedMessage id="notFound.content" />
      </p>
      <a className="App-link" href="/" rel="noopener noreferrer">
        Retour à l'accueil
      </a>
    </Stack>
  );
}
