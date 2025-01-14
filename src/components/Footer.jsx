import { Box, Grid, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 6 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 4 }}>
          GET IN TOUCH
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Shopping</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet...
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Delivery</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet...
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Returns</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet...
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
