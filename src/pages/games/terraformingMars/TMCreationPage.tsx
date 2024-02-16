import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from "@mui/material";
import Header from "../../../components/Header";
import { useState } from "react";

export enum TMBoard {
  CLASSIC = "CLASSIC",
  ELYSIUM = "ELYSIUM",
  HELLAS = "HELLAS"
}

export type TMGameParameters = {
  nbPlayers: number;
  board: TMBoard;
};
export function TMCreationPage() {
  const [gameParameters, setNewGameParameters] = useState<TMGameParameters>({
    nbPlayers: 2,
    board: TMBoard.CLASSIC
  });

  const createTMGame = () => {
    console.log("vous allez créer une partie", gameParameters);
  };

  return (
    <Stack>
      <Header title="" />
      <Typography variant="h1">Création d'une partie</Typography>
      <Typography variant="body2">
        Vous allez choisir tous les paramètres d'une partie de TM
      </Typography>
      <Stack display="flex" flexDirection="row" width="100%">
        <Stack
          component="form"
          margin={5}
          width="50%"
          onSubmit={() => createTMGame()}
        >
          <FormControl sx={{ mb: 3 }}>
            <InputLabel id="nb-players-select-label">
              Nombre de joueuses
            </InputLabel>
            <Select
              labelId="nb-players-select-label"
              id="nb-players-select"
              value={gameParameters.nbPlayers}
              label="Nombre de joueuses"
              onChange={(e) =>
                setNewGameParameters({
                  ...gameParameters,
                  nbPlayers: e.target.value as number
                })
              }
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ mb: 3 }}>
            <InputLabel id="nb-players-select-label">Plateau de jeu</InputLabel>
            <Select
              labelId="board-select-label"
              id="nb-playersboard-select"
              label="Plateau de jeu"
              value={gameParameters.board}
              onChange={(e) =>
                setNewGameParameters({
                  ...gameParameters,
                  board: e.target.value as TMBoard
                })
              }
            >
              <MenuItem value={TMBoard.CLASSIC}>Classique</MenuItem>
              <MenuItem value={TMBoard.ELYSIUM}>Elysium</MenuItem>
              <MenuItem value={TMBoard.HELLAS}>Hellas</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            Valider
          </Button>
        </Stack>
        <Box margin={5}>
          <Typography variant="body1">{gameParameters.nbPlayers}</Typography>
          <Typography variant="body1">{gameParameters.board}</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
