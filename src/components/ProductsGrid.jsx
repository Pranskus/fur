import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  Container,
  Divider,
} from "@mui/material";

const ProductsGrid = () => {
  const itemData = [
    {
      img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      title: "Modern Sofa",
      category: "Featured",
    },
    {
      img: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg",
      title: "Leather Armchair",
      price: "$899",
      category: "Chair",
    },
    {
      img: "https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg",
      title: "Side Table",
      price: "$299",
      category: "Table",
    },
    {
      img: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
      title: "Lounge Chair",
      price: "$599",
      category: "Chair",
    },
    {
      img: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg",
      title: "Accent Chair",
      price: "$499",
      category: "Chair",
    },
    {
      img: "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg",
      title: "Modern Couch",
      price: "$1,499",
      category: "Sofa",
    },
    {
      img: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
      title: "Grey Sofa",
      price: "$1,199",
      category: "Sofa",
    },
    {
      img: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
      title: "Rattan Chair",
      price: "$399",
      category: "Chair",
    },
    {
      img: "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg",
      title: "Wooden Cabinet",
      price: "$899",
      category: "Storage",
    },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF" }}>
      <Divider />
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 500,
                fontSize: "32px",
                letterSpacing: "-0.02em",
              }}
            >
              Products
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  cursor: "pointer",
                  "&:hover": { color: "#000" },
                }}
              >
                Find Your Dream Products with Ease!
              </Typography>
            </Box>
          </Box>

          <ImageList
            sx={{
              width: "100%",
              margin: 0,
              gap: "24px !important",
              gridTemplateColumns: "repeat(3, 1fr) !important",
            }}
            cols={3}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{
                  overflow: "hidden",
                  bgcolor: "#F8F8F8",
                  borderRadius: "4px",
                  "&:hover": {
                    "& img": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    height: 300,
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#666",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.category}
                  </Typography>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default ProductsGrid;
