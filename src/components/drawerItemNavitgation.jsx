import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
const styles = (theme) => ({
  alignContent: {
    alignSelf: "center",
  },
});

const DrawerItemNavigation = (props) => {
  return <h1>Hello</h1>;
};

export default withStyles(styles)(DrawerItemNavigation);
