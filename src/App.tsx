import React, { useState, useEffect } from "react";
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
import CompanyInfoDialog from "./components/CompanyInfoDialog";

interface CartItem {
  id: number;
}

const AppContent: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingCart, setShowFloatingCart] = useState(false);
  const [isCompanyDialogOpen, setIsCompanyDialogOpen] = useState(false);
  const { setIsCartOpen, cartItems } = useCart() as unknown as {
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: CartItem[];
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarElement = document.querySelector(".MuiAppBar-root");
      const navbarHeight =
        navbarElement instanceof HTMLElement ? navbarElement.offsetHeight : 0;
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
          <Navbar onAboutClick={() => setIsCompanyDialogOpen(true)} />
          <HeroSection onAboutClick={() => setIsCompanyDialogOpen(true)} />
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
      <CompanyInfoDialog
        open={isCompanyDialogOpen}
        onClose={() => setIsCompanyDialogOpen(false)}
      />
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
