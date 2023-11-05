import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Provider as UserProvider } from "./components/providers/UserProvider";
import { themes } from "./theme";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GamesRouter } from "./pages/games";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = prefersDarkMode ? "dark" : "light";
  const currentTheme = createTheme(themes[theme]);

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/games/*" Component={GamesRouter} />
              <Route path="/auth/login" Component={LoginPage} />
              <Route path="/auth/signup" Component={SignupPage} />
              <Route path="*" Component={NotFoundPage} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
