import logo from "../../assets/svg/logo.svg";
import "../../App.css";
import { FormattedMessage } from "react-intl";
import GameCard from "../../components/GameCard";
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import { useUser } from "../../components/providers/UserProvider";

export function GameListPage() {
  const { user } = useUser();
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
          />{" "}
          {user?.displayName}
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Grid
          container
          sx={{
            flexDirection: "horizontal",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item xs={12} md={4} mb={1}>
            <GameCard
              gameName="Jeu 1"
              gameDescription="Décompte des points pour le premier jeu"
            ></GameCard>
          </Grid>
          <Grid item xs={12} md={4} mb={1}>
            <GameCard
              gameName="Jeu 2"
              gameDescription="Décompte des points pour le deuxième jeu"
            ></GameCard>
          </Grid>
          <Grid item xs={12} md={4} mb={1}>
            <GameCard
              gameName="Jeu 3"
              gameDescription="Décompte des points pour le troisième jeu"
            ></GameCard>
          </Grid>
          <Grid item xs={12} md={4} mb={1}>
            <GameCard
              gameName="Jeu 4"
              gameDescription="Décompte des points pour le quatrième jeu"
            ></GameCard>
          </Grid>
          <Grid item xs={12} md={4} mb={1}>
            <GameCard
              gameName="Jeu 5"
              gameDescription="Décompte des points pour le cinquième jeu"
            ></GameCard>
          </Grid>
          <Grid item xs={12} md={4} mb={1}>
            <GameCard
              gameName="Jeu 6"
              gameDescription="Décompte des points pour le sixième jeu"
            ></GameCard>
          </Grid>
        </Grid>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </>
  );
}
