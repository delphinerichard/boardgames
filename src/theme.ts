import { Theme, createTheme } from "@mui/material";
import lightThemeOptions from "./lightThemeOptions";

export const LightTheme: Theme = createTheme({
  ...lightThemeOptions,
});

export const DarkTheme: Theme = createTheme({
  ...lightThemeOptions,
});

export type Themes = "light" | "dark";
export const themes: { [key in Themes]: Theme } = {
  dark: DarkTheme,
  light: LightTheme,
};
