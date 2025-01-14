import { Box, Grid, Typography, Container } from "@mui/material";

const TimelessSection = () => {
  return (
    <Box sx={{ py: 6, width: "100%" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Column - Green Chair */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: "#F8F8F8",
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                component="img"
                src="/images/lc2-feather.jpg" // Add your green chair image
                alt="Green Chair"
                sx={{
                  width: "100%",
                  height: "auto",
                  mb: 2,
                }}
              />
              <Typography variant="h5" sx={{ mb: 2 }}>
                Carly Cushnie X Lulu And Georgia
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Fashion Designer and Creative Director Carly Cushnie has entered
                her next chapter. Known for her influence in the fashion world.
              </Typography>
              <Box
                component="a"
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  mt: "auto",
                }}
              >
                Discover More →
              </Box>
            </Box>
          </Grid>

          {/* Middle Column - Cream Sofa */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  bgcolor: "#E5E5E5",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  zIndex: 1,
                }}
              >
                <Typography variant="caption">Exclusive</Typography>
              </Box>
              <Box
                component="img"
                src="/images/contemporary-cream-sofa.png" // Add your cream sofa image
                alt="Cream Sofa"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fit",
                }}
              />
            </Box>
          </Grid>

          {/* Right Column - Brown Chair */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/images/grand-confort-lc3-chair.jpg" // Add your brown chair image
              alt="Brown Chair"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TimelessSection;
