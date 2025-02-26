import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { products } from "../data/products.js";
import ProductDialog from "./ProductDialog";
import { getImagePath } from "../utils/imagePath.js";

interface Category {
  id: string;
  name: string;
  images: string[];
}

interface Product {
  id: string;
  title: string;
  tag?: string;
  description: string[];
  images: string[];
  price?: number;
}

const categories: Category[] = [
  {
    id: "01",
    name: "Living Room",
    images: [
      "/images/P_sofa.jpg",
      "/images/P_sofa2.jpg",
      "/images/P_sofa3.jpg",
      "/images/P_armchair2.jpg",
    ],
  },
  {
    id: "02",
    name: "Bedroom",
    images: [
      "/images/P_armchair.jpg",
      "/images/P_armchair2.jpg",
      "/images/P_accchair.jpg",
    ],
  },
  {
    id: "03",
    name: "Dining Room",
    images: [
      "/images/P_armchair3.jpg",
      "/images/P_armchair4.jpg",
      "/images/P_accchair.jpg",
      "/images/P_sofa.jpg",
      "/images/P_armchair5.jpg",
    ],
  },
  {
    id: "04",
    name: "Office Room",
    images: [
      "/images/P_armchair3.jpg",
      "/images/P_armchair5.jpg",
      "/images/buy-barcelona-chair-vintage.jpg",
    ],
  },
  {
    id: "05",
    name: "Kitchen",
    images: [
      "/images/P_armchair3.jpg",
      "/images/P_armchair5.jpg",
      "/images/P_armchair2.jpg",
      "/images/P_accchair.jpg",
    ],
  },
];

console.log("Products:", products);

const ShopByRoom = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleCategoryClick = (
    categoryName: string,
    event: React.MouseEvent | React.TouchEvent
  ) => {
    event.preventDefault();
    setSelectedCategory(
      selectedCategory === categoryName ? null : categoryName
    );
  };

  const handleImageClick = (image: string) => {
    const product = Object.values(products).find(
      (product): product is Product =>
        product.images.includes(image) && "description" in product
    );

    if (product) {
      setSelectedProduct(product);
    } else {
      console.log("No product found for image:", image);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <Box
      id="collections-section"
      sx={{ width: "100%", bgcolor: "#FFFFFF", py: 6 }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 0,
          pb: 2,
          pt: 2,
          fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
          fontWeight: 600,
          borderTop: "1px solid #D0D0D0",
          borderBottom: "1px solid #D0D0D0",
          pl: { xs: 2, md: 2 },
        }}
      >
        Shop By Room
      </Typography>
      <List sx={{ py: 0 }}>
        {categories.map((room) => (
          <Box key={room.id}>
            <ListItem
              component="div"
              onTouchStart={(e) => handleCategoryClick(room.name, e)}
              onClick={(e) => handleCategoryClick(room.name, e)}
              sx={{
                borderBottom: selectedCategory === room.name ? 0 : 1,
                borderColor: "#D0D0D0",
                py: 2,
                pl: { xs: 2, sm: 4, md: 10 },
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
                userSelect: "none",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                  "& .arrow-icon": {
                    transform: "translateX(8px)",
                    opacity: 1,
                  },
                  "& .room-name": {
                    color: "#000",
                    transform: "translateX(8px)",
                  },
                  "& .room-id": {
                    opacity: 0.7,
                  },
                },
              }}
            >
              <ListItemText
                primary={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      className="room-name"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                        fontWeight: 500,
                        color: "#333",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {room.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Typography
                        className="room-id"
                        sx={{
                          fontSize: "0.875rem",
                          color: "#666",
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      >
                        {room.id}
                      </Typography>
                      <IconButton
                        className="arrow-icon"
                        sx={{
                          p: 0,
                          opacity: 0,
                          transition: "all 0.3s ease-in-out",
                          transform:
                            selectedCategory === room.name
                              ? "rotate(180deg)"
                              : "none",
                        }}
                      >
                        <KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />
                      </IconButton>
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            <Collapse in={selectedCategory === room.name}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderBottom: "1px solid #D0D0D0",
                }}
              >
                {}
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 40,
                    background:
                      "linear-gradient(to right, transparent, rgba(255,255,255,0.9))",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 40,
                    background:
                      "linear-gradient(to left, transparent, rgba(255,255,255,0.9))",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    py: 2,
                    overflowX: "auto",
                    overflowY: "hidden",
                    px: { xs: 2, sm: 4, md: 10 },
                    justifyContent: { xs: "flex-start", md: "center" },
                    "&::-webkit-scrollbar": {
                      height: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f8f8f8",
                      borderRadius: "2px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#ddd",
                      borderRadius: "2px",
                      "&:hover": {
                        background: "#ccc",
                      },
                    },
                    msOverflowStyle: "auto",
                    scrollbarWidth: "thin",
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth",
                    touchAction: "pan-x",
                    "&::after": {
                      content: '""',
                      minWidth: { xs: "10px", md: 0 },
                    },
                  }}
                >
                  {room.images.map((image, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={getImagePath(image)}
                      alt={`${room.name} ${index + 1}`}
                      onClick={() => handleImageClick(image)}
                      sx={{
                        height: 120,
                        width: "auto",
                        maxWidth: 200,
                        objectFit: "contain",
                        borderRadius: 1,
                        transition: "transform 0.3s ease",
                        flexShrink: 0,
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Collapse>
          </Box>
        ))}
      </List>

      {selectedProduct && (
        <ProductDialog
          product={selectedProduct}
          open={true}
          onClose={handleClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </Box>
  );
};

export default ShopByRoom;
