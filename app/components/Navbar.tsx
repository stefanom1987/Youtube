import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        gap={2}
      >
        <Link
          href='/'
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image
            src={logo}
            alt='logo'
            width={45}
            height={45}
          />
        </Link>
        <Typography
          color='#fff'
          variant='h1'
          fontSize='1.2rem'
        >
          Youtube Clone
        </Typography>
      </Stack>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
