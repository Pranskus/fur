import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ShopByRoom = () => {
  const rooms = [
    { id: "01", name: "Living Room" },
    { id: "02", name: "Bedroom" },
    { id: "03", name: "Dining Room" },
    { id: "04", name: "Office Room" },
    { id: "05", name: "Kitchen" },
  ];

  return (
    <Box
      sx={{
        my: { xs: 6, md: 6, lg: 6, xl: 10, xxl: 10 },
      }}
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
        {rooms.map((room) => (
          <ListItem
            key={room.id}
            sx={{
              borderBottom: 1,
              borderColor: "#D0D0D0",
              py: 2,
              pl: { xs: 2, sm: 4, md: 10 },
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
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
                      }}
                    >
                      <ArrowForwardIcon sx={{ fontSize: "1.2rem" }} />
                    </IconButton>
                  </Box>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ShopByRoom;
