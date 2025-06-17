import { Stack, Box } from "@mui/material";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({
  videos,
  direction,
}: {
  videos: {
    id: {
      videoId: string;
      channelId: string;
    };
    snippet: {
      title: string;
      channelId: string;
      channelTitle: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
    };
  }[];
  direction?: "row" | "column";
}) => {
  if (!videos?.length) return <div>Caricamento...</div>;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
