import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhoneIcon from "@mui/icons-material/Phone";

const CompanyInfoDialog = ({ open, onClose }) => {
  const sections = [
    {
      title: "Our Design Philosophy",
      icon: <MenuIcon sx={{ fontSize: 28 }} />,
      content:
        "We believe that furniture should be more than just functional – it should tell a story and create an emotional connection. Our pieces are designed to be conversation starters, combining innovative design with traditional craftsmanship.",
    },
    {
      title: "Sustainability Commitment",
      icon: <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />,
      content:
        "We're committed to sustainable practices in furniture production. Our partnerships with artisans and manufacturers prioritize environmentally conscious methods and materials, ensuring that our beautiful pieces don't come at the expense of our planet.",
    },
    {
      title: "Designer Collaborations",
      icon: <ShoppingCartIcon sx={{ fontSize: 28 }} />,
      content:
        "We regularly collaborate with renowned designers and emerging talents to create exclusive collections that you won't find anywhere else. These partnerships allow us to offer unique perspectives and fresh interpretations of classic designs.",
    },
    {
      title: "Customer Experience",
      icon: <PhoneIcon sx={{ fontSize: 28 }} />,
      content:
        "From selection to delivery, we ensure a seamless experience. Our design consultants are always available to help you find the perfect pieces for your space, and our white-glove delivery service ensures your furniture arrives in perfect condition.",
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 2,
        },
      }}
    >
      <DialogTitle sx={{ p: 2, pb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MenuIcon sx={{ fontSize: 28 }} />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              About Lulu and Georgia
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 2 }}>
        <DialogContentText component="div">
          <Typography paragraph>
            At Lulu and Georgia, we blend heritage with innovation to bring you
            exclusive designer pieces and rare vintage finds. Our journey began
            with a passion for exceptional design and a commitment to bringing
            unique, high-quality furniture to discerning customers.
          </Typography>

          <Typography paragraph>
            Our curated collection represents the perfect fusion of timeless
            elegance and contemporary style. Each piece is carefully selected to
            ensure it meets our exacting standards for quality, design, and
            craftsmanship.
          </Typography>

          {sections.map((section, index) => (
            <Box key={section.title} sx={{ mt: index === 0 ? 4 : 6 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                {section.icon}
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {section.title}
                </Typography>
              </Box>
              <Typography paragraph>{section.content}</Typography>
            </Box>
          ))}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyInfoDialog;
