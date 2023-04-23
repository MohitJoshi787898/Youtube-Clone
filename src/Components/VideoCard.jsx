import React, { useState, useEffect } from "react";
import {Link}  from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Avatar from "@mui/material/Avatar";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Stack>
      <Card
        sx={{ width: 345, height: "250px", background: "rgb(30 29 29 / 87%)" }}
      >
        <Link  style={{textDecoration:"none"}} to={`/video/${videoId}`}>
          <CardMedia
            sx={{ height: 145,backgroundSize:'cover' }}
            image={snippet?.thumbnails?.high?.url}
            title="green iguana"
            style={{backgroundSize: 'cover'}}
            b
          />
        </Link>
        <CardContent>
          <Link style={{textDecoration:"none"}} to={`/video/${videoId}`}>
            <Typography
              sx={{ color: "#fff" }}
              gutterBottom
              variant="subtitle1"
              component="div"
            >
              {40 < snippet?.title.length
                ? snippet?.title.slice(0, 40)
                : snippet?.title}
            </Typography>
          </Link>
          <Link  style={{textDecoration:"none"}} to={`/channel/${videoId}`}>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar
                alt="Logo"
                sx={{ width: "25px", height: "25px" }}
                src={snippet?.thumbnails?.high?.url}
              />
              <Typography
                sx={{ color: "#fff" }}
                variant="h6"
                alignItems="center"
                display="flex"
                gap={1}
              >
                {snippet?.channelTitle}
              </Typography>
              <CheckCircleOutlineIcon
                fontSize="10px"
                background="white"
                color="primary"
              />
            </Box>
          </Link>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default VideoCard;
