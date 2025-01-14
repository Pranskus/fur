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
        borderBottom: "1px solid #E5E5E5",
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "64px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src="/logo.png"
                alt="LG"
                sx={{ height: 24, mr: 1 }}
              />
              <Box component="span" sx={{ fontSize: "18px", fontWeight: 500 }}>
                luluandgeorgia
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 4 }}>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              About Us
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Our Collections
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Design Inspiration
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Our Projects
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
