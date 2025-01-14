import { Box, Grid, Typography, Container } from "@mui/material";

const TimelessSection = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 0 }}>
          <Grid container>
            {/* Left Half - Split into two rows */}
            <Grid item xs={12} md={6} sx={{ borderRight: "1px solid #D0D0D0" }}>
              <Grid container>
                {/* Top Row - Green Chair with Text */}
                <Grid
                  item
                  xs={12}
                  sx={{ borderBottom: "1px solid #D0D0D0", p: 3 }}
                >
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
                      At Lulu and Georgia, we blend heritage with innovation to
                      bring you exclusive designer pieces and rare vintage
                      finds.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,

                      p: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src="/images/findlay-accent-armchair-speckled-stone-sustainable-boucle-p45580-2879795_image.jpg"
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
                <Grid item xs={12} sx={{ p: 3 }}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: "#D0D0D0",
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
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Half - Brown Chair (Full Height) */}
            <Grid item xs={12} md={6} sx={{ p: 3 }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/emile-swivel-armchair-speckled-stone-sustainable-boucle-p43504-2862193_image.jpg"
                  alt="Brown Chair"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TimelessSection;
