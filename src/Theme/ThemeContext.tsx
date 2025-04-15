import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  PaletteMode,
} from "@mui/material";

interface ThemeContextType {
  toggleTheme: () => void;
  themeMode: PaletteMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the ThemeProviderCustom component
export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    (localStorage.getItem("theme") as PaletteMode) || "light"
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  // Define the light theme
  const lightTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          primary: {
            main: "#ffffff",
          },
          secondary: {
            main: "#333333",
          },
          background: {
            default: "#f2f2f2",
            paper: "#f5f5f5",
          },
          text: {
            primary: "#333333",
            secondary: "#555555",
          },
        },
        typography: {
          fontFamily: "Unbounded, sans-serif",
          h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "2rem",
            },
            "@media (max-width:600px)": {
              fontSize: "1.5rem",
            },
          },
          h2: {
            fontSize: "2rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "1.75rem",
            },
            "@media (max-width:600px)": {
              fontSize: "1.5rem",
            },
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "1.25rem",
            },
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          },
          h4: {
            fontSize: "1.2rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "1rem",
            },
            "@media (max-width:600px)": {
              fontSize: "0.875rem",
            },
          },
          h5: {
            fontSize: "1rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "0.875rem",
            },
            "@media (max-width:600px)": {
              fontSize: "0.75rem",
            },
          },
          body1: {
            fontSize: "1rem",
            fontWeight: 400,
            "@media (max-width:960px)": {
              fontSize: "0.875rem",
            },
            "@media (max-width:600px)": {
              fontSize: "0.75rem",
            },
          },
        },
      }),
    []
  );

  // Define the dark theme
  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#b6b5af",
          },
          secondary: {
            main: "#fdf9cf",
          },
          background: {
            default: "#141413",
            paper: "#000000",
          },
          text: {
            primary: "#fdf9cf",
            secondary: "#bbbbbb",
          },
        },
        typography: {
          fontFamily: "Unbounded, sans-serif",
          h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "2rem",
            },
            "@media (max-width:600px)": {
              fontSize: "1.5rem",
            },
          },
          h2: {
            fontSize: "2rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "1.75rem",
            },
            "@media (max-width:600px)": {
              fontSize: "1.5rem",
            },
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "1.25rem",
            },
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          },
          h4: {
            fontSize: "1.2rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "1rem",
            },
            "@media (max-width:600px)": {
              fontSize: "0.875rem",
            },
          },
          h5: {
            fontSize: "1rem",
            fontWeight: 700,
            "@media (max-width:960px)": {
              fontSize: "0.875rem",
            },
            "@media (max-width:600px)": {
              fontSize: "0.75rem",
            },
          },
          body1: {
            fontSize: "1rem",
            fontWeight: 400,
            "@media (max-width:960px)": {
              fontSize: "0.875rem",
            },
            "@media (max-width:600px)": {
              fontSize: "0.75rem",
            },
          },
        },
      }),
    []
  );

  const theme = useMemo(
    () => (themeMode === "light" ? lightTheme : darkTheme),
    [themeMode, lightTheme, darkTheme]
  );

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProviderCustom"
    );
  }
  return context;
};
