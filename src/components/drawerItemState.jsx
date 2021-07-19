import React, { useState } from "react";
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

const DrawerItemState = (props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("Home");
  const [items] = useState([
    { label: "Home", icon: HomeIcon },
    { label: "About", icon: WebIcon, disabled: true },
    { label: "Contact", icon: WebIcon },
    { label: "Service", icon: WebIcon, hidden: true },
  ]);
  const onClick = (content) => {
    setOpen(false);
    setContent(content);
  };
  return (
    <Grid container justify="space-between">
      <Grid item>{/* Show contant  */}</Grid>
      <Grid item>{/* Drawer  */}</Grid>
      <Grid item>
        <Button onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Close"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default DrawerItemState;
