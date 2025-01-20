import React, { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkout from "./Checkout";

const Cart = ({ open, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    onClose();
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 400 },
            bgcolor: "#FFFFFF",
            p: 3,
          },
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Shopping Cart
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Cart Items */}
        <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
          {cartItems.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="body1" color="text.secondary">
                Your cart is empty
              </Typography>
            </Box>
          ) : (
            <Stack spacing={2}>
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: 2,
                    borderRadius: 1,
                    bgcolor: "#F5F5F5",
                  }}
                >
                  <Box
                    component="img"
                    src={item.images[0]}
                    alt={item.title}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: "contain",
                      bgcolor: "#fff",
                      borderRadius: 1,
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1)
                          )
                        }
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  <IconButton
                    onClick={() => removeFromCart(item.id)}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Footer */}
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="subtitle1">Subtotal</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              ${subtotal.toFixed(2)}
            </Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
            sx={{
              bgcolor: "#000",
              color: "#fff",
              py: 1.5,
              "&:hover": {
                bgcolor: "#333",
              },
            }}
          >
            Checkout
          </Button>
        </Box>
      </Drawer>

      <Checkout
        open={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
};

export default Cart;
