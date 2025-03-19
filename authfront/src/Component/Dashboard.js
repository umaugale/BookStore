import React from "react";
import { Typography, Container } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Book Management System!
      </Typography>
      <Typography>
        Use the navigation bar to access the book list or login.
      </Typography>
    </Container>
  );
};

export default Dashboard;
