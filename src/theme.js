import { createTheme } from "@mui/material/styles";

// Base width for scaling (1400px)
const baseWidth = 1400;

// Calculate scaling factor based on viewport width
const getScaleFactor = () => {
  if (typeof window === "undefined") return 1;
  return Math.min(window.innerWidth / baseWidth, 2); // Cap at 2x scaling
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2560,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@media (min-width: 1400px)": {
          ":root": {
            "--scale-factor": `${getScaleFactor()}`,
          },
          html: {
            fontSize: `calc(16px * var(--scale-factor))`,
          },
          ".MuiContainer-root": {
            maxWidth: `${baseWidth}px !important`,
            transform: "scale(var(--scale-factor))",
            transformOrigin: "top center",
          },
        },
      },
    },
  },
});
