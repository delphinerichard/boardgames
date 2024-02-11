import { Box, Button, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";

export function TMHomePage() {
  const navigation = useNavigate();

  return (
    <Stack>
      <Header title="Terraforming Mars" />
      <Box
        sx={{
          justifyItems: "center",
          alignItem: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="outlined" onClick={() => navigation("create")} sx={{ width: 200 }}>
          Nouvelle partie
        </Button>
      </Box>
    </Stack>
  );
}
