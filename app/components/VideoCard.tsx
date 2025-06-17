import Link from "next/link";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: {
  video: {
    id: {
      videoId: string;
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
  };
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link href={`/video/${videoId}`}>
        <CardMedia
          component='img'
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link href={`/video/${videoId}`}>
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            color='#fff'
          >
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link href={`/channel/${snippet?.channelId}`}>
          <Typography
            variant='subtitle2'
            fontWeight='bold'
            color='gray'
          >
            {snippet?.channelTitle}
            <CheckCircle
              sx={{
                fontSize: 12,
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
