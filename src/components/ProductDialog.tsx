import React, { useState, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCart } from "../context/CartContext";
import { getImagePath } from "../utils/imagePath";
import { Product } from "../types/product";

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({
  open,
  onClose,
  product,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { addToCart } = useCart() as {
    addToCart: (product: Product, quantity: number) => void;
  };
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setIsInCart(true);
    }
  };

  useEffect(() => {
    if (open) {
      setIsInCart(false);
      setQuantity(1);
    }
  }, [open, product]);

  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "#FFFFFF",
          borderRadius: 0,
          m: { xs: 1, sm: 2, md: 4 },
          height: { xs: "90vh", sm: "80vh" },
          maxHeight: { xs: "90vh", sm: "80vh" },
          overflow: "hidden",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          position: "relative",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
            bgcolor: "white",
            "&:hover": { bgcolor: "#f5f5f5" },
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: "100%",
          }}
        >
          {}
          <Box
            sx={{
              flex: "1 1 60%",
              p: 4,
              display: "flex",
              flexDirection: "column",
              height: { xs: "50%", md: "100%" },
            }}
          >
            {}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                height: "calc(100% - 80px)",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={getImagePath(product.images[selectedImage])}
                alt={product.title}
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  maxHeight: "500px",
                  transition: "all 0.3s ease-in-out",
                  transform: "scale(1)",
                }}
              />
            </Box>

            {}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                height: "70px",
                justifyContent: "center",
              }}
            >
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={getImagePath(img)}
                  alt={`View ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  sx={{
                    width: "70px",
                    height: "70px",
                    cursor: "pointer",
                    border: "1px solid #D0D0D0",
                    p: 1,
                    objectFit: "contain",
                    opacity: selectedImage === index ? 1 : 0.7,
                    transform:
                      selectedImage === index ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      borderColor: "#000",
                      opacity: 1,
                      transform: "scale(1.05)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {}
          <Box
            sx={{
              flex: "1 1 40%",
              p: 4,
              borderLeft: { xs: "none", md: "1px solid #D0D0D0" },
              borderTop: { xs: "1px solid #D0D0D0", md: "none" },
              height: { xs: "50%", md: "100%" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  {product.title}
                </Typography>
                {product.tag && (
                  <Box
                    sx={{
                      display: "inline-flex",
                      bgcolor: "#e1d5c7",
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                      {product.tag}
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Button
                  variant="text"
                  onClick={handleAddToCart}
                  sx={{
                    bgcolor: isInCart ? "#e1d5c7" : "#F5F5F5",
                    color: "#000",
                    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                    py: { xs: 0.5, md: 1 },
                    px: { xs: 1.5, md: 2 },
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      bgcolor: isInCart ? "#d4c4b3" : "#E5E5E5",
                    },
                  }}
                >
                  {isInCart ? "Added to Cart" : "Add to Cart"}
                </Button>

                <IconButton
                  onClick={() => setIsFavorite(!isFavorite)}
                  sx={{
                    borderRadius: 1,
                    p: 1,
                    "&:hover": {
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  {isFavorite ? (
                    <FavoriteIcon sx={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                pr: 2,
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                },
              }}
            >
              {product.description.map((line, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  component="div"
                  sx={{
                    mb: line === "" ? 2 : 1,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    fontWeight:
                      line === "Product Summary" || line === "Dimensions"
                        ? 600
                        : 400,
                    color:
                      line === "Product Summary" || line === "Dimensions"
                        ? "text.primary"
                        : "text.secondary",
                  }}
                >
                  {line}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
