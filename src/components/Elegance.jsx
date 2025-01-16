import { Box, Typography, Grid, Container } from "@mui/material";

const Elegance = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",
        my: { xs: 5, sm: 7, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          {/* Left Image */}
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              borderRight: "1px solid #D0D0D0",
              borderTop: "1px solid #D0D0D0",
              borderBottom: "1px solid #D0D0D0",
              height: { xs: "300px", sm: "600px", md: "800px" },
              overflow: "hidden",
              px: { xs: 1, sm: 4, md: 6 },
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
                p: { xs: 1, sm: 2, md: 3 },
                objectFit: "cover",
                objectPosition: { xs: "80% center", md: "65% center" },
                marginLeft: "-10%",
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>

          {/* Right Content */}
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              borderBottom: "1px solid #D0D0D0",
              display: "flex",
              flexDirection: "column",
              height: { xs: "300px", sm: "600px", md: "800px" },
            }}
          >
            {/* Text Content */}
            <Box
              sx={{
                p: { xs: 1, sm: 2, md: 3 },
                borderBottom: "1px solid #D0D0D0",
                borderTop: "1px solid #D0D0D0",
                height: { xs: "40%", md: "auto" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "3.5rem", md: "5rem" },
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: { xs: "0.05em", md: "0.1em" },
                }}
              >
                Timeless
                <br />
                Elegance
              </Typography>
            </Box>

            {/* Text and Arrow Section */}
            <Box
              sx={{
                position: "relative",
                p: { xs: 1, sm: 2, md: 3 },
                height: { xs: "30%", md: "auto" },
                display: { xs: "none", sm: "block" }, // Hide on very small screens
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.65rem", sm: "0.7rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  maxWidth: { xs: "95%", sm: "90%", md: "80%" },
                }}
              >
                Fashion Designer and Creative Director Carly Cushnie has entered
                her next chapter. Known for her influence in the fashion world,
                Carly brings her celebrated sense of style to interiors with her
                first-ever line of furniture exclusively for Lulu and Georgia.
                Every piece in the collection has a distinctive round quality
                with unique materials, and textures.
              </Typography>

              <Box
                sx={{
                  position: "absolute",
                  right: { xs: 8, sm: 24, md: 32 },
                  bottom: { xs: 8, sm: 24, md: 32 },
                  transform: "rotate(-45deg)",
                  fontSize: { xs: "1rem", sm: "1.35rem", md: "1.5rem" },
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "rotate(-45deg) scale(1.2)",
                  },
                }}
              >
                ↗
              </Box>
            </Box>

            {/* Bottom Image Container */}
            <Box
              sx={{
                position: "relative",
                height: { xs: "30%", sm: "350px", md: "420px" },
                overflow: "hidden",
                ml: { xs: 1, sm: 3 },
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="/images/mika-coffee-table-oak-black-p45991-2882031_image.jpg"
                alt="Marble Table"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: { xs: "center 60%", md: "center 80%" },
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 0)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Elegance;
