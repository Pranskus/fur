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
      img: "/images/P_armchair4.jpg",
      title: "Rattan Chair",
      tag: "Exclusive",
      cols: 1,
    },
    {
      img: "/images/P_sofa3.jpg",
      title: "Grey Sofa",
      cols: 2, // Takes 2 columns
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
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1800px !important", // Force max-width on container
          mx: "auto", // Auto margins for centering
          px: { xs: 2, md: 2 }, // Responsive padding
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            width: "100%",
            borderTop: "1px solid #D0D0D0",
            borderBottom: "1px solid #D0D0D0",
          }}
        >
          {/* Products Title */}
          <Box
            sx={{
              gridColumn: "span 2",
              borderRight: "1px solid #D0D0D0",
              borderBottom: "1px solid #D0D0D0",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "7rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              Products
            </Typography>
          </Box>

          {/* Categories */}
          <Box
            sx={{
              gridColumn: "span 2",
              p: { xs: 2, md: 3 },
              pb: { xs: 2, md: 3 },
              borderBottom: "1px solid #D0D0D0",
            }}
          >
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
            <Stack
              direction="row"
              spacing={2}
              sx={{
                flexWrap: "nowrap",
                overflowX: "auto",
              }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  sx={{
                    bgcolor: category === "See All" ? "#e1d5c7" : "#F5F5F5",
                    color: "#000",
                    fontSize: "0.6rem",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                    flex: "0 0 auto",
                    "&:hover": {
                      bgcolor: "#E5E5E5",
                    },
                  }}
                >
                  {category}
                </Button>
              ))}
            </Stack>
          </Box>

          {/* Products Grid */}
          <Box
            sx={{
              gridColumn: "span 4",
              position: "relative",
            }}
          >
            <ImageList
              sx={{
                width: "100%",
                m: 0,
                p: 0,
                gap: 0,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
              variant="quilted"
              cols={4}
              gap={0}
            >
              {itemData.map((item, index) => {
                // Calculate actual grid position considering previous items' column spans
                let currentPosition = 0;
                for (let i = 0; i < index; i++) {
                  currentPosition += itemData[i].cols;
                }
                currentPosition = currentPosition % 4;

                // Check if item ends at right edge
                const isRightEdge = currentPosition + item.cols === 4;
                // Check if item starts at left edge
                const isLeftEdge = currentPosition === 0;

                // Calculate if item is in the last row
                let totalColsSoFar = 0;
                for (let i = 0; i < itemData.length; i++) {
                  if (i < index) {
                    totalColsSoFar += itemData[i].cols;
                  }
                }
                const rowPosition = Math.floor(totalColsSoFar / 4);
                const totalRows = Math.ceil(
                  itemData.reduce((sum, item) => sum + item.cols, 0) / 4
                );
                const isLastRow = rowPosition === totalRows - 1;

                return (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols}
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRight: isRightEdge ? "none" : "1px solid #D0D0D0",
                      borderBottom: isLastRow ? "none" : "1px solid #D0D0D0",
                      borderLeft: isLeftEdge ? "none" : "none",
                      m: 0,
                      p: 0,
                      aspectRatio: item.cols === 2 ? "2/1.2" : "1/1.2",
                    }}
                  >
                    {item.tag && (
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
                          sx={{ fontWeight: 500, fontSize: "0.75rem" }}
                        >
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
                        height: "100%",
                        objectFit: "contain",
                        padding: "16px",
                      }}
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsGrid;
