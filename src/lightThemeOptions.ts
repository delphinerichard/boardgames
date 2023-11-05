import { CSSInterpolation, ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  typography: {
    allVariants: {
      textTransform: "none",
      fontFamily: '"Rubik"',
      fontStyle: "normal",
    },
    h1: {
      fontFamily: '"Rubik"',
      fontSize: "2rem",
      fontWeight: "400",
      lineHeight: "3rem",
      letterSpacing: "0.0093rem",
    },
    h2: {
      fontFamily: '"Rubik"',
      fontWeight: "400",
      fontSize: "1.4rem",
      lineHeight: "2rem",
    },
    h3: {
      fontFamily: '"Rubik"',
      fontWeight: "400",
      fontSize: "1.125rem",
      lineHeight: "1.375rem",
    },
    h4: {
      fontWeight: "700",
      fontSize: "1rem",
      lineHeight: "1.025rem",
      letterSpacing: "0.03rem",
    },
    subtitle1: {
      fontWeight: "500",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.0093rem",
    },
    //tag
    subtitle2: {
      fontWeight: "700",
      fontSize: "1rem",
      lineHeight: "1rem",
    },
    body1: {
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.19rem",
    },
    body2: {
      fontWeight: "400",
      fontSize: "0.85rem",
      lineHeight: "1rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderWidth: "0.03rem 0.187rem 0.187rem 0.03rem;",
          borderColor: "#000000",
          borderStyle: "solid",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#EEEEEE",
          border: "none",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: (props) => {
          const buttonCss: CSSInterpolation = {};
          if (props.ownerState.variant === "outlined") {
            buttonCss.border = "0.125rem solid #A57B48";
            buttonCss.color = "#A57B48";
            buttonCss.padding = "0.1rem";
            buttonCss["&:hover"] = {
              backgroundColor: "rgba(165, 123, 72, 0.15)",
            };
          } else if (
            props.ownerState.variant === "contained" ||
            props.ownerState.LinkComponent === "button"
          ) {
            buttonCss.border = "none";
            buttonCss.padding = "0.4rem";
            buttonCss["&:hover"] = {
              backgroundColor:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #A57B48",
            };
          }
          return {
            ...buttonCss,
            fontFamily: "Rubik",
            fontWeight: "700",
            fontSize: "1rem",
            lineHeight: "1.625rem",
            letterSpacing: "0.029rem",
            borderRadius: "4.5rem",
            textTransform: "none",
            minWidth: "17.62rem",
          };
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderWidth: "0.031rem 0.18rem 0.18rem 0.031rem",
          borderStyle: "solid",
          borderColor: "#E08A32",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "0.5rem",
          borderRadius: "0.25rem",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.85rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#4D1F2D",
    },
    secondary: {
      main: "#80B192",
      //   main: "#57B48",
    },
  },
};

export default lightThemeOptions;
