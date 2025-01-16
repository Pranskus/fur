import { Box, Typography, Grid, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF" }}>
      {/* Hero Title */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, md: 4, lg: 6 },
          width: "100%",
          gap: { xs: 3, md: 2 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "4rem",
              sm: "6rem",
              md: "8rem",
              lg: "11.25rem",
            },
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
            width: { xs: "100%", sm: "80%", md: "18.75rem" },
            height: "auto",
            objectFit: "contain",
            flex: "0 0 auto",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05) translateY(-5px)",
            },
          }}
        />
      </Box>

      {/* Timeless Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container>
            {/* Left Half - Split into two rows */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                borderRight: { xs: "none", md: "1px solid #D0D0D0" },
                borderTop: "1px solid #D0D0D0",
              }}
            >
              <Grid container>
                {/* Top Row - Green Chair with Text */}
                <Grid item xs={12} sx={{ borderBottom: "1px solid #D0D0D0" }}>
                  <Box
                    sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 4, lg: 6 } }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#333",
                        maxWidth: "450px",
                        fontSize: { xs: "0.875rem", sm: "1rem" },
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
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 3,
                      p: { xs: 2, sm: 3 },
                    }}
                  >
                    <Box
                      component="img"
                      src="/images/findlay-accent-armchair-speckled-stone-sustainable-boucle-p45580-2879795_image.jpg"
                      alt="Green Chair"
                      sx={{
                        width: { xs: "100%", sm: "50%" },
                        height: "auto",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05) translateY(-5px)",
                        },
                      }}
                    />
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 500,
                          fontSize: { xs: "1rem", sm: "1.1rem" },
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
                          fontSize: { xs: "0.875rem", sm: "1rem" },
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
                          fontSize: { xs: "0.8rem", sm: "0.875rem" },
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
                  sx={{
                    p: { xs: 2, sm: 3 },
                    borderBottom: "1px solid #D0D0D0",
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: "#e1d5c7",
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
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05) translateY(-5px)",
                        },
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
                p: { xs: 2, sm: 3 },
                borderBottom: "1px solid #D0D0D0",
                borderTop: { xs: "none", md: "1px solid #D0D0D0" },
                minHeight: { xs: "300px", sm: "400px", md: "auto" },
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
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translate(-50%, -52%) scale(1.05)",
                    },
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
