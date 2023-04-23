import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FeatchFromAPI } from "../Utils/FeatchFromAPI";
import { Box, Typography, Card, Stack, Avatar, CardMedia } from "@mui/material";
import { VideoCard } from "./index";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channaDetails, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    FeatchFromAPI(`channels?part=snippet,statistics&id=${id}`).then(
      (response) => setChannelDetail(response.items)
    );
    FeatchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  });
  if (!channaDetails) return   <Typography variant="h4" color ="red">Loading</Typography>;

  return (
    <Box
      backgroundColo="black"
      width="98%"
      m="1%"
      height="100vh"
      sx={{ overflowY: "auto" }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          p="10px"
          border=".5px solid gray"
          borderRadius="10px"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar
              sx={{ width: 150, height: 150 }}
              src={channaDetails[0]?.snippet?.thumbnails?.high?.url}
            />
          </Box>
          <Box
            color="white"
            display="flex"
            flexDirection="column"
            justifyContent={{ xs: "center", md: "start" }}
          >
            <Typography variant="h4">
              {channaDetails[0]?.snippet?.title}
            </Typography>
            <Box
              display="flex"
              gap={2}
              alignItems="center"
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "start" }}
            >
              <Typography variant="subtitle1">
                {channaDetails[0]?.snippet?.customUrl}
              </Typography>
              <Typography variant="subtitle2" color="white">
                {channaDetails[0]?.statistics?.subscriberCount} subscribers
              </Typography>
              <Typography variant="subtitle2" color="white">
                {channaDetails[0]?.statistics?.videoCount} Videos
              </Typography>
            </Box>
            <Typography variant=" body1">
              {channaDetails[0]?.snippet?.description}
            </Typography>
          </Box>
        </Stack>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={1}
          sx={{
            mt: "5px",
            pl: "5px",
          }}
        >
          {!videos
            ? "Loading..."
            : videos.map((item, index) => (
                <Box key={index}>
                  {item.id.videoId && <VideoCard video={item} />}
                  {item.id.channelId && <ChannelCard video={item} />}
                </Box>
              ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
