import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Avatar from "@mui/material/Avatar";

const ChannelCard = ({
  video: {
    id: { channelId },
    snippet,
  },
}) => {
  return (
    <Stack
      sx={{
        height: "250px",
        width: "304px",
        background: "rgb(30 29 29 / 87%)",
      }}
    >
      <Link to={`/channel/${channelId}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            Width: 345,
            background: "rgb(30 29 29 / 87%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "250px",
          }}
        >
          <Avatar
            alt="Logo"
            sx={{ height: 150, width: 150 }}
            src={snippet?.thumbnails?.high?.url}
          />
          <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
            <Typography sx={{ color: "#fff" }} gutterBottom variant="h6">
              {snippet?.channelTitle}
            </Typography>

            <CheckCircleOutlineIcon fontSize="10px" color="primary" />
          </Box>
        </Card>
      </Link>
    </Stack>
  );
};

export default ChannelCard;
