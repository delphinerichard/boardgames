import logo from "../assets/svg/logo.svg";
import "../App.css";
import { FormattedMessage } from "react-intl";
import { Button } from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router";

export function HomePage() {
  const navigation = useNavigate();
  return (
    <>
      <Header></Header>
      <header className="App-header">
        <h1>
          <FormattedMessage
            id="homepage.header"
            description="message"
            defaultMessage="Welcome {username}"
            values={{
              username: "Delphine",
            }}
          />
        </h1>
        <Button
          onClick={() => navigation(`/auth/login`)}
          color="secondary"
          variant="contained"
        >
          {" "}
          Se connecter
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </>
  );
}
