import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from "@material-ui/core/Fade";

const HideAppbarPage = (props) => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title">Title</Typography>
          <Button color="inherit" variant="text">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HideAppbarPage;
