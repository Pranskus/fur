import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "64px",
      fontWeight: 500,
    },
    h2: {
      fontSize: "48px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "32px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "16px",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E5E5E5",
          marginTop: "40px",
          marginBottom: "40px",
        },
      },
    },
  },
});
