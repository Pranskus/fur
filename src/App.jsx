import {
  ThemeProvider,
  CssBaseline,
  Box,
  Fab,
  Zoom,
  Badge,
} from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Elegance from "./components/Elegance";
import ProductsGrid from "./components/ProductsGrid";
import ShopByRoom from "./components/ShopByRoom";
import Footer from "./components/Footer";
import { CartProvider, useCart } from "./context/CartContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

// Create AppContent component that uses useCart
const AppContent = () => {
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [showFloatingCart, setShowFloatingCart] = React.useState(false);
  const { setIsCartOpen, cartItems } = useCart();

  React.useEffect(() => {
    const handleScroll = () => {
      const navbarHeight =
        document.querySelector(".MuiAppBar-root")?.offsetHeight || 0;
      setShowBackToTop(window.scrollY > 500);
      setShowFloatingCart(window.scrollY > navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
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

      {/* Floating Buttons */}
      <Box
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Floating Cart Button */}
        <Zoom in={showFloatingCart}>
          <Fab
            onClick={() => setIsCartOpen(true)}
            sx={{
              bgcolor: "#F5F5F5",
              "&:hover": {
                bgcolor: "#E5E5E5",
              },
            }}
          >
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Fab>
        </Zoom>

        {/* Back to Top Button */}
        <Zoom in={showBackToTop}>
          <Fab
            onClick={scrollToTop}
            sx={{
              bgcolor: "#F5F5F5",
              "&:hover": {
                bgcolor: "#E5E5E5",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Box>
    </ThemeProvider>
  );
};

// Main App component that provides CartProvider
function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
