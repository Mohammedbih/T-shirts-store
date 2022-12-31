import React from "react";
import { Box } from "@mui/material";
import Banner from "../pages/HomePage/Banner";
import Categories from "../pages/categories/Categories"

export default function Home() {
  return (
    <div>
      <Box sx={{ marginTop: "70px" }}>
        <Banner />
      </Box>
      <Categories />
    </div>
  );
}
