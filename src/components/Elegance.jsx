import { Box, Typography, Grid, Container } from "@mui/material";

const Elegance = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",
        marginTop: 10,
        marginBottom: 10,
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
              borderTop: "1px solid #D0D0D0",
              borderBottom: "1px solid #D0D0D0",
              height: "800px",
              overflow: "hidden",
              paddingRight: 6,
              paddingLeft: 6,
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
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              borderBottom: "1px solid #D0D0D0",
            }}
          >
            {/* Text Content */}
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                pb: { xs: 2, md: 3 },
                borderBottom: "1px solid #D0D0D0",
                borderTop: "1px solid #D0D0D0",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "3rem", md: "5rem" },
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "0.1em",
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
                p: { xs: 2, md: 3 },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  lineHeight: 1.6,
                  color: "text.secondary",
                  maxWidth: "80%",
                }}
              >
                Fashion Designer and Creative Director Carly Cushnie has entered
                her next chapter. Known for her influence in the fashion world,
                Carly brings her celebrated sense of style to interiors with her
                first-ever line of furniture exclusively for Lulu and Georgia.
                Every piece in the collection has a distinctive round quality
                with unique materials, and textures.
              </Typography>

              {/* Arrow icon in the corner */}
              <Box
                sx={{
                  position: "absolute",
                  right: 32,
                  bottom: 32,
                  transform: "rotate(-45deg)",
                  fontSize: "1.5rem",
                }}
              >
                ↗
              </Box>
            </Box>

            {/* Bottom Image Container */}
            <Box
              sx={{
                position: "relative",
                height: "420px", // Adjust this value as needed
                overflow: "hidden",
                ml: 3,
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
                  objectPosition: "center 80%",
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
