import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Elegance from "./components/Elegance";
import ProductsGrid from "./components/ProductsGrid";
import ShopByRoom from "./components/ShopByRoom";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
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
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
