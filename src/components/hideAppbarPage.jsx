import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from "@material-ui/core/Fade";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    flex: 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
});
const HideAppbarPage = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menu}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.flex} variant="title">
            Title
          </Typography>
          <Button color="inherit" variant="text">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(500).fill(null).map((v, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default withStyles(styles)(HideAppbarPage);
