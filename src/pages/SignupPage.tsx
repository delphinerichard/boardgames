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
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

export function SignupPage() {
  const intl = useIntl();
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setFetching] = useState(false);
  const [formMessage, setFormMessage] = useState<React.ReactNode | null>(null);
  const auth = getAuth();

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

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setFetching(false);
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
    [auth, email, password, navigation]
  );

  return (
    <>
      <Header></Header>
      <h1>Créer un compte</h1>
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
            label={intl.formatMessage({ id: "signup.form.email.label" })}
            placeholder={intl.formatMessage({
              id: "signup.form.email.placeholder",
            })}
            variant="outlined"
            onChange={onEmailChange}
          />
          <TextField
            id="r3"
            type="password"
            value={password}
            label={intl.formatMessage({ id: "signup.form.password.label" })}
            placeholder={intl.formatMessage({
              id: "signup.form.password.placeholder",
            })}
            variant="outlined"
            onChange={onPasswordChange}
          />
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
              <FormattedMessage id="signup.form.submit" />
            )}
          </Button>
        </Box>
      </Stack>
    </>
  );
}
