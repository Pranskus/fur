import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Divider,
  Grid,
  Paper,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Container,
} from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { useCart } from "../context/CartContext";

const deliveryInfo = [
  {
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 40 }} />,
    title: "Free Shipping",
    description: "Free shipping on orders over $150",
  },
  {
    icon: <PaymentOutlinedIcon sx={{ fontSize: 40 }} />,
    title: "Secure Payment",
    description: "Multiple secure payment methods",
  },
  {
    icon: <SecurityOutlinedIcon sx={{ fontSize: 40 }} />,
    title: "Money-Back Guarantee",
    description: "30-day return policy",
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 40 }} />,
    title: "Customer Support",
    description: "24/7 dedicated support",
  },
];

const steps = ["Cart", "Shipping", "Payment", "Review"];

const paymentMethods = [
  {
    id: "credit",
    title: "Credit Card",
    description: "Pay with Visa, Mastercard, or American Express",
  },
  {
    id: "paypal",
    title: "PayPal",
    description: "Pay with your PayPal account",
  },
  {
    id: "klarna",
    title: "Klarna",
    description: "Pay in 4 interest-free installments",
  },
];

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [activeStep, setActiveStep] = React.useState(0);
  const [paymentMethod, setPaymentMethod] = React.useState("credit");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 150 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%", bgcolor: "#FFFFFF", py: 6 }}>
        {/* Stepper */}
        <Box sx={{ width: "100%", mb: 6 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Grid container spacing={4}>
          {/* Left side - Order Summary */}
          <Grid item xs={12} md={8}>
            {activeStep === 0 && (
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #D0D0D0",
                  borderRadius: 1,
                  mb: 3,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Order Summary
                </Typography>
                <Divider sx={{ mb: 2 }} />
                {cartItems.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 2,
                      p: 2,
                      bgcolor: "#F5F5F5",
                      borderRadius: 1,
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
                      <Typography variant="body2" color="text.secondary">
                        Quantity: {item.quantity}
                      </Typography>
                      <Typography variant="subtitle2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Paper>
            )}

            {activeStep === 1 && (
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #D0D0D0",
                  borderRadius: 1,
                  mb: 3,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Shipping Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Postal Code"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            )}

            {activeStep === 2 && (
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #D0D0D0",
                  borderRadius: 1,
                  mb: 3,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Payment Method
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <RadioGroup
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  {paymentMethods.map((method) => (
                    <Paper
                      key={method.id}
                      elevation={0}
                      sx={{
                        p: 2,
                        mb: 2,
                        border: "1px solid #D0D0D0",
                        borderRadius: 1,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        bgcolor:
                          paymentMethod === method.id
                            ? "#F5F5F5"
                            : "transparent",
                        "&:hover": {
                          bgcolor: "#F5F5F5",
                        },
                      }}
                    >
                      <FormControlLabel
                        value={method.id}
                        control={<Radio />}
                        label={
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 500 }}
                            >
                              {method.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {method.description}
                            </Typography>
                          </Box>
                        }
                        sx={{ width: "100%", m: 0 }}
                      />
                    </Paper>
                  ))}
                </RadioGroup>
              </Paper>
            )}

            {/* Delivery Information */}
            <Grid container spacing={2}>
              {deliveryInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      border: "1px solid #D0D0D0",
                      borderRadius: 1,
                      height: "100%",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        bgcolor: "#F5F5F5",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 1,
                      }}
                    >
                      {info.icon}
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {info.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right side - Order Details */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid #D0D0D0",
                borderRadius: 1,
                position: "sticky",
                top: 24,
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Order Details
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography color="text.secondary">Subtotal</Typography>
                  <Typography>$299.00</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography color="text.secondary">Shipping</Typography>
                  <Typography>Free</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography color="text.secondary">Tax</Typography>
                  <Typography>$29.90</Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">$328.90</Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", mt: 2 }}
              >
                All transactions are secure and encrypted.
              </Typography>

              <Button
                variant="contained"
                fullWidth
                onClick={() =>
                  setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
                }
                sx={{
                  mt: 2,
                  bgcolor: "#000",
                  color: "#fff",
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "#333",
                  },
                }}
              >
                {activeStep === steps.length - 1 ? "Place Order" : "Continue"}
              </Button>

              {activeStep > 0 && (
                <Button
                  fullWidth
                  onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                  sx={{ mt: 1 }}
                >
                  Back
                </Button>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Checkout;
