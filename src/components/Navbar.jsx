import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid #D0D0D0",
        py: "0.5rem",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "4rem",
            maxHeight: "4rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: "1rem", display: "flex", alignItems: "center" }}>
              <Box
                component="span"
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                luluandgeorgia
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "2vw" }}>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "clamp(14px, 1vw, 18px)",
                padding: "0.5vw 1vw",
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "clamp(14px, 1vw, 18px)",
                padding: "0.5vw 1vw",
              }}
            >
              Our Collections
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "clamp(14px, 1vw, 18px)",
                padding: "0.5vw 1vw",
              }}
            >
              Design Inspiration
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "clamp(14px, 1vw, 18px)",
                padding: "0.5vw 1vw",
              }}
            >
              Our Projects
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: "1vw" }}>
            <IconButton sx={{ padding: "0.8vw" }}>
              <PhoneIcon sx={{ fontSize: "clamp(20px, 1.4vw, 28px)" }} />
            </IconButton>
            <IconButton sx={{ padding: "0.8vw" }}>
              <ShoppingCartIcon sx={{ fontSize: "clamp(20px, 1.4vw, 28px)" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
