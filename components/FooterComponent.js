import React from "react";
import { Box, Container, Grid, Typeography } from "@mui/material";
import { ListItem } from "@mui/joy";

function FooterComponent() {
  return (
    <>
      <Box sx={{ bgcolor: "rgb(136, 181, 226)", p: 4 }} component="footer">
        <Container maxWidth="md">
          <Grid container sx={4}>
            <ListItem></ListItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default FooterComponent;
