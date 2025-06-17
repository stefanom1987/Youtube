"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Box } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  const params = useParams();

  console.log(channelDetails, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${params.id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${params.id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [params.id]);

  return (
    <>
      <Box minHeight='95vh'>
        <Box>
          <div
            style={{
              background: `linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)`,
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard
            channelDetail={channelDetails}
            marginTop='-110px'
          />
        </Box>
        <Box
          display='flex'
          p='2'
        >
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};
export default ChannelDetails;
