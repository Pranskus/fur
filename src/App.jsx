import { ThemeProvider, CssBaseline, Box, Fab, Zoom } from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Elegance from "./components/Elegance";
import ProductsGrid from "./components/ProductsGrid";
import ShopByRoom from "./components/ShopByRoom";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";

function App() {
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            margin: "0 auto",
            width: "100%",
            "@media (min-width: 1400px)": {
              transform: "scale(var(--scale-factor))",
              transformOrigin: "top center",
              height: "calc(100% * var(--scale-factor))",
            },
          }}
        >
          <Box
            sx={{
              margin: "0 auto",
              maxWidth: {
                xs: "100%",
                sm: "600px",
                md: "900px",
                lg: "1200px",
                xl: "1400px",
              },
            }}
          >
            <Navbar />
            <HeroSection />
            <Elegance />
            <ProductsGrid />
            <ShopByRoom />
            <Footer />
          </Box>
        </Box>

        {/* Back to Top Button */}
        <Zoom in={showBackToTop}>
          <Fab
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: 32,
              right: 32,
              bgcolor: "#e1d5c7",
              "&:hover": {
                bgcolor: "#d4c4b3",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
