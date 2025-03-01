import React, { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Button,
  TextField,
  Stack,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  Fade,
  Alert,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContext";

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

interface CheckoutProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

interface FormErrors {
  [key: string]: string;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  images: string[];
}

const EXAMPLE_DATA: FormData = {
  fullName: "John Smith",
  email: "john.smith@example.com",
  phone: "+46761234567",
  address: "Street of the city",
  city: "Vilnius",
  postalCode: "10001",
};

const Checkout: React.FC<CheckoutProps> = ({ open, onClose }) => {
  const { cartItems, clearCart } = useCart() as unknown as {
    cartItems: CartItem[];
    clearCart: () => void;
  };
  const [step, setStep] = useState<"details" | "payment" | "confirmation">(
    "details"
  );
  const [paymentMethod, setPaymentMethod] = useState<string>("credit");
  const [errors, setErrors] = useState<FormErrors>({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formRef = React.useRef<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 150 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formRef.current[name as keyof FormData] = value;

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    const form = formRef.current;

    if (!form.fullName) newErrors.fullName = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.postalCode) newErrors.postalCode = "Postal code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === "details" && validateForm()) {
      setStep("payment");
    } else if (step === "payment") {
      handlePlaceOrder();
    }
  };

  const handleBack = () => {
    if (step === "payment") {
      setStep("details");
    }
  };

  const handlePlaceOrder = () => {
    setStep("confirmation");
    setOrderPlaced(true);
    clearCart();
  };

  const handleClose = () => {
    if (orderPlaced) {
      setStep("details");
      setOrderPlaced(false);
      formRef.current = {
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
      };
    }
    onClose();
  };

  const fillExampleData = () => {
    formRef.current = { ...EXAMPLE_DATA };

    const event = new Event("input", { bubbles: true });
    Object.keys(EXAMPLE_DATA).forEach((name) => {
      const element = document.querySelector(
        `input[name="${name}"]`
      ) as HTMLInputElement | null;
      if (element) {
        element.value = EXAMPLE_DATA[name as keyof FormData];
        element.dispatchEvent(event);
      }
    });
  };

  const DetailsForm = () => (
    <Stack spacing={2} sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <Button
          onClick={fillExampleData}
          size="small"
          sx={{
            animation: "pulse 2s infinite",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.04)",
              animation: "none",
            },
            "@keyframes pulse": {
              "0%": {
                opacity: 0.6,
              },
              "50%": {
                opacity: 1,
              },
              "100%": {
                opacity: 0.6,
              },
            },
          }}
        >
          Fill Example Data
        </Button>
      </Box>
      <TextField
        required
        fullWidth
        label="Full Name"
        name="fullName"
        defaultValue={formRef.current.fullName}
        onChange={handleInputChange}
        error={!!errors.fullName}
        helperText={errors.fullName}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        fullWidth
        label="Email"
        name="email"
        type="email"
        defaultValue={formRef.current.email}
        onChange={handleInputChange}
        error={!!errors.email}
        helperText={errors.email}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        fullWidth
        label="Phone"
        name="phone"
        defaultValue={formRef.current.phone}
        onChange={handleInputChange}
        error={!!errors.phone}
        helperText={errors.phone}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        fullWidth
        label="Address"
        name="address"
        defaultValue={formRef.current.address}
        onChange={handleInputChange}
        error={!!errors.address}
        helperText={errors.address}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        fullWidth
        label="City"
        name="city"
        defaultValue={formRef.current.city}
        onChange={handleInputChange}
        error={!!errors.city}
        helperText={errors.city}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        fullWidth
        label="Postal Code"
        name="postalCode"
        defaultValue={formRef.current.postalCode}
        onChange={handleInputChange}
        error={!!errors.postalCode}
        helperText={errors.postalCode}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );

  const PaymentForm = () => (
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
            transition: "all 0.2s",
            bgcolor: paymentMethod === method.id ? "#F5F5F5" : "transparent",
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
                <Typography variant="subtitle1">{method.title}</Typography>
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
  );

  const Confirmation = () => (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Alert severity="success" sx={{ mb: 3 }}>
        Order placed successfully!
      </Alert>
      <Typography variant="h6" gutterBottom>
        Thank you for your order
      </Typography>
      <Typography color="text.secondary">
        We'll send you an email confirmation with order details and tracking
        information.
      </Typography>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "100%", sm: 600 },
          bgcolor: "#FFFFFF",
          p: 3,
        },
      }}
    >
      <Fade in={true}>
        <Box>
          {}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {step === "confirmation"
                ? "Order Confirmed"
                : step === "payment"
                  ? "Payment Method"
                  : "Checkout"}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {}
          <Box sx={{ mb: 4 }}>
            {step === "details" && <DetailsForm />}
            {step === "payment" && <PaymentForm />}
            {step === "confirmation" && <Confirmation />}
          </Box>

          {}
          {step !== "confirmation" && (
            <>
              <Divider sx={{ mb: 2 }} />
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography color="text.secondary">Subtotal</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography color="text.secondary">Shipping</Typography>
                  <Typography>${shipping.toFixed(2)}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography color="text.secondary">Tax</Typography>
                  <Typography>${tax.toFixed(2)}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">${total.toFixed(2)}</Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleNext}
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "#333",
                    },
                  }}
                >
                  {step === "payment" ? "Place Order" : "Continue to Payment"}
                </Button>
                {step === "payment" && (
                  <Button fullWidth onClick={handleBack} sx={{ mt: 1 }}>
                    Back
                  </Button>
                )}
              </Box>
            </>
          )}
        </Box>
      </Fade>
    </Drawer>
  );
};

export default Checkout;
