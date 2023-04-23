import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  Avatar,
  CardContent,
} from "@mui/material";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { FeatchFromAPI } from "../Utils/FeatchFromAPI";
import { VideoCard,Video } from "./index";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [RecomendedVideo, setRecomendedVideo] = useState([]);
  useEffect(() => {
    FeatchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    FeatchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
      setRecomendedVideo(data.items)
    );
  }, [id]);
  console.log(videoDetail, "Recomended Video");
  if (!videoDetail || !RecomendedVideo) return "Loading";
  return (
    <Stack direction={{xs:'column',md:'row'}}>
      <Card sx={{ background: "black",height:'98vh' ,p:'5px',gap:"5px" ,border:".5px solid gray",width :{xs:'100%',md:'75%'} }}>
        <ReactPlayer
          width={{xs:'95%',md:"90%"}}
       height="70vh"
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        <CardContent color="white">
          <Typography variant="h6" color="white">
            {videoDetail?.snippet?.title}
          </Typography>
          <Box display='flex' justifyContent="space-between"alignItems='start' >
            <Box
              display="flex"
              justifyContent="start"
              gap={1}
              alignItems="center"
            >
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Logo"
                src={videoDetail?.snippet?.thumbnails?.high?.url}
              />
              <Typography variant="subtitle1" color="white">
                {videoDetail?.snippet?.channelTitle}
              </Typography>
            </Box>
            <Stack>
              <Typography color='white' variant="h6">
                Views: {<span style={{fontSize:"15px"}}>{videoDetail?.statistics?.viewCount}</span>}
              </Typography>
              <Typography color='white' variant="h6">
                Likes: {<span style={{fontSize:"15px"}}>{videoDetail?.statistics?.likeCount}</span>}
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{width:{xs:'100%',md:'25%'}}} >
      <Video videos={RecomendedVideo}/>
      </Box>
    </Stack>
  );
};

export default VideoDetail;
