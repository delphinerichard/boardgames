import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/svg/squirrel.svg";
import { getAuth, signOut } from "@firebase/auth";
import { useState } from "react";
import { useUser } from "./providers/UserProvider";

export default function Header() {
  const { user } = useUser();
  const auth = getAuth();
  const navigation = useNavigate();
  const displayPersonIcon: boolean = user ? user.uid?.length > 0 : false;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (menuChoice: number) => {
    setAnchorEl(null);

    switch (menuChoice) {
      case 0:
        navigation("/profile");
        break;
      case 1:
        logout();
        break;
      default:
        break;
    }
  };

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
      <Avatar
        sx={{
          bgcolor: "secondary.main",
          display: displayPersonIcon ? "flex" : "none",
          marginRight: 2,
        }}
        onClick={handleClick}
        src={user?.photoURL ? user?.photoURL : undefined}
      >
        {user?.displayName ? (
          user?.displayName?.substring(0, 1)
        ) : (
          <PersonIcon fontSize="small" />
        )}
      </Avatar>

      <Menu
        id="basic-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose(0)}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profil</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleClose(1)}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <FormattedMessage id="header.logout-button" />
          </ListItemText>
        </MenuItem>
      </Menu>
    </Stack>
  );
}
