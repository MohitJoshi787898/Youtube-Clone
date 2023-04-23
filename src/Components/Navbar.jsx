import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { SearchBar } from "./index";

const Navbar = ({ videos, setVideos }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%", height: "60px", color: "secondary", p: "5px" }}
    >
      <Link to="/">
        <IconButton sx={{ color: "white", fontWeight: "bold" }} size="large">
          <YouTubeIcon sx={{ fontSize: 60, color: "red", mr: "8px" }} />
          Youtube
        </IconButton>
      </Link>
      <SearchBar videos={videos} setVideos={setVideos} />
    </Stack>
  );
};

export default Navbar;
