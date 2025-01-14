import { ThemeProvider, CssBaseline, Container } from "@mui/material";
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
      <Navbar />
      <Container maxWidth="lg">
        <HeroSection />
        <TimelessSection />
        <ProductsGrid />
        <ShopByRoom />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
