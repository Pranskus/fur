import { Box, Typography, Grid, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF" }}>
      {/* Hero Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
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

      {/* Timeless Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Grid container>
            {/* Left Half - Split into two rows */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                borderRight: "1px solid #D0D0D0",
                borderTop: "1px solid #D0D0D0",
              }}
            >
              <Grid container>
                {/* Top Row - Green Chair with Text */}
                <Grid item xs={12} sx={{ borderBottom: "1px solid #D0D0D0" }}>
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
                <Grid
                  item
                  xs={12}
                  sx={{ p: 3, borderBottom: "1px solid #D0D0D0" }}
                >
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
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Half - Brown Chair */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                p: 3,
                borderBottom: "1px solid #D0D0D0",
                borderTop: "1px solid #D0D0D0",
              }}
            >
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
                    maxWidth: "90%",
                    maxHeight: "90%",
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

export default HeroSection;
