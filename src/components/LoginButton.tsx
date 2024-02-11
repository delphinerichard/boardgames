import "../App.css";
import { FormattedMessage } from "react-intl";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export function LoginButton() {
  const navigation = useNavigate();
  return (
    <Button
      onClick={() => navigation(`/auth/login`)}
      color="secondary"
      variant="contained"
      sx={{ marginRight: 2 }}
    >
      <FormattedMessage id="header.login-button" />
    </Button>
  );
}
