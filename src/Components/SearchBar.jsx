import React, { useState } from "react";
import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ videos, setVideos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const Navigate = useNavigate();
  const handelSearch = () => {
    Navigate(`/search/:${searchTerm}`);
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        mr: "50px",
        alignItems: "center",
        background: "#fff",
        borderRadius: "15px",
        p: "5px",
        height: "auto",
      }}
    >
      <input
        type="text"
        className="search-input"
        placeholder="Search.."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <SearchIcon sx={{ color: "red", fontSize: 30 }} onClick={handelSearch} />
    </Stack>
  );
};

export default SearchBar;
