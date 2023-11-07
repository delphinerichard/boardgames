import "../../App.css";
import { FormattedMessage } from "react-intl";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import { User, updateProfile } from "firebase/auth";
import { useCallback, useState } from "react";

export type ProfileProps = { user: User | null };

export function ProfilePage(props: ProfileProps) {
  const user: User | null = props.user;
  const [email, setEmail] = useState<string>(user?.email ?? "");
  const [displayName, setDisplayName] = useState<string>(
    user?.displayName ?? ""
  );
  const [isFetching, setFetching] = useState(false);
  const [formMessage, setFormMessage] = useState<React.ReactNode | null>(null);

  const onEmailChange = useCallback(function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setEmail(event.target.value);
  },
  []);

  const onDisplayNameChange = useCallback(function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setDisplayName(event.target.value);
  },
  []);

  const onPhotoChange = useCallback(function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(event.target.value);
  },
  []);

  const onFormSubmit = useCallback(
    function (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      event.stopPropagation();
      setFetching(true);
      setFormMessage(null);
      if (user) {
        updateProfile(user, { displayName: displayName })
          .then(() => {
            setFetching(false);
            setFormMessage(
              <Alert severity="success" onClose={() => {}}>
                Profil enregistré
              </Alert>
            );
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFetching(false);
            setFormMessage(
              <Alert severity="error" onClose={() => {}}>
                Enregistrement impossible
              </Alert>
            );
            console.error(errorCode, errorMessage);
          });
      } else {
        setFetching(false);
        setFormMessage(
          <Alert severity="error" onClose={() => {}}>
            Erreur utilisateur
          </Alert>
        );
      }
    },
    [displayName, user]
  );

  return (
    <>
      <Header></Header>
      <h1>Modification du profil</h1>
      <Stack
        justifyContent={"space-between"}
        spacing={5}
        alignItems={"center"}
        component="form"
        onSubmit={onFormSubmit}
        margin={5}
      >
        <Stack gap={1} width={500}>
          <Typography variant="h4" textAlign={"left"}>
            Email
          </Typography>
          <TextField
            fullWidth
            id="r1"
            type="email"
            value={email}
            placeholder={"Email"}
            variant="outlined"
            onChange={onEmailChange}
            disabled={true}
            color="secondary"
          />
          <Typography variant="h4" textAlign={"left"}>
            Nom
          </Typography>
          <TextField
            fullWidth
            value={displayName}
            placeholder={"Nom"}
            variant="outlined"
            onChange={onDisplayNameChange}
            color="secondary"
          />
          <Typography variant="h4" textAlign={"left"} color="grey">
            Photo de profil (fonctionnalité à venir)
          </Typography>
          <input
            accept="image/jpeg,image/png,image/tiff,image/webp"
            id="contained-button-file"
            name="logo"
            type="file"
            onChange={onPhotoChange}
            disabled={true}
          />
        </Stack>
        <Box id="submit-button">
          {formMessage}
          <Button
            variant="contained"
            type="submit"
            disabled={!email || !displayName || isFetching}
          >
            {isFetching ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              <FormattedMessage id="profile.form.submit" />
            )}
          </Button>
        </Box>
      </Stack>
    </>
  );
}
