


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(
    () => {
      const fetchResults = async () => {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(data?.items[0]);
        const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(videoData?.items);
      };
      fetchResults();
    }, [id]
  );
  return (
    <Box>
      <div style={{ height: '300px', background: "green", zIndex: 10 }} />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )

};

export default ChannelDetail