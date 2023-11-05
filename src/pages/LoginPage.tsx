import "../App.css";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
} from "@mui/material";
import Header from "../components/Header";
import { FormattedMessage, useIntl } from "react-intl";
import { useCallback, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUser } from "../components/providers/UserProvider";

export function LoginPage() {
  const intl = useIntl();
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setFetching] = useState(false);
  const [formMessage, setFormMessage] = useState<React.ReactNode | null>(null);
  const auth = getAuth();
  const { invalidateUser, user } = useUser();

  const onEmailChange = useCallback(function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setEmail(event.target.value);
  },
  []);
  const onPasswordChange = useCallback(function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPassword(event.target.value);
  },
  []);

  const onFormSubmit = useCallback(
    function (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      event.stopPropagation();
      setFetching(true);
      setFormMessage(null);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setFetching(false);
          invalidateUser();
          navigation(`/games/`);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFetching(false);
          setFormMessage(<Alert severity="error">Connexion impossible</Alert>);
          console.error(errorCode, errorMessage);
        });
    },
    [auth, email, password, invalidateUser, navigation]
  );

  if (user) {
    // Once the user has been successfully fetched, we redirect him to the home page
    return <Navigate to="/games" />;
  }

  return (
    <>
      <Header></Header>
      <h1>Connexion</h1>
      <Stack
        justifyContent={"space-between"}
        spacing={5}
        alignItems={"center"}
        component="form"
        onSubmit={onFormSubmit}
        margin={5}
      >
        <Stack gap={1}>
          <TextField
            id="r1"
            type="email"
            value={email}
            label={intl.formatMessage({ id: "login.form.email.label" })}
            placeholder={intl.formatMessage({
              id: "login.form.email.placeholder",
            })}
            variant="outlined"
            onChange={onEmailChange}
          />
          <TextField
            id="r3"
            type="password"
            value={password}
            label={intl.formatMessage({ id: "login.form.password.label" })}
            placeholder={intl.formatMessage({
              id: "login.form.password.placeholder",
            })}
            variant="outlined"
            onChange={onPasswordChange}
          />

          <Stack alignItems={"center"} mt={2}>
            <Box
              component={Link}
              sx={{
                width: "fit-content",
                ":hover": {
                  textDecoration: "underline",
                  color: "primary.main",
                },
              }}
              to="/auth/reset-password"
            >
              <FormattedMessage id="login.form.forgot-password-link" />
            </Box>
          </Stack>
          <Stack alignItems={"center"} mt={2}>
            <Box
              component={Link}
              sx={{
                width: "fit-content",
                ":hover": {
                  textDecoration: "underline",
                  color: "primary.main",
                },
              }}
              to="/auth/signup"
            >
              <FormattedMessage id="login.form.signup-link" />
            </Box>
          </Stack>
        </Stack>
        <Box id="submit-button">
          {formMessage}
          <Button
            variant="contained"
            type="submit"
            disabled={!email || !password || isFetching}
          >
            {isFetching ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              <FormattedMessage id="login.form.submit" />
            )}
          </Button>
        </Box>
      </Stack>
    </>
  );
}
