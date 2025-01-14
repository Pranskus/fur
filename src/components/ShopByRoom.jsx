import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const ShopByRoom = () => {
  const rooms = [
    { id: "01", name: "Living Room" },
    { id: "02", name: "Bedroom" },
    { id: "03", name: "Dining Room" },
    { id: "04", name: "Office Room" },
    { id: "05", name: "Kitchen" },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Shop By Room
      </Typography>
      <List>
        {rooms.map((room) => (
          <ListItem
            key={room.id}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <ListItemText
              primary={room.name}
              secondary={room.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ShopByRoom;
