import React from "react";
import styled from "styled-components";
import { categories } from "./data";
import CategoryItem from "./CategoryItem";
// import { Typography } from "@mui/material";
// import { Box } from "@mui/system";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};
export default Categories;
