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
          px: { xs: 2, md: 4, lg: 6 },
          width: "100%",
          columnGap: {
            xs: "2rem",
            "@media (min-width: 1400px)": {
              columnGap: "32px !important",
            },
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "11.25rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            flex: "0 1 auto",
          }}
        >
          Furniture
        </Typography>
        <Box
          component="img"
          src="/images/buy-barcelona-chair-vintage.jpg"
          alt="White Chair"
          sx={{
            width: "18.75rem",
            height: "auto",
            objectFit: "contain",
            flex: "0 0 auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
