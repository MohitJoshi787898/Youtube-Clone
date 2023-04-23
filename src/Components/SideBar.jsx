import React from "react";
import { Stack, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { constants } from "../Utils/constants";
const SideBar = ({ categories, setCategories }) => {
  return (
    <Stack direction={{xs:'row',md:'column'}} sx={{ height: {xs:'auto',md:'100vh'},overflowX:{xs:'auto',md:'hidden'} ,mx:"3px",gap:'5px' }}>
      {constants.map((constant) => (
        <button className="category-btn" key={constant.name} onClick={()=>setCategories(constant.name)} style={{background:categories===constant.name?'red':'black',height:"50px",opacity:categories===constant.name?1:0.8 }}>
          <span className="category-icon" style={{color:categories===constant.name?'white':'red'}}>
          <constant.icon sx={{mr:'8px',Size:"lagger"}}/>
          </span>
          <span className="category-name" style={{color:categories===constant.name?'black':'white',fontSize:"15px",fontWeight:'bold'}}>{constant.name}</span>

        </button>
      ))}
    </Stack>
 
  );
};

export default SideBar;
