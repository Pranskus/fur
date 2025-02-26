import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Typography,
  Box,
  Fade,
  Zoom,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StarIcon from "@mui/icons-material/Star";
import PhoneIcon from "@mui/icons-material/Phone";

interface CompanyInfoDialogProps {
  open: boolean;
  onClose: () => void;
}

interface Section {
  title: string;
  icon: React.ReactNode;
  content: string;
}

const CompanyInfoDialog: React.FC<CompanyInfoDialogProps> = ({
  open,
  onClose,
}) => {
  const sections: Section[] = [
    {
      title: "Our Design Philosophy",
      icon: (
        <StorefrontIcon
          sx={{
            fontSize: 28,
            animation: "pulse 2s infinite ease-in-out",
            "@keyframes pulse": {
              "0%": { transform: "scale(1)", opacity: 0.7 },
              "50%": { transform: "scale(1.1)", opacity: 1 },
              "100%": { transform: "scale(1)", opacity: 0.7 },
            },
          }}
        />
      ),
      content:
        "We believe that furniture should be more than just functional – it should tell a story and create an emotional connection. Our pieces are designed to be conversation starters, combining innovative design with traditional craftsmanship.",
    },
    {
      title: "Sustainability Commitment",
      icon: (
        <AutoAwesomeIcon
          sx={{
            fontSize: 28,
            animation: "sparkle 2s infinite",
            "@keyframes sparkle": {
              "0%": { opacity: 1, transform: "scale(1)" },
              "50%": { opacity: 0.5, transform: "scale(1.2)" },
              "100%": { opacity: 1, transform: "scale(1)" },
            },
          }}
        />
      ),
      content:
        "We're committed to sustainable practices in furniture production. Our partnerships with artisans and manufacturers prioritize environmentally conscious methods and materials, ensuring that our beautiful pieces don't come at the expense of our planet.",
    },
    {
      title: "Designer Collaborations",
      icon: (
        <StarIcon
          sx={{
            fontSize: 28,
            animation: "pulse 1.5s infinite",
            "@keyframes pulse": {
              "0%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.2)" },
              "100%": { transform: "scale(1)" },
            },
          }}
        />
      ),
      content:
        "We regularly collaborate with renowned designers and emerging talents to create exclusive collections that you won't find anywhere else. These partnerships allow us to offer unique perspectives and fresh interpretations of classic designs.",
    },
    {
      title: "Customer Experience",
      icon: (
        <PhoneIcon
          sx={{
            fontSize: 28,
            animation: "shake 1s infinite",
            "@keyframes shake": {
              "0%, 100%": { transform: "rotate(-10deg)" },
              "50%": { transform: "rotate(10deg)" },
            },
          }}
        />
      ),
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
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 500 }}
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
          <Zoom in={open} timeout={500}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StorefrontIcon
                sx={{
                  fontSize: 28,
                  animation: "pulse 2s infinite ease-in-out",
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)", opacity: 0.7 },
                    "50%": { transform: "scale(1.1)", opacity: 1 },
                    "100%": { transform: "scale(1)", opacity: 0.7 },
                  },
                }}
              />
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                About Lulu and Georgia
              </Typography>
            </Box>
          </Zoom>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 2 }}>
        <DialogContentText component="div">
          <Fade in={open} timeout={800}>
            <Box>
              <Typography paragraph>
                At Lulu and Georgia, we blend heritage with innovation to bring
                you exclusive designer pieces and rare vintage finds. Our
                journey began with a passion for exceptional design and a
                commitment to bringing unique, high-quality furniture to
                discerning customers.
              </Typography>

              <Typography paragraph>
                Our curated collection represents the perfect fusion of timeless
                elegance and contemporary style. Each piece is carefully
                selected to ensure it meets our exacting standards for quality,
                design, and craftsmanship.
              </Typography>

              {sections.map((section, index) => (
                <Fade
                  in={open}
                  timeout={1000 + index * 200}
                  key={section.title}
                >
                  <Box sx={{ mt: index === 0 ? 4 : 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      {section.icon}
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {section.title}
                      </Typography>
                    </Box>
                    <Typography paragraph>{section.content}</Typography>
                  </Box>
                </Fade>
              ))}
            </Box>
          </Fade>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyInfoDialog;
