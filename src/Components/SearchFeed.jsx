import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FeatchFromAPI } from "../Utils/FeatchFromAPI";
import { Box, Button } from "@mui/material";
import { VideoCard, ChannelCard, Video } from "./index";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    FeatchFromAPI(`search?part=snippet&&q=${searchTerm}`).then((data) =>
      setSearchResult(data.items)
    );
  }, [searchTerm]);
  if (!searchResult) return "Loading...";
  return (
    <Box p={3}>
      <Video videos={searchResult} />
    </Box>
  );
};

export default SearchFeed;
