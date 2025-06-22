"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player";

import { Box, Typography, Stack, colors } from "@mui/material";
import { Check, CheckCircle } from "@mui/icons-material";

import Videos from "@/app/components/Videos";
import { fetchFromAPI } from "@/app/utils/fetchFromAPI";

type VideoDetailType = {
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    description: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
};

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<VideoDetailType | null>(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet || !videoDetail?.statistics) {
    return <Typography color='#fff'>Caricamento...</Typography>;
  }

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography
              color='#fff'
              variant='h5'
              fontWeight='bold'
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link href={`/channel/${channelId}`}>
                <Typography
                  variant='subtitle1'
                  color='#fff'
                  sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack>
                <Stack
                  direction='row'
                  gap='20px'
                  alignItems='center'
                >
                  <Typography
                    variant='body1'
                    sx={{
                      opacity: 0.7,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    {parseInt(viewCount).toLocaleString()} visualizzazioni
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      opacity: 0.7,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    {parseInt(likeCount).toLocaleString()} Mi piace
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          alignItems='center'
          justifyContent='center'
        >
          <Videos
            videos={videos ?? []}
            direction='column'
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
