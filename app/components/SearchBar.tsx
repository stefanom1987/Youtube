"use client";

import { useRouter } from "next/navigation";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      console.log("Search Term:", searchTerm);
      router.push(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Cerca...'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <IconButton
        type='submit'
        sx={{ p: "10px", color: "red" }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
