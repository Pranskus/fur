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
        <Grid container>
          {/* Left Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ borderRight: "1px solid #D0D0D0", p: 3 }}
          >
            <Box
              component="img"
              src="/images/paulo-accent-chair-speckled-stone-sustainable-boucle-p46054-2885000_image.jpg"
              alt="Designer Portrait"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Right Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ p: 3, display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ mb: "auto" }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "5rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Timeless
                <br />
                Elegance
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: 3,
                  maxWidth: "90%",
                }}
              >
                Fashion Designer and Creative Director Carly Cushnie has entered
                her next chapter. Known for her influence in the fashion world,
                Carly brings her celebrated sense of style to interiors with her
                first-ever line of furniture exclusively for Lulu and Georgia.
                Every piece in the collection has a distinctive round quality
                with unique materials, and textures.
              </Typography>
            </Box>

            {/* Bottom Image */}
            <Box
              component="img"
              src="/images/naxos-round-side-table-latte-marble-p46020-2881849_image.jpg"
              alt="Marble Table"
              sx={{
                width: "100%",
                height: "40%",
                objectFit: "cover",
                mt: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Elegance;
