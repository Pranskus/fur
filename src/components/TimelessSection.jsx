import { Box, Grid, Typography, Container } from "@mui/material";

const TimelessSection = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Left Half - Split into two rows */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Top Row - Green Chair with Text */}
              <Grid item xs={12}>
                <Box sx={{ display: "flex", gap: 3, bgcolor: "#F8F8F8", p: 3 }}>
                  <Box
                    component="img"
                    src="/images/lc2-feather.jpg"
                    alt="Green Chair"
                    sx={{
                      width: "50%",
                      height: "auto",
                    }}
                  />
                  <Box sx={{ width: "50%" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 500,
                        fontSize: "1.1rem",
                      }}
                    >
                      Carly Cushnie X Lulu And Georgia
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 2,
                        lineHeight: 1.6,
                      }}
                    >
                      Fashion Designer and Creative Director Carly Cushnie has
                      entered her next chapter. Known for her influence in the
                      fashion world.
                    </Typography>
                    <Box
                      component="a"
                      href="#"
                      sx={{
                        textDecoration: "underline",
                        color: "inherit",
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "0.875rem",
                        "&:hover": {
                          opacity: 0.8,
                        },
                      }}
                    >
                      Discover More →
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* Bottom Row - Cream Sofa */}
              <Grid item xs={12}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "#E5E5E5",
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      zIndex: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      Exclusive
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src="/images/contemporary-cream-sofa.png"
                    alt="Cream Sofa"
                    sx={{
                      width: "100%",
                      height: "auto",
                      bgcolor: "#F8F8F8",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Half - Brown Chair (Full Height) */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
              }}
            >
              <Box
                component="img"
                src="/images/grand-confort-lc3-chair.jpg"
                alt="Brown Chair"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  bgcolor: "#F8F8F8",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TimelessSection;
