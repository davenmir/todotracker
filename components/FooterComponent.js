import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { ListItem, List } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function FooterComponent() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          bottom: 0,
          width: "100%",
          justifyContent: "center",
          "& > *": { minWidth: 0, flexBasis: 200 },
          bgcolor: "#2196f3",
        }}
        component="footer"
      >
        <Grid>
          <List orientation="horizontal">
            <ListItem>
              <IconButton href="https://github.com/davenmir" target="_blank">
                <GitHubIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton
                href="https://www.linkedin.com/in/michael-davenport-41bab6132/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton href="mailto:davenmir95@gmail.com" target="_blank">
                <EmailIcon />
              </IconButton>
            </ListItem>
          </List>
        </Grid>
      </Box>
    </>
  );
}

export default FooterComponent;
