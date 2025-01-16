import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  IconButton,
} from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1C1C1C", color: "white" }}>
      {/* GET IN TOUCH Title */}
      <Typography
        variant="h1"
        sx={{
          fontSize: "9rem",
          fontWeight: 400,
          py: 6,
          borderBottom: "1px solid white",

          textAlign: "center",
          letterSpacing: "0.05em",
        }}
      >
        GET IN TOUCH
      </Typography>

      {/* Shipping Info Section */}
      <Box sx={{ borderBottom: "1px solid white" }}>
        <Container maxWidth="xxl">
          <Grid
            container
            sx={{
              py: 6,
              "& .MuiGrid-item": {
                position: "relative",
                "&:not(:last-child)::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "white",
                },
              },
            }}
          >
            <Grid item xs={12} md={4} sx={{ px: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <InventoryOutlinedIcon sx={{ fontSize: 80 }} />
                <Typography variant="h6" sx={{ fontSize: "1.5rem", mb: 2 }}>
                  Shipping
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#F5F5F5", lineHeight: 1.6 }}
                >
                  In-stock items shipped via White Glove or oversize will
                  typically ship within 2–3 weeks of purchase, unless otherwise
                  noted. Transit can take up to 14 business days.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} sx={{ px: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <LocalShippingOutlinedIcon
                  sx={{ fontSize: 80, color: "#F5F5F5" }}
                />
                <Typography variant="h6" sx={{ fontSize: "1.5rem", mb: 2 }}>
                  Delivery
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#F5F5F5", lineHeight: 1.6 }}
                >
                  Delivery requires an appointment and signature. A two-person
                  team will bring the item inside, place it in your chosen room,
                  assemble it, and remove packaging debris.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} sx={{ px: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <AssignmentReturnOutlinedIcon sx={{ fontSize: 80 }} />
                <Typography variant="h6" sx={{ fontSize: "1.5rem", mb: 2 }}>
                  Returns
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#F5F5F5", lineHeight: 1.6 }}
                >
                  Please verify that this item aligns with your specific
                  requirements before completing the purchase, as it does not
                  qualify for free returns and incurs a 15% restocking fee.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Links Section */}
      <Container maxWidth="xxl">
        <Grid
          container
          sx={{
            py: 6,
            pl: 4,
            pr: 4,
            "& .MuiGrid-item": {
              position: "relative",
              "&:not(:last-child)::after": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "1px",
              },
            },
          }}
        >
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: "1.2rem" }}>
              Social Media
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Facebook
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Pinterest
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Instagram
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Tiktok
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: "1.2rem" }}>
              Customer Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Top Questions
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Start a Return
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Rug Guide
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Gift Card
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: "1.2rem" }}>
              The Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Careers
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Customer Reviews
              </Typography>
              <Typography variant="body2" sx={{ color: "#999" }}>
                Accessibility Statement
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: "1.2rem" }}>
              Subscribe To Us!
            </Typography>
            <Typography variant="body2" sx={{ color: "#999", mb: 3 }}>
              Sign Up For Our Email List And Receive 10% Off Your First Order.
            </Typography>
            <Box sx={{ position: "relative" }}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Your Email Address"
                sx={{
                  "& .MuiInput-root": {
                    color: "white",
                    borderBottom: "1px solid #666",
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid #999",
                    },
                  },
                  "& .MuiInput-underline:before": {
                    borderBottom: "1px solid #666",
                  },
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 4,
                  color: "white",
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright */}
      <Box sx={{ borderTop: "1px solid #F5F5F5", py: 3 }}>
        <Container maxWidth="xxl">
          <Typography
            variant="body2"
            sx={{ color: "#999", textAlign: "center" }}
          >
            pra-code
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
