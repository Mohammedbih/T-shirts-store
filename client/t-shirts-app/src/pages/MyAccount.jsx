import React from "react";
import styled from "styled-components";
import {
  Typography,
  Avatar,
  Paper,
  Tabs,
  Container,
  Button,
  TextField,
} from "@mui/material";
import { Box, minHeight } from "@mui/system";

const MyAccount = () => {
  return (

      <Box
        sx={{
          marginTop: "250px",   
          boxShadow: "1px 2px 3px #000",
          width: "55%",
          marginLeft: "400px",
          display: "flex",
          alignItems: "center",
          minHeight: "100px",
        }}
      >
        <Container
          sx={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "40%",
            marginBottom: "70px",
          }}
        >
          <Typography variant="h4" marginTop={5}>
            Edit Profile
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Name"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Password"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Phone Number"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button size="large" sx={{ marginTop: "10px" }}>
            Edit Information
          </Button>
        </Container>
      </Box>
  );
};

export default MyAccount;
