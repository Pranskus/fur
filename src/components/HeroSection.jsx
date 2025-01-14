import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", pb: 4, width: "100%" }}>
      {/* Main Title with Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
          borderBottom: "2px solid #E5E5E5",
          px: { xs: 2, md: 4, lg: 6 }, // Responsive padding
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "80px", md: "180px" },
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            flex: 1,
          }}
        >
          Furniture
        </Typography>
        <Box
          component="img"
          src="/images/buy-barcelona-chair-vintage.jpg" // Updated image path
          alt="White Chair"
          sx={{
            width: { xs: "200px", md: "300px" },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Subtitle */}
      <Box sx={{ py: 3, px: { xs: 2, md: 4, lg: 6 } }}>
        {" "}
        {/* Matching padding */}
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            maxWidth: "450px",
          }}
        >
          At Lulu and Georgia, we blend heritage with innovation to bring you
          exclusive designer pieces and rare vintage finds.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
