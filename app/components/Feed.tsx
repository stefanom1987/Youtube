"use client";

import { useState, useEffect, use } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Notizie");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Stefano's Youtube Clone <br /> &copy; 2025
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: "white" }}
        >
          Sezione
          <span style={{ color: "#F31503" }}> {selectedCategory}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
