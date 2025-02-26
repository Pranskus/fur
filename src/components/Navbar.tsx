import React, { useState } from "react";
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
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import { CartItem } from "../types/product";

interface NavbarProps {
  onAboutClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isCartOpen, setIsCartOpen, cartItems } = useCart() as unknown as {
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: CartItem[];
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (item: string) => {
    if (item === "About Us") {
      onAboutClick();
      setMobileOpen(false);
    } else if (item === "Our Projects") {
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

  const menuItems: string[] = ["About Us", "Our Projects", "Our Collections"];

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
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", md: "none" },
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
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
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#FFFFFF",
              pt: 2,
            },
          }}
        >
          <List sx={{ pt: 0 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item}
                disablePadding
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <Box
                  onClick={() => {
                    handleScroll(item);
                    handleDrawerToggle();
                  }}
                  sx={{
                    width: "100%",
                    px: 3,
                    py: 2,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "text.primary",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
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
