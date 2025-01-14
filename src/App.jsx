import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TimelessSection from "./components/TimelessSection";
import ProductsGrid from "./components/ProductsGrid";
import ShopByRoom from "./components/ShopByRoom";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: {
            xs: "100%",
            sm: "600px",
            md: "900px",
            lg: "1200px",
            xl: "1536px",
            // Custom breakpoint for 4K screens
            "@media (min-width: 2560px)": {
              maxWidth: "2000px",
            },
          },
        }}
      >
        <Navbar />
        <HeroSection />
        <TimelessSection />
        <ProductsGrid />
        <ShopByRoom />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
