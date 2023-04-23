import React, { useState, useEffect } from "react";
import { Box, Stack,Typography } from "@mui/material";
import { SideBar, Video } from "./index";
import { FeatchFromAPI } from "../Utils/FeatchFromAPI";

const Feed = () => {
  const [categories, setCategories] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    FeatchFromAPI(`search?part=snippet&&q=${categories}`).then((data) =>
      setVideos(data.items)
    );
  }, [categories]);

  if (!videos?.length) return "Loading videos...";
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ height: "91vh", overflow: "hidden" }}
    >
      <Box
        width={{ xs: "100%", md: "150px" }}
        borderRight="1px solid gray"
        sx={{ height: { xs: "auto", md: "91vh" } }}
      >
        <SideBar categories={categories} setCategories={setCategories} />
      </Box>
      <Box sx={{ ml: "10}px" }}>
        <Box display="block" sx={{ mt: "5px", pl: "5px" }}>
          <Typography fontSize={30} fontWeight="bold" color="white">
            {categories} <span style={{ color: "red" }}>Video</span>
          </Typography>
        </Box>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
