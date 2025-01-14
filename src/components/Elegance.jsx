import { Box, Typography, Grid, Container } from "@mui/material";

const Elegance = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",
        borderBottom: "1px solid #D0D0D0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          {/* Left Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              borderRight: "1px solid #D0D0D0",
              height: "800px",
              overflow: "hidden",
              padding: 6,
            }}
          >
            <Box
              component="img"
              src="/images/paulo-accent-chair-speckled-stone-sustainable-boucle-p46054-2885000_image.jpg"
              alt="Designer Portrait"
              sx={{
                width: "120%",
                height: "100%",
                display: "block",
                p: 3,
                objectFit: "cover",
                objectPosition: "65% center",
                marginLeft: "-10%",
              }}
            />
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            {/* Text Content */}
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                pb: { xs: 2, md: 3 },
                borderBottom: "1px solid #D0D0D0",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "3rem", md: "5rem" },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Timeless
                <br />
                Elegance
              </Typography>
            </Box>

            {/* Bottom Image */}
            <Box
              sx={{
                height: "465px",
                overflow: "hidden",
              }}
            >
              <Box sx={{ position: "relative", paddingLeft: 5 }}>
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    lineHeight: 1.6,
                    color: "text.secondary",
                    mt: 2,
                    maxWidth: "80%",
                  }}
                >
                  Fashion Designer and Creative Director Carly Cushnie has
                  entered her next chapter. Known for her influence in the
                  fashion world, Carly brings her celebrated sense of style to
                  interiors with her first-ever line of furniture exclusively
                  for Lulu and Georgia. Every piece in the collection has a
                  distinctive round quality with unique materials, and textures.
                </Typography>

                {/* Arrow icon in the corner */}
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    transform: "rotate(-45deg)",
                    fontSize: "1.5rem",
                  }}
                >
                  ↗
                </Box>
              </Box>
              <Box sx={{ p: 3 }}>
                <Box
                  component="img"
                  src="/images/mika-coffee-table-oak-black-p45991-2882031_image.jpg"
                  alt="Marble Table"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    marginTop: "-25%",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Elegance;
