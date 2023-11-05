import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Stack } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/svg/squirrel.svg";
import { getAuth, signOut } from "@firebase/auth";

export default function Header() {
  const auth = getAuth();
  const navigation = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation(`/`);
      })
      .catch((error) => {
        console.error("erreur", error);
      });
  };
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Box
        component={Link}
        sx={{
          minWidth: 90,
          minHeight: 90,
          maxWidth: 90,
          maxHeight: 90,
          paddingTop: 1,
          paddingLeft: 1,
        }}
        to="/"
      >
        <img src={logo} alt="logo" height={70} width={70} />
      </Box>
      <Button
        startIcon={<LogoutIcon />}
        variant="contained"
        size="small"
        style={{ maxWidth: 150, minWidth: 150, fontSize: "12px" }}
        sx={{ mr: 2 }}
        onClick={() => logout()}
        color="secondary"
      >
        <FormattedMessage id="header.logout-button" />
      </Button>
    </Stack>
  );
}
