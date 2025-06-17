"use client";

import { useState, useEffect, use } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useParams } from "next/navigation";

import Videos from "../../components/Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const params = useParams();
  const query = params.searchTerm;

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${query}`).then((data) => {
      setVideos(data.items);
    });
  }, [query]);

  return (
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
        Risultati ricerca per:
        <span style={{ color: "#F31503" }}> {query}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
