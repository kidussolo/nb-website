import React from "react";
import { Typography, Link, Box } from "@material-ui/core";

function Copyright () {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://newsbrain.io"></Link>{" "}
      {new Date().getFullYear()} Newsbrain. All rights reserved.
    </Typography>
  );
}

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          mb: 2,
        }}
      >
        <Copyright />
      </Box>
    </div>
  );
};

export default Footer;
