import React from "react";
import { Box } from "@mui/material";
import {VideoCard,ChannelCard} from "./index"


const Video = ({ videos }) => {
  if(!videos) return "Loading videos.."
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={1}
      sx={{
        mt: "5px",
        pl: "5px",
        width: "100%",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
        
      ))}
    </Box>
  );
};

export default Video;
