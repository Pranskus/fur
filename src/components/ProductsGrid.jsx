import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";

const ProductsGrid = () => {
  const categories = [
    "See All",
    "Sofas",
    "Sets",
    "Accent Chairs",
    "Sectional Sofas",
    "Desk Chairs",
  ];

  const itemData = [
    {
      img: "/images/P_sofa.jpg",
      title: "Modern Sofa",
      tag: "Exclusive",
      cols: 2, // Takes 2 columns
    },
    {
      img: "/images/P_accchair.jpg",
      title: "Accent Chair",
      tag: "New",
      cols: 1, // Takes 2 columns
    },
    {
      img: "/images/P_armchair.jpg",
      title: "Side Table",
      tag: "New",
      cols: 1,
    },
    {
      img: "/images/P_armchair2.jpg",
      title: "Lounge Chair",
      cols: 1,
    },
    {
      img: "/images/P_armchair3.jpg",
      title: "Accent Chair",
      tag: "Exclusive",
      cols: 1, // Takes 2 columns
    },
    {
      img: "/images/P_sofa2.jpg",
      title: "Modern Couch",
      tag: "New",
      cols: 2, // Takes 2 columns
    },
    {
      img: "/images/P_sofa3.jpg",
      title: "Grey Sofa",
      cols: 2, // Takes 2 columns
    },
    {
      img: "/images/P_armchair4.jpg",
      title: "Rattan Chair",
      tag: "Exclusive",
      cols: 1,
    },
    {
      img: "/images/P_armchair5.jpg",
      title: "Wooden Cabinet",
      tag: "New",
      cols: 1,
    },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF", py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // Create 4 columns
            width: "100%",
            mb: 4,
            gap: 3,
          }}
        >
          {/* Products Title - spans 2 columns */}
          <Box sx={{ gridColumn: "span 2" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "6rem",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Products
            </Typography>
          </Box>

          {/* Categories - spans 2 columns */}
          <Box sx={{ gridColumn: "span 2" }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontSize: "1.7rem",
                fontWeight: 700,
              }}
            >
              Find Your Dream Products with Ease!
            </Typography>
            <Stack direction="row" spacing={2}>
              {categories.map((category) => (
                <Button
                  key={category}
                  sx={{
                    bgcolor: category === "SEE ALL" ? "#E5E5E5" : "transparent",
                    color: "#000",
                    px: 2.5,
                    py: 1.2,
                    borderRadius: 1,
                    fontSize: "0.5rem", // Reduced font size
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    "&:hover": {
                      bgcolor: "#E5E5E5",
                    },
                  }}
                >
                  {category.toUpperCase()}
                </Button>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Products Grid */}
        <ImageList
          sx={{
            gap: 3,
            gridTemplateColumns: "repeat(4, 1fr) !important",
          }}
          cols={4}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                bgcolor: "#F8F8F8",
                borderRadius: "4px",
                overflow: "hidden",
                position: "relative",
                gridColumn: `span ${item.cols}`, // Controls how many columns this item takes
              }}
            >
              {item.tag && (
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
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    {item.tag}
                  </Typography>
                </Box>
              )}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: item.cols === 2 ? "600px" : "400px", // Taller height for 2-column items
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default ProductsGrid;
