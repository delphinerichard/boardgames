import "../../App.css";
import { FormattedMessage } from "react-intl";
import GameCard from "../../components/GameCard";
import { Grid, Stack } from "@mui/material";
import Header from "../../components/Header";
import { useUser } from "../../components/providers/UserProvider";

export function GameListPage() {
  const { user } = useUser();
  return (
    <Stack>
      <Header></Header>
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
      <Grid
        container
        spacing={2}
        sx={{
          flexDirection: "horizontal",
          justifyContent: "space-evenly",
          maxWidth: "90%",
          marginTop: 2,
          alignSelf: "center",
        }}
      >
        <Grid item xs={12} md={4} mb={1}>
          <GameCard
            gameName="Terraforming Mars"
            gameLink="tm"
            gameCoverLink="assets/cover-img/tm.png"
            gameDescription="Décompte des points pour le jeu de Terraforming Mars"
          ></GameCard>
        </Grid>
        <Grid item xs={12} md={4} mb={1}>
          <GameCard
            gameName="Les Aventuriers du Rail"
            gameLink="https://jrmdel.github.io/TicketToRide"
            gameCoverLink="assets/cover-img/ticket-to-ride2.PNG"
            gameDescription="Lien vers le site de Jérémie pour compter les points des Aventuriers du Rail"
            externalLink={true}
          ></GameCard>
        </Grid>
        <Grid item xs={12} md={4} mb={1}>
          <GameCard
            gameName="Skyjo"
            gameLink="skyjo"
            gameCoverLink="assets/cover-img/skyjo.jpg"
            gameDescription="Décompte des points pour le jeu de Skyjo"
          ></GameCard>
        </Grid>
      </Grid>
    </Stack>
  );
}
