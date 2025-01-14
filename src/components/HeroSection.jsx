import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", pb: 0, width: "100%" }}>
      {/* Main Title with Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
          borderBottom: "1px solid #D0D0D0",
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
    </Box>
  );
};

export default HeroSection;
