import "../App.css";
import { FormattedMessage } from "react-intl";
import { Button } from "@mui/material";
import Header from "../components/Header";
import { useUser } from "../components/providers/UserProvider";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const { user } = useUser();
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
        <p> Page en cours de construction</p>

        {user && (
          <Button
            onClick={() => navigation(`/games`)}
            color="secondary"
            variant="contained"
            sx={{ marginRight: 2 }}
          >
            <FormattedMessage id="homepage.go-to-games-button" />
          </Button>
        )}
      </header>
    </>
  );
}
