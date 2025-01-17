import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";
import ProductDialog from "./ProductDialog";
import { products, getProductsByCategory } from "../data/products";

const ProductsGrid = () => {
  // Add state for active category
  const [activeCategory, setActiveCategory] = React.useState("See All");
  // Add state for dialog
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [hoverTimeout, setHoverTimeout] = React.useState(null);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isDialogHovering, setIsDialogHovering] = React.useState(false);

  const categories = ["See All", "Sofas", "Accent Chairs", "Desk Chairs"];

  // Get filtered items based on active category
  const getFilteredItems = () => {
    if (activeCategory === "See All") return Object.values(products);
    if (activeCategory === "Sofas")
      return Object.values(products).filter((item) => item.title === "Sofa");
    if (activeCategory === "Accent Chairs")
      return Object.values(products).filter(
        (item) => item.title === "Accent Chair"
      );
    if (activeCategory === "Desk Chairs")
      return Object.values(products).filter((item) => item.title === "Chair");
    return Object.values(products);
  };

  const filteredItems = getFilteredItems();

  // Handle mouse enter for product
  const handleMouseEnter = (product) => {
    setIsHovering(true);
    const timeout = setTimeout(() => {
      setSelectedProduct(product);
      setDialogOpen(true);
    }, 1000);
    setHoverTimeout(timeout);
  };

  // Handle mouse leave for product
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    // Only close if dialog is not being hovered
    if (!isDialogHovering) {
      setDialogOpen(false);
    }
  };

  // Handle dialog hover
  const handleDialogMouseEnter = () => {
    setIsDialogHovering(true);
  };

  const handleDialogMouseLeave = () => {
    setIsDialogHovering(false);
    if (!isHovering) {
      setDialogOpen(false);
    }
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF", py: 6 }}>
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1800px !important",
          mx: "auto",
          px: { xs: 2, md: 2 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            width: "100%",
            borderTop: "1px solid #D0D0D0",
            borderBottom: "1px solid #D0D0D0",
            borderLeft: { xs: "1px solid #D0D0D0", md: "none" },
            borderRight: { xs: "1px solid #D0D0D0", md: "none" },
          }}
        >
          {/* Products Title */}
          <Box
            sx={{
              gridColumn: { xs: "span 4", md: "span 4", lg: "span 2" },
              borderRight: {
                xs: "none",
                md: "none",
                lg: "1px solid #D0D0D0",
              },
              borderBottom: "1px solid #D0D0D0",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3.5rem", sm: "5rem", md: "7rem" },
                fontWeight: 600,
                letterSpacing: "0.05em",
                textAlign: "center",
                py: { xs: 2, md: 0 },
              }}
            >
              Products
            </Typography>
          </Box>

          {/* Categories */}
          <Box
            sx={{
              gridColumn: { xs: "span 4", md: "span 4", lg: "span 2" },
              p: { xs: 1.5, sm: 2, md: 3 },
              borderBottom: "1px solid #D0D0D0",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 1, sm: 1.5, md: 2 },
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.7rem" },
                fontWeight: 700,
                textAlign: { xs: "center", md: "center", lg: "left" },
              }}
            >
              Find Your Dream Products with Ease!
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 1, sm: 1.5, md: 2 },
                justifyContent: {
                  xs: "center",
                  md: "center",
                  lg: "flex-start",
                },
              }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  sx={{
                    bgcolor:
                      category === activeCategory ? "#e1d5c7" : "#F5F5F5",
                    color: "#000",
                    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                    py: { xs: 0.5, md: 1 },
                    px: { xs: 1.5, md: 2 },
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      bgcolor: "#E5E5E5",
                    },
                  }}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Mobile Products Grid */}
          <Box
            sx={{
              gridColumn: "span 4",
              position: "relative",
              display: { xs: "block", md: "none" }, // Mobile grid
            }}
          >
            <ImageList
              sx={{
                width: "100%",
                m: 0,
                p: 0,
                gap: 0,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
              variant="quilted"
              cols={2}
              gap={0}
            >
              {(() => {
                // First separate chairs and sofas from filtered items
                const chairs = filteredItems.filter(
                  (item) => item.title === "Chair"
                );
                const sofas = filteredItems.filter(
                  (item) => item.title === "Sofa"
                );

                // Create groups of 2 chairs + 1 sofa
                const groupedItems = [];
                let chairIndex = 0;
                let sofaIndex = 0;

                while (chairIndex < chairs.length || sofaIndex < sofas.length) {
                  // Add 2 chairs if available
                  if (chairIndex < chairs.length) {
                    groupedItems.push(chairs[chairIndex]);
                    chairIndex++;
                  }
                  if (chairIndex < chairs.length) {
                    groupedItems.push(chairs[chairIndex]);
                    chairIndex++;
                  }
                  // Add 1 sofa if available
                  if (sofaIndex < sofas.length) {
                    groupedItems.push(sofas[sofaIndex]);
                    sofaIndex++;
                  }
                }

                return groupedItems.map((item) => (
                  <ImageListItem
                    key={item.id}
                    cols={item.title === "Sofa" ? 2 : 1}
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid #D0D0D0",
                      borderRight: "1px solid #D0D0D0",
                      m: 0,
                      p: 0,
                      aspectRatio: item.title === "Sofa" ? "2/1.2" : "1/1.2",
                      cursor: "pointer",
                      "&:hover img": {
                        transform: "scale(1.05) translateY(-5px)",
                      },
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
                      src={item.images[0]}
                      alt={item.id}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "16px",
                        transition: "all 0.3s ease-in-out",
                      }}
                    />
                  </ImageListItem>
                ));
              })()}
            </ImageList>
          </Box>

          {/* Desktop Products Grid - Preserved exactly as is */}
          <Box
            sx={{
              gridColumn: "span 4",
              position: "relative",
              display: { xs: "none", md: "block" }, // Only show on desktop
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
              {filteredItems.map((item, index) => {
                // Calculate positions using filteredItems instead of itemData
                let currentPosition = 0;
                for (let i = 0; i < index; i++) {
                  currentPosition += filteredItems[i].cols;
                }
                currentPosition = currentPosition % 4;

                // Check if item ends at right edge
                const isRightEdge = currentPosition + item.cols === 4;
                // Check if item starts at left edge
                const isLeftEdge = currentPosition === 0;

                // Calculate if item is in the last row
                let totalColsSoFar = 0;
                for (let i = 0; i < filteredItems.length; i++) {
                  if (i < index) {
                    totalColsSoFar += filteredItems[i].cols;
                  }
                }
                const rowPosition = Math.floor(totalColsSoFar / 4);
                const totalRows = Math.ceil(
                  filteredItems.reduce((sum, item) => sum + item.cols, 0) / 4
                );
                const isLastRow = rowPosition === totalRows - 1;

                return (
                  <ImageListItem
                    key={item.id}
                    cols={item.title === "Sofa" ? 2 : 1}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
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
                      aspectRatio: item.title === "Sofa" ? "2/1.2" : "1/1.2",
                      cursor: "pointer",
                      "&:hover img": {
                        transform: "scale(1.05) translateY(-5px)",
                      },
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
                      src={item.images[0]}
                      alt={item.id}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "16px",
                        transition: "all 0.3s ease-in-out",
                      }}
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Box>
        </Box>
      </Container>

      {/* Add Dialog with hover handlers */}
      <ProductDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        product={selectedProduct}
        onMouseEnter={handleDialogMouseEnter}
        onMouseLeave={handleDialogMouseLeave}
      />
    </Box>
  );
};

export default ProductsGrid;
