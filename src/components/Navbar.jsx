import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isCartOpen, setIsCartOpen, cartItems } = useCart();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (item) => {
    if (item === "Our Projects") {
      const productsSection = document.getElementById("products-section");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    } else if (item === "Our Collections") {
      const collectionsSection = document.getElementById("collections-section");
      if (collectionsSection) {
        collectionsSection.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    }
  };

  const menuItems = ["About Us", "Our Projects", "Our Collections"];

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: "1px solid #D0D0D0",
          py: { xs: "0.25rem", md: "0.5rem" },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: { xs: "3rem", md: "4rem" },
              maxHeight: { xs: "3rem", md: "4rem" },
              px: { xs: 1, md: 2 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  mr: { xs: "0.5rem", md: "1rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  luluandgeorgia
                </Box>
              </Box>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: "2vw" }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  onClick={() => handleScroll(item)}
                  sx={{
                    textTransform: "none",
                    fontSize: "clamp(14px, 1vw, 18px)",
                    padding: "0.5vw 1vw",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Icons */}
            <Box sx={{ display: "flex", gap: { xs: "0.5vw", md: "1vw" } }}>
              <IconButton sx={{ padding: { xs: "0.4vw", md: "0.8vw" } }}>
                <PhoneIcon
                  sx={{
                    fontSize: { xs: "1.2rem", md: "clamp(20px, 1.4vw, 28px)" },
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => setIsCartOpen(true)}
                sx={{ color: "black" }}
              >
                <Badge badgeContent={cartItems.length} color="primary">
                  <ShoppingCartIcon
                    sx={{
                      fontSize: {
                        xs: "1.2rem",
                        md: "clamp(20px, 1.4vw, 28px)",
                      },
                    }}
                  />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  handleScroll(item);
                  handleDrawerToggle();
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "1rem",
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>

      {/* Add Cart component */}
      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
